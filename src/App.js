import { useEffect } from 'react'
import "./App.scss";

import Landing from "./pages/Landing/Landing";
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {

  useEffect(() => {
    AOS.init({duration: 500});

  }, [])
  return (
    <div className="App">
      <Landing />
    </div>
  );
};

export default App;
