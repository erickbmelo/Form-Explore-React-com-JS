import Banner from "./componentes/Banner/Banner";
import CampoTexto from "./componentes/CampoTexto"; // usado o index.js para encurtar o path do import e ficar mais clean

function App() {
  return (
    <div className="App">
      <Banner/>
      <CampoTexto />
    </div>
  );
}

export default App;
