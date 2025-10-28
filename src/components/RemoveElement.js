import React, { useState } from "react";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/themes/default.min.css";

alertify.set("notifier", "position", "top-center");
alertify.set("notifier", "delay", 2);

export default function RemoveElement({ arr, setArr }) {
  const [index, setIndex] = useState(0);
  const [removingIndex, setRemovingIndex] = useState(null);

  const removeItem = () => {
    if (arr.length === 0) { alertify.error("Array is empty"); return; }
    if (index === "" || isNaN(index) || index < 0 || index >= arr.length) { alertify.error("Invalid index"); return; }

    setRemovingIndex(index);

    setTimeout(() => {
      const removedValue = arr[index];
      const newArr = [...arr];
      newArr.splice(index, 1);
      setArr(newArr);
      setRemovingIndex(null);

      alertify.success(`Removed element at index ${index} and Value is : ${String(removedValue)}`);
    }, 500);
  };

  return (
    <div className="container">
      <div className="addArray">
        {arr.map((val, i) => (
          <div key={i} className="array-wrapper">
            <div className={`array ${removingIndex === i ? "removing" : "animate"}`} style={{ animationDelay: `${i * 0.1}s` }}>
              {String(val)}
            </div>
            <div className="index">{i}</div>
          </div>
        ))}
      </div>

      <div className="updateService">
        <div>
          <p>Enter Index i =
            <input type="number" value={index} onChange={(e) => setIndex(e.target.value)} />
          </p>
        </div>
      </div>
      <button className="btn" onClick={removeItem}>Remove</button>
    </div>
  );
}
