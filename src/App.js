import React, {useState} from "react";
import "./style.css";

export default function App() {
  const [data, setData] = useState({
    count: 0,
    date: Date()
  })

  const addCount = () => {
    const newDate = Date()
    setData({
      count: data.count + 1,
      date: newDate
    })
  }


  return (
    <div>
      <h1>Fecha: {data.date}</h1>
      <p>{data.count}</p>
      <button onClick={addCount}>AGREGAR</button>
    </div>
  );
}
