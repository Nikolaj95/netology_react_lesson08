import React, {useState} from "react";
import List from "./components/List";
import Details from "./components/Details";
import './App.css';

function App() {
    const [info, setInfo] = useState({id: null, name: ""});

    const handleInfo = (id, name) => {
        setInfo({id, name});
    };

    return (
        <div className="profile">

            <List handleInfo={handleInfo}/>

            <div className="eight wide column">
                {info ? <Details info={info}/> : null}
            </div>
        </div>
    );
}

export default App;
