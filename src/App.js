import './App.css';
import { LandingPageHeader } from './components/LandingPageHeader';
import { FirstContentSection } from './components/FirstContentSection';
import {Features} from './components/Features';
import { Pricing } from './components/pricing/index';

export function App() {
  return (
    <div>
      <LandingPageHeader />
      
      <div>
        <FirstContentSection /> 
    </div>
      
      <div>
        <Features />
        <Pricing />
        </div>
    </div>
  );
}

export default App;
