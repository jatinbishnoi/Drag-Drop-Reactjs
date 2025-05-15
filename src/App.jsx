import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import PropertiesPanel from './components/PropertiesPanel';
import { BuilderProvider } from './contexts/BuilderContext';

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
