import Header from './components/Header/Header'
import Hero from './components/Hero/Hero';
import Companies  from './components/companies/companies'
import './App.css'
import Residences from './components/Residences/Residences';
import Value from './components/value/value';
function App() {
  return (
    <div className = "App">
        <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
        </div>
        <Companies/>
        <Residences/>
        <Value/>
      </div>
    );
}

export default App;
