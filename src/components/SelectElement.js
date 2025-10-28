import React, { useState, useEffect } from "react";

export default function SelectElement({ arr }) {
  const [mode, setMode] = useState("");
  const [displayArr, setDisplayArr] = useState(arr);

  const maxi = () => { setMode("max"); setDisplayArr(arr); };
  const mini = () => { setMode("min"); setDisplayArr(arr); };
  const sortArr = () => { setMode("sort"); };

  useEffect(() => {
    if (mode === "sort") {
      const sorted = [...arr].sort((a, b) => {
        if(typeof a === "number" && typeof b === "number") return a - b;
        return String(a).localeCompare(String(b));
      });
      setDisplayArr([]);
      sorted.forEach((val, i) => {
        setTimeout(() => setDisplayArr(prev => [...prev, val]), i * 1000);
      });
    }
  }, [mode, arr]);

  return (
    <div className="container">
      <div className="addArray">
        {displayArr.map((val, i) => (
          <div key={i} className="array-wrapper">
            <div className="array animate" style={{
              animationDelay: `${i * 0.2}s`,
              backgroundColor:
                mode === "max" && val === Math.max(...arr.filter(v => typeof v==="number")) ? "red" :
                mode === "min" && val === Math.min(...arr.filter(v => typeof v==="number")) ? "green" :
                "#ffde59"
            }}>
              {String(val)}
            </div>
            <div className="index">{i}</div>
          </div>
        ))}
      </div>

      <div className="updateService">
        <div>
          <button className="btn" onClick={maxi}>Max</button>
          <button className="btn" onClick={mini}>Min</button>
          <button className="btn" onClick={sortArr}>Sort</button>
        </div>
      </div>
    </div>
  );
}
