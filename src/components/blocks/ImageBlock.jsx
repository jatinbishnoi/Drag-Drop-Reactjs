import React, { useState } from 'react';

const defaultImages = [
  { url: "https://picsum.photos/id/237/200/300", alt: "Nature landscape" },
  { url: "https://picsum.photos/seed/picsum/200/300", alt: "Modern technology" },
  { url: "https://picsum.photos/200/300?grayscale", alt: "Business and workspace" },
  { url: "https://picsum.photos/200/300/?blur", alt: "Creative design" },
  { url: "https://picsum.photos/id/870/200/300?grayscale&blur=2", alt: "Modern architecture" }
];

const ImageBlock = ({ content, onUpdate, onError, error }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  const handleDoubleClick = () => setIsEditing(true);

  const handleSelect = (imageUrl) => {
    onUpdate({ content: imageUrl });
    setShowGallery(false);
    setIsEditing(false);
  };

  return (
    <div className="p-4 border rounded bg-white shadow-md mb-4 cursor-pointer hover:border-blue-500">
      {isEditing ? (
        <div className="space-y-4">
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={content}
            onChange={(e) => onUpdate({ content: e.target.value })}
            placeholder="Enter image URL"
            autoFocus
          />
          <button
            onClick={() => setShowGallery(!showGallery)}
            className="text-blue-500 underline"
          >
            Choose from gallery
          </button>
          {showGallery && (
            <div className="grid grid-cols-3 gap-2">
              {defaultImages.map((img, index) => (
                <img
                  key={index}
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-24 object-cover cursor-pointer border rounded hover:border-blue-500"
                  onClick={() => handleSelect(img.url)}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        <img
          src={content}
          alt="Content"
          className={`max-w-full h-auto rounded ${error ? 'border-red-500' : ''}`}
          onDoubleClick={handleDoubleClick}
          onError={() => onError && onError()}
        />
      )}
    </div>
  );
};

export default ImageBlock;
