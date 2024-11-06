import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Create />}/>
            <Route path="/read" element={<Read />} />
            <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>




    </div>
  )
}




// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Create from './Components/Create';
// import Read from './Components/Read';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// export default function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Create />} />
//           <Route path="/read" element={<Read />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }
