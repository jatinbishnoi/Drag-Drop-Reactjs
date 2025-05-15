const blocks = [
  { type: 'text', label: 'Text' },
  { type: 'image', label: 'Image' },
  { type: 'button', label: 'Button' },
  { type: 'table', label: 'Table' }
];

export default function Sidebar() {
  return (
    <div className="w-1/4 p-4 border-r">
      <h2 className="text-xl mb-4">Elements</h2>
      {blocks.map(block => (
        <div
          key={block.type}
          draggable
          onDragStart={e => e.dataTransfer.setData("block-type", block.type)}
          className="p-2 border mb-2 cursor-move bg-gray-100"
        >
          {block.label}
        </div>
      ))}
    </div>
  );
}
