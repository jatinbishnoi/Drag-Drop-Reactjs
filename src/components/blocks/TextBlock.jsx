import React, { useState, useEffect } from 'react';

const sampleTexts = [
  "Welcome to our website! We create amazing digital experiences.",
  "Our team of experts is dedicated to delivering high-quality solutions.",
  "Transform your ideas into reality with our innovative platform.",
  "Building the future, one block at a time.",
  "Create beautiful websites with our drag-and-drop builder."
];

const TextBlock = ({ content, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(content || sampleTexts[0]);

  // Only update local state from props when not editing
  useEffect(() => {
    if (!isEditing) {
      setText(content || sampleTexts[0]);
    }
  }, [content, isEditing]);

  const handleDoubleClick = (e) => {
    e.stopPropagation();
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (text !== content && onUpdate) {
      onUpdate({ content: text });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleBlur();
    }
    if (e.key === 'Escape') {
      setIsEditing(false);
      setText(content); // Reset to original content
    }
  };

  return (
    <div className="p-4 border rounded bg-white shadow-md mb-4 cursor-pointer hover:border-blue-500">
      {isEditing ? (
        <textarea
          className="w-full p-2 border rounded focus:outline-none focus:border-blue-500 min-h-[100px] resize-none"
          value={text}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
          placeholder="Type your text here..."
        />
      ) : (
        <div
          className="min-h-[1em] p-2 whitespace-pre-wrap"
          onDoubleClick={handleDoubleClick}
          role="textbox"
          tabIndex={0}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default TextBlock;