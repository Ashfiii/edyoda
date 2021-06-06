import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import HomeSection from './components/HomeSection/HomeSection';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ModuleSection from './components/ModuleSection/ModuleSection';
import InstructorSection from './components/InstructorSection/InstructorSection';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Navbar />
        <div className="mainsection">
          <Sidebar />
          <Switch>
            <Route path="/instructors">
              <InstructorSection />
            </Route>
            <Route path="/modules">
              <ModuleSection />
            </Route>
            <Route path="/home">
              <HomeSection />
            </Route>
          </Switch>
        </div>
      </Router> 
      
    </div>
  );
}

export default App;
