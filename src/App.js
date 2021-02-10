import logo from './logo.svg';
import './App.css';
import FlexiForm from './components/FlexiForm';
import React, { useState } from 'react';
import useConfigData from './components/useConfigData'

function App() {
  const initData = useConfigData();
  let [configData, setConfigData] = useState(initData);

  const setDynamicVal1 = (obj, k, v) => {
    for (let i = 0; i < obj.items.length; i++) {
      let item = obj.items[i];
      if (item.key) {
        if (item.key === k) {
          item[item["name"]] = v;
          return
        }
      }
    }
    for (let i = 0; i < obj.children.length; i++) {
      setDynamicVal1(obj.children[i], k, v);
    }
  }

  const setDynamicVal = (key, val) => {
    setDynamicVal1(configData, key, val);
    if (configData) {
      setConfigData(configData);
    }
  }
  const submit = () => {
    console.log(configData);
  }
  return (
    <div className="App">
      <header className="App-header">
        <FlexiForm setDynamicVal={setDynamicVal} configData={configData} />
        <button onClick={submit}>Submit</button>
      </header>
    </div>
  );
}

export default App;
