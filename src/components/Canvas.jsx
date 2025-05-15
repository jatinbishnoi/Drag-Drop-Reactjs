import React from 'react';
import { TextBlock, ImageBlock, ButtonBlock, TableBlock } from './blocks';
import { useBuilder } from '../contexts/BuilderContext';

export default function Canvas() {
  const { elements, setElements, setSelectedId } = useBuilder();

  const handleDrop = (e) => {
    e.preventDefault();
    const type = e.dataTransfer.getData("block-type");
    const newElement = {
      id: Date.now(),
      type,
      props: {
        content:
          type === 'text'
            ? 'Double click to edit this text'
            : type === 'button'
            ? 'Click Me'
            : type === 'table'
            ? {
                headers: ['Header 1', 'Header 2', 'Header 3'],
                rows: [
                  ['Cell 1', 'Cell 2', 'Cell 3'],
                  ['Cell 4', 'Cell 5', 'Cell 6']
                ],
                style: 'simple'
              }
            : 'https://source.unsplash.com/featured/800x600?nature',
      },
    };
    setElements([...elements, newElement]);
  };

  // ✅ FIX: Spread newProps to avoid nesting { content: { content: ... } }
  const handleUpdate = (id, newProps) => {
    setElements(elements.map((el) =>
      el.id === id ? { ...el, props: { ...el.props, ...newProps } } : el
    ));
  };

  const renderElement = (el) => {
    const { id, type } = el;
    const props = {
      ...el.props,
      onUpdate: (newProps) => handleUpdate(id, newProps),
      onClick: () => setSelectedId(id),
    };

    switch (type) {
      case 'text':
        return <TextBlock key={id} {...props} />;
      case 'image':
        return <ImageBlock key={id} {...props} />;
      case 'button':
        return <ButtonBlock key={id} {...props} />;
      case 'table':
        return <TableBlock key={id} {...props} />;
      default:
        return null;
    }
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="flex-1 p-8 bg-gray-100 min-h-screen overflow-y-auto"
    >
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 min-h-[calc(100vh-4rem)]">
        {elements.length === 0 ? (
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center text-gray-500">
            Drag and drop elements here
          </div>
        ) : (
          elements.map((el) => renderElement(el))
        )}
      </div>
    </div>
  );
}
