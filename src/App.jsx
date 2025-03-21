import { Outlet } from "react-router-dom";
import "./App.css";
import About from "./Component/About";
import { Providerofcontetx } from "./Component/Context";
import Eductional from "./Component/Eductional";
import Experties from "./Component/Experties";
import Firstlayout from "./Component/Firstlayout";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import ParticlesComponent from "./Component/Particel";

function App() {
  console.log('Hi')
  return (
    <Providerofcontetx>
      <ParticlesComponent id={"particles"} />
      <div className="app-container">
        <Header />
        <main >
          <Outlet />
        </main>
        <Footer />
      </div>
    </Providerofcontetx>
  );
}

export default App;
