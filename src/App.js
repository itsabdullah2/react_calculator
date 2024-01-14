import Calculator from "./components/Calculator";

const App = () => {
  return (
    <div className="bg-gray-200 h-screen flex items-center justify-center bg-pattern-main bg-cover bg-center relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-90 bg-white" />
      <Calculator />
    </div>
  );
};

export default App;
