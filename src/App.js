import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function App() {
  const pageSize = 9;
  const ApiKey = "4c09d3fb7bf646f79731c6b4bedb5002";
  const [progress, setProgress] = useState(0);

  const categories = [
    { path: "/", key: "general", category: "general" },
    { path: "/News-Monkey", key: "general", category: "general" },
    { path: "/business", key: "business", category: "business" },
    { path: "/entertainment", key: "entertainment", category: "entertainment" },
    { path: "/health", key: "health", category: "health" },
    { path: "/science", key: "science", category: "science" },
    { path: "/sports", key: "sports", category: "sports" },
    { path: "/technology", key: "technology", category: "technology" },
  ];

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} />
        <Routes>
          {categories.map(({ path, key, category }) => (
            <Route
              exact
              path={path}
              element={
                <News
                  setProgress={setProgress}
                  key={key}
                  pageSize={pageSize}
                  category={category}
                  ApiKey={ApiKey}
                />
              }
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
