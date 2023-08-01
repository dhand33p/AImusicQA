import { Route, Switch } from 'wouter';
import About from './pages/about';
import Home from './pages/home';
//import Navbar from './components/navbar'; OLD NAVBAR, DO NOT USE
import VerticalNavbar from './components/VerticalNavbar'; // New Navbar!
import './App.css';
import Chatbot from './pages/chatbot';
//import Summarize from './pages/summarize';
//<Route path='/summarize' component={Summarize} />

function App() {
    return (
      <>
        <VerticalNavbar />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
          <Route path="/chatbot" component={Chatbot} />
        </Switch>
      </>
    );

    }
export default App;