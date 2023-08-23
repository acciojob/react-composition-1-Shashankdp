
import React from "react";
import './../styles/App.css';
import Tabs from "./Tab";

const props = [{title:"Tab 1", content:""},{title:"Tab 2", content:""},{title:"Tab 3", content:""}]

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Tabs props={props}></Tabs>
    </div>
  )
}

export default App
