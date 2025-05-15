import React, { useState } from 'react';

const TableBlock = ({ content, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  const defaultContent = {
    headers: ['Header 1', 'Header 2', 'Header 3'],
    rows: [
      ['Cell 1', 'Cell 2', 'Cell 3'],
      ['Cell 4', 'Cell 5', 'Cell 6']
    ],
    style: 'simple'
  };

  const currentContent = content || defaultContent;

  const handleCellEdit = (rowIndex, cellIndex, value) => {
    const newContent = { ...currentContent };
    if (rowIndex === -1) {
      newContent.headers[cellIndex] = value;
    } else {
      newContent.rows[rowIndex][cellIndex] = value;
    }
    onUpdate({ content: newContent });
  };

  const addRow = () => {
    const newContent = { ...currentContent };
    const newRow = new Array(currentContent.headers.length).fill('New Cell');
    newContent.rows = [...newContent.rows, newRow];
    onUpdate({ content: newContent });
  };

  const deleteRow = (rowIndex) => {
    const newContent = { ...currentContent };
    newContent.rows = newContent.rows.filter((_, index) => index !== rowIndex);
    onUpdate({ content: newContent });
  };

  const addColumn = () => {
    const newContent = { ...currentContent };
    newContent.headers = [...newContent.headers, 'New Header'];
    newContent.rows = newContent.rows.map(row => [...row, 'New Cell']);
    onUpdate({ content: newContent });
  };

  const deleteColumn = (colIndex) => {
    const newContent = { ...currentContent };
    newContent.headers = newContent.headers.filter((_, index) => index !== colIndex);
    newContent.rows = newContent.rows.map(row => 
      row.filter((_, index) => index !== colIndex)
    );
    onUpdate({ content: newContent });
  };

  const changeStyle = (newStyle) => {
    onUpdate({ content: { ...currentContent, style: newStyle } });
  };

  const tableStyles = {
    simple: "min-w-full divide-y divide-gray-200",
    striped: "min-w-full divide-y divide-gray-200",
    bordered: "min-w-full border border-gray-200 divide-y divide-gray-200"
  };

  return (
    <div className="p-4 border rounded bg-white shadow-md mb-4">
      {isEditing && (
        <div className="mb-4 flex gap-2">
          <select
            value={currentContent.style}
            onChange={(e) => changeStyle(e.target.value)}
            className="px-3 py-1 border rounded"
          >
            <option value="simple">Simple</option>
            <option value="striped">Striped</option>
            <option value="bordered">Bordered</option>
          </select>
          <button
            onClick={addColumn}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Column
          </button>
          <button
            onClick={addRow}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Row
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 ml-auto"
          >
            Done
          </button>
        </div>
      )}

      <div onDoubleClick={() => setIsEditing(true)}>
        <table className={tableStyles[currentContent.style]}>
          <thead className="bg-gray-50">
            <tr>
              {currentContent.headers.map((header, index) => (
                <th 
                  key={index}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider relative"
                >
                  {isEditing ? (
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={header}
                        onChange={(e) => handleCellEdit(-1, index, e.target.value)}
                        className="w-full p-1 border rounded"
                      />
                      <button
                        onClick={() => deleteColumn(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        ×
                      </button>
                    </div>
                  ) : header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentContent.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className={currentContent.style === 'striped' && rowIndex % 2 ? 'bg-gray-50' : ''}>
                {row.map((cell, cellIndex) => (
                  <td 
                    key={cellIndex}
                    className="px-6 py-4 whitespace-nowrap relative"
                  >
                    {isEditing ? (
                      <input
                        type="text"
                        value={cell}
                        onChange={(e) => handleCellEdit(rowIndex, cellIndex, e.target.value)}
                        className="w-full p-1 border rounded"
                      />
                    ) : cell}
                  </td>
                ))}
                {isEditing && (
                  <td className="px-2">
                    <button
                      onClick={() => deleteRow(rowIndex)}
                      className="text-red-500 hover:text-red-700"
                    >
                      ×
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableBlock;