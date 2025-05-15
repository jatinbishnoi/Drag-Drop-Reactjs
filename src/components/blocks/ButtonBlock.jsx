import React, { useState } from 'react';

const buttonStyles = {
  primary: "bg-blue-500 text-white hover:bg-blue-600",
  secondary: "bg-gray-500 text-white hover:bg-gray-600",
  success: "bg-green-500 text-white hover:bg-green-600",
  danger: "bg-red-500 text-white hover:bg-red-600",
  outline: "border border-blue-500 text-blue-500 hover:bg-blue-50",
  link: "text-blue-500 underline bg-transparent hover:text-blue-700"
};

const buttonSizes = {
  small: "px-3 py-1 text-sm",
  medium: "px-6 py-2 text-base",
  large: "px-8 py-3 text-lg"
};

const ButtonBlock = ({
  content = "Click Me",
  style: initialStyle = "primary",
  size: initialSize = "medium",
  onUpdate
}) => {
  const [text, setText] = useState(content);
  const [isEditing, setIsEditing] = useState(false);
  const [style, setStyle] = useState(initialStyle);
  const [size, setSize] = useState(initialSize);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    if (onUpdate) {
      onUpdate({ content: text, style, size });
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setText(content);
    setStyle(initialStyle);
    setSize(initialSize);
  };

  return (
    <div className="p-4 border rounded bg-white shadow-md mb-4 cursor-pointer hover:border-blue-500">
      {isEditing ? (
        <div className="space-y-2">
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Button text"
            autoFocus
          />
          <div className="flex gap-2">
            <select
              className="p-2 border rounded"
              value={style}
              onChange={e => setStyle(e.target.value)}
            >
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
              <option value="success">Success</option>
              <option value="danger">Danger</option>
              <option value="outline">Outline</option>
              <option value="link">Link</option>
            </select>
            <select
              className="p-2 border rounded"
              value={size}
              onChange={e => setSize(e.target.value)}
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
          <div className="flex gap-2 mt-2">
            <button
              className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="px-4 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button
          className={`${buttonStyles[style]} ${buttonSizes[size]} rounded transition-colors`}
          onDoubleClick={handleDoubleClick}
        >
          {text}
        </button>
      )}
    </div>
  );
};

export default ButtonBlock;