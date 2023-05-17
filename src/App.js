
import React from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
} from "react-router-dom";

 
function App() {
  let pageSize = 9;
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            < Route exact path="/" element={<News key="general" pageSize={pageSize} category={"general"} />} />
            < Route exact path="/business" element={<News key="business" pageSize={pageSize} category={"business"} />} />
            < Route exact path="/entertainment" element={<News key="entertainment" pageSize={pageSize} category={"entertainment"} />} />
            < Route exact path="/general" element={<News key="general" pageSize={pageSize} category={"general"} />} />
            < Route exact path="/health" element={<News key="health" pageSize={pageSize} category={"health"} />} />
            < Route exact path="/science" element={<News key="science" pageSize={pageSize} category={"science"} />} />
            < Route exact path="/sports" element={<News key="sports" pageSize={pageSize} category={"sports"} />} />
            < Route exact path="/technology" element={<News key="technology" pageSize={pageSize} category={"technology"} />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  
}
export default App