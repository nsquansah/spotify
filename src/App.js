import './App.css';
import { LandingPageHeader } from './components/LandingPageHeader';
import { FirstContentSection } from './components/FirstContentSection';
import {Features} from './components/Features';

export function App() {
  return (
    <div>
      <LandingPageHeader />
      
      <div>
        <FirstContentSection /> 
    </div>
      
      <div>
        <Features />
        </div>
    </div>
  );
}

export default App;
