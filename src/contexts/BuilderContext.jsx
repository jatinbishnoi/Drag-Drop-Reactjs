import { createContext, useContext, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Canvas from '../components/Canvas';
import PropertiesPanel from '../components/PropertiesPanel';

const BuilderContext = createContext();

export function BuilderProvider({ children }) {
  const [elements, setElements] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const updateElement = (id, updates) => {
    setElements(elements.map(el => 
      el.id === id ? { ...el, props: { ...el.props, ...updates } } : el
    ));
  };

  return (
    <BuilderContext.Provider value={{ 
      elements, 
      setElements, 
      selectedId, 
      setSelectedId, 
      updateElement 
    }}>
      {children}
    </BuilderContext.Provider>
  );
}

function App() {
  return (
    <BuilderProvider>
      <div className="flex h-screen">
        <Sidebar />
        <Canvas />
        <PropertiesPanel />
      </div>
    </BuilderProvider>
  );
}

export default App;

export const useBuilder = () => {
  const context = useContext(BuilderContext);
  if (!context) {
    throw new Error('useBuilder must be used within a BuilderProvider');
  }
  return context;
};
