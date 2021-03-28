import React, { useEffect, useState } from "react";
import parse from 'html-react-parser';

import './App.css';

const App = () => {
  const [data, setData] = useState(<h1>Loading data from miner...</h1>);

  useEffect(() => {
    getStatus();
  }, []);

  const customParse = (str) => {
    let parser = new DOMParser();
    let doc = parser.parseFromString(str, 'text/html');
    console.log(doc.body);

    const miner = doc.querySelector("#maincontainer").querySelector("#maincontent").
      querySelector("#cbi-bmminerstatus").querySelectorAll("#cbi-table-table")[2];
    console.log(miner);
    console.log(miner.innerHTML);
    
    return miner.innerHTML;
  }

  const getStatus = async () => {
    try {
      const res = await fetch("/api/data");
      let statusInfo = await res.text();
      statusInfo = statusInfo.replaceAll("&quot;", "\"");
      statusInfo = statusInfo.replaceAll("&#10;", "\n");
      setData(parse(customParse(statusInfo))); 
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      {data}
    </div>
  );
}

export default App;
