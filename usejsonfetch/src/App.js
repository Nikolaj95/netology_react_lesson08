import React from "react";
import "./App.css";
import useJsonFetch from "./componentsHook/useJsonFetch";

function AppHook({ url }) {
  const [data, loading, error] = useJsonFetch(url);
  return (
      <div>
          {data && <div>{data.status}</div>}
          {loading && <div>Loading</div>}
          {error && <div>Has Error</div>}
      </div>

  );
}

function App() {
  return (
      <div className={'status'}>
          <AppHook url={process.env.REACT_APP_DATA_URL} />
          <AppHook url={process.env.REACT_APP_ERROR_URL} />
          <AppHook url={process.env.REACT_APP_LOADING_URL} />
      </div>

  );
}

export default App;
