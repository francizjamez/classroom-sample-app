import Dashboard from "./components/Dashboard";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Nav />
      <div className="flex flex-1">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
