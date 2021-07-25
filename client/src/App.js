
import './App.css';
import LandingLayout from './layouts/LandingLayout';
import SkillsLayout from './layouts/SkillsLayout';
import Skills from './components/Skills'

function App() {
  return (
    <div className="App">
      <LandingLayout/>
      <SkillsLayout/>
      <Skills/>
    </div>
  );
}

export default App;
