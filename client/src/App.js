import './App.css';
import LandingLayout from './layouts/LandingLayout';
import SkillsLayout from './layouts/SkillsLayout';
import ProjectsLayout from './layouts/ProjectLayout';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <div className='App'>
      <LandingLayout />
      <SkillsLayout />
      <ProjectsLayout />
    </div>
  );
}

export default App;
