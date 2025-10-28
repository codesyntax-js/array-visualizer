import React, { useState } from "react";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/themes/default.min.css";

alertify.set("notifier", "position", "top-center");
alertify.set("notifier", "delay", 2);

export default function UpdateElement({ arr, setArr }) {
  const [index, setIndex] = useState("");
  const [value, setValue] = useState("");
  const [updatingIndex, setUpdatingIndex] = useState(null);

  const parseValue = (val) => {
    val = val.trim();
    if(val.toLowerCase() === "true") return true;
    if(val.toLowerCase() === "false") return false;
    if(!isNaN(Number(val))) return Number(val);
    return val;
  }

  const updateItem = () => {
    if (index === "" || isNaN(index) || index < 0 || index >= arr.length) { alertify.error("Invalid Index!"); return; }
    if (value === "") { alertify.error("Value cannot be empty!"); return; }

    setUpdatingIndex(index);

    setTimeout(() => {
      const newArr = [...arr];
      newArr[index] = parseValue(value);
      setArr(newArr);
      setUpdatingIndex(null);
      alertify.success(`Updated index ${index} with value ${value}`);
      setValue("");
    }, 500);
  };

  return (
    <div className="container">
      <div className="addArray">
        {arr.map((val, i) => (
          <div key={i} className="array-wrapper">
            <div className={`array ${updatingIndex === i ? "updating" : "animate"}`} style={{ animationDelay: `${i * 0.1}s` }}>
              {String(val)}
            </div>
            <div className="index">{i}</div>
          </div>
        ))}
      </div>

      <div className="updateService">
        <div>
          <label>Enter Index i =</label>
          <input type="number" value={index} onChange={(e) => setIndex(e.target.value)} />
        </div>
        <div>
          <label>Enter Value v =</label>
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
      </div>
      <button className="btn" onClick={updateItem}>Update</button>
    </div>
  );
}
