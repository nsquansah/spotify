import './LandingPageHeader.css';
import pic1 from '../assets/images/pic1';

export const LandingPageHeader = () => {
  return (<header className="header">
      <div className="logo">
        <img src={pic1} alt="logo" />
      </div>

  <div className='menu'>
      <ul>
        <li>
          <a href="#/Premium">Premium</a>
          </li>
        <li>
          <a href="#/support">Support</a>
          </li>
      
        <li>
        <a href="#/download">Download</a>
        </li>

        <li>|</li>

        <li className='active'> 
        <a href="#/signup">Sign up</a>
        </li>

        <li className='active'> 
        <a href="#/login">Log in</a>
        </li>
    </ul>
  </div>  
      
    </header>
  );
}