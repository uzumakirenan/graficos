import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

import Line from './components/line'
import Bar from './components/bar'
import Bubble from './components/bubble'
import Doughnut from './components/doughnut'
import Hbar from './components/hbar'
import Pie from './components/pie'
import Polar from './components/polarArea'
import Radar from './components/radar'
import Scatter from './components/scatter'

function App(props) {  

  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Exemplos de Graficos para Dashboards - Renan</NavbarBrand>
        </div>
      </Navbar>

      <div className="row">
        <Line legenda={false} titulo="Grafico tipo Line" />
        <Bar legenda={false} titulo="Grafico tipo Bar" />
        <Bubble legenda={false} titulo="Grafico tipo Bubble" />
        <Doughnut legenda={true} titulo="Grafico tipo Dougnut" />
        <Hbar legenda={false} titulo="Grafico tipo Horizontal Bar" />
        <Pie legenda={true} titulo="Grafico tipo Pie" />
        <Polar legenda={true} titulo="Grafico tipo Polar Area" />
        <Radar legenda={false} titulo="Grafico tipo Radar" />
        <Scatter legenda={false} titulo="Grafico tipo Scatter" />
        
      </div>
      

    </div>
  );
}

export default App;
