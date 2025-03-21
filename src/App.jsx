import { Outlet } from "react-router-dom";
import "./App.css";
import { Providerofcontetx } from "./Component/Context";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import ParticlesComponent from "./Component/Particel";

function App() {
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
