import React, { useState } from "react";
import alertify from "alertifyjs";
import "./create.css";
import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/themes/default.min.css";
alertify.set("notifier", "position", "top-center");
alertify.set("notifier", "delay", 2);

export default function CreateArray({ arr, setArr }) {
  const [inputArr, setInputArr] = useState(arr.join(","));
  const [size, setSize] = useState(arr.length);
  const [renderKey, setRenderKey] = useState(0);
  const [showUserDef, setShowUserDef] = useState(false);
  const [showRandom, setShowRandom] = useState(false);

  const parseValue = (val) => {
    val = val.trim();
    if(val.toLowerCase() === "true") return true;
    if(val.toLowerCase() === "false") return false;
    if(!isNaN(Number(val))) return Number(val);
    return val;
  }

  const dispArray = () => {
    const values = inputArr.split(",").map(parseValue);
    const finalArr = new Array(size).fill(null);

    for (let i = 0; i < values.length && i < size; i++) {
      finalArr[i] = values[i];
    }

    setArr(finalArr);
    setRenderKey(prev => prev + 1);
  };

  const createRandArray = () => {
    if (size < 1) {
      alertify.error("Please Enter Size!");
      return;
    }

    const newArr = [];
    for (let i = 0; i < size; i++) {
      newArr.push(Math.floor(Math.random() * 100) + 1);
    }
    setArr(newArr);
    setInputArr(newArr.join(','));
    setRenderKey(prev => prev + 1);
    setShowUserDef(false);
  };

  const emptyArr = () => {
    setArr(prev => prev.map(() => ""));
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputArr(value);
    const tempArray = value.split(',').filter(item => item.trim() !== '');
    setSize(tempArray.length);
  };

  return (
    <div className="container">
      <div className="addArray" key={renderKey}>
        {arr.map((val, i) => (
          <div key={i} className="array-wrapper">
            <div className="array animate" style={{ animationDelay: `${i * 0.2}s` }}>
              {String(val)}
            </div>
            <div className="index">{i}</div>
          </div>
        ))}
      </div>

      <div className="service">
        <div className="usrDefArr-wrapper">
          <button className="user-btn" onClick={() => { setShowUserDef(!showUserDef); setShowRandom(false); }}>
            User Define
          </button>
          {showUserDef && (
            <div className="UserDefArr">
              <div className="updateService1">
                <div>
                  <label>A =
                    <input type="text" value={inputArr} onChange={handleInputChange} />
                  </label>
                </div>
                <div>
                  <label>Size Of Array M =
                    <input type="text" value={size} style={{ textAlign: "center", width: "2.5rem" }} readOnly />
                  </label>
                </div>
                <button className="btn" onClick={dispArray}>Go</button>
              </div>
            </div>
          )}
        </div>

        <div className="usrDefArr-wrapper">
          <button className="btn" onClick={() => { setShowRandom(!showRandom); setShowUserDef(false); }}>
            Random
          </button>
          {showRandom && (
            <div className="RandomArr">
              <div className="rnd">
                <label>Size Of Array M =
                  <input type="number" value={size} onChange={(e) => setSize(Number(e.target.value))} style={{ textAlign: "center", width: "3rem" }} />
                </label>
                <button className="btn" onClick={createRandArray}>Go</button>
              </div>
            </div>
          )}
        </div>

        <button className="btn" onClick={emptyArr}>Empty</button>
      </div>
    </div>
  );
}
