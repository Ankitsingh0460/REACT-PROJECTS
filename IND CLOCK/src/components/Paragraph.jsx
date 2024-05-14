import { useEffect } from "react";
import { useState } from "react";

function Paragraph() {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date())
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }

  }, [])

  const dates = date.toLocaleDateString()
  const times = date.toLocaleTimeString()
  return <div> <p className="para">This is the clock that shows the time in Bharat at all times</p>
    <p className="para">This is the current :{dates}-{""}{times}</p>
  </div>
}


export default Paragraph;