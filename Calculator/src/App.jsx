import { useState } from 'react'
import styles from './App.module.css'
import Button from './components/Button'
import Display from './components/Display'

function App() {

  let [currentValue, setNewMethod] = useState([]);

  const buttonKeyDisplay = (buttonText) => {
    if (buttonText === "C") {
      setNewMethod("");

    } else if (buttonText === "=") {
      const result = eval(currentValue)
      setNewMethod(result);
    } else {
      const newvalue = currentValue + buttonText;
      setNewMethod(newvalue);
    }

  }

  return (
    <center>
      <div className={styles.claculator}>
        <Display calvalue={currentValue}></Display>
        <Button handleButton={buttonKeyDisplay}></Button>
      </div>


    </center>
  )
}

export default App
