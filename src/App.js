import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function App() {
  const pageSize = 9;
  const ApiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  const setProgessFunc = (progress) => {
    setProgress(progress);
  };
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgessFunc}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
                ApiKey={ApiKey}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgessFunc}
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
                ApiKey={ApiKey}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgessFunc}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
                ApiKey={ApiKey}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgessFunc}
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
                ApiKey={ApiKey}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgessFunc}
                key="science"
                pageSize={pageSize}
                country="in"
                category="science"
                ApiKey={ApiKey}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgessFunc}
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports"
                ApiKey={ApiKey}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgessFunc}
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
                ApiKey={ApiKey}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
