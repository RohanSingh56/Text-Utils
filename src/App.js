import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";
function App(props) {

  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);

    }, 3000);
  }

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  // const [Gmode, setGmode] = useState({
  //   color: 'green'
  // })

  // const toggleGmode = () => {
  //   if (Gmode.color === 'light') {
  //     setGmode({
  //       color: 'green'
  //     })
  //     document.body.style.backgroundColor = 'white';
  //   }
  //   else {
  //     setGmode({
  //       color: "white"
  //     })
  //     document.body.style.backgroundColor = 'green';

  //   }
  // }

  return (
    <>
      <Navbar Mode={Mode} toggleMode={toggleMode}  />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={Mode} />
      {/* <BrowserRouter> */}
      {/* <Routes>

        <Route path="/About" element={<About />}/>
          
          <Route path="/" element={ }/>
           
      </Routes>
      </BrowserRouter> */}
      
    </>
  );
}

export default App;
