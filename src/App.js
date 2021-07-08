import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from './components/Home';
import CasosPositivos from "./components/CasosPositivos";
import Estadisticas from "./components/Estadisticas";
import NavBar from "./utils/NavBar";

 

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>

      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/infectados" component={CasosPositivos} />
          <Route exact path="/estadisticas" component={Estadisticas} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
