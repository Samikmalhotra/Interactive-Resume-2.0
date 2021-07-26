
import './App.css';
import LandingLayout from './layouts/LandingLayout';
import SkillsLayout from './layouts/SkillsLayout';
import ProjectsLayout from './layouts/ProjectLayout';

function App() {
  return (
    <div className="App">
      <LandingLayout/>
      <SkillsLayout/>
      <ProjectsLayout/>
    </div>
  );
}

export default App;
