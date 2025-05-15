export const addBlock = (blocks, newBlock) => {
  return [...blocks, { ...newBlock, id: blocks.length + 1 }];
};

export const updateBlock = (blocks, id, updates) => {
  return blocks.map(block => 
    block.id === id ? { ...block, ...updates } : block
  );
};

export const deleteBlock = (blocks, id) => {
  return blocks.filter(block => block.id !== id);
};

export const getBlockById = (blocks, id) => {
  return blocks.find(block => block.id === id);
};