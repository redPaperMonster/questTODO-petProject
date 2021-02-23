import './App.css';
import LeftNavigation from './Side_bars/LeftNavBar/LeftNavigation';
import RightNavigation from './Side_bars/RightNavBar/RightNavigation';
import Quest_info from './Center_content/Quest_info/Quest_info';
import User_info from './Center_content/User_info/User_info';
import Time_manager from './Center_content/Time_manager/Time_manager';
import { BrowserRouter, Route } from 'react-router-dom';
import Shop from './Center_content/Shop/Shop';
import About_me from './Center_content/About/About_me';
import RightNavigationContainer from './Side_bars/RightNavBar/RightNavigationContainer';
import QuestInfoContainer from './Center_content/Quest_info/QuestInfoContainer';

function App(props) {

  return (
    <div>
      <div className="div_grid">
        <div className="div_grid__leftnav">
          <LeftNavigation />
        </div>
        <div className="div_grid__rightnav">
          <RightNavigationContainer />
        </div>
        <div className="div_grid__center">
          <div >
            <Route path='/quest' render={() => <QuestInfoContainer/>} />
            <Route path='/profile' render={() => <User_info />} />
            <Route path='/shop' render={() => <Shop />} />
            <Route path='/timer' render={() => <Time_manager />} />
            <Route path='/about' render={() => <About_me />} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
