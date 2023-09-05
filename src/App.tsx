import './App.css';
import Table from './components/Table';
import data from './data/data';
import { getArraysForClasses } from './utils/utils';


// declaring constants outside of component because it doesn't needs to be recalculated on any state change. If any state chnages.
const allClassesFlavanoids = getArraysForClasses(data, "Flavanoids")
const allClassesGamma = getArraysForClasses(data, "Gamma")


function App() {

  return (
    <div className="App">

      <Table key={'Flavanoids'} classObj={allClassesFlavanoids} name={"Flavanoids"} />
      <Table key="Gamma" classObj={allClassesGamma} name={"Gamma"} />

    </div>
  );
}

export default App;
