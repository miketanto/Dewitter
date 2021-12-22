import logo from './logo.svg';
import './App.css';
import { AnimatePresence } from "framer-motion";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import Landing from './pages/Landing.js'
function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/">
            <Landing />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

export default App;
