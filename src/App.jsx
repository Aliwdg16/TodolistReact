import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Edit } from "./Components/Edit";
import { Clearlist } from "./Components/Clearlist";
import { Add } from "./Components/Add";
import { SetLocalStorage } from "./Components/SetLocalStorage";
import { GetlocalStorage } from "./Components/GetlocalStorage";

function App() {
  return (
    <>
      <div className="container">
        <header>
          <div className="headertodo">
            <div className="logona">
              {" "}
              <img
                src="https://static.vecteezy.com/system/resources/previews/006/549/765/non_2x/to-do-list-hand-drawn-doodle-icon-free-vector.jpg"
                className="imglogo"
                alt="logo"
              />{" "}
              <h1> To-do-list </h1>
            </div>
            <div className="headercontant">
              <p>Überuns</p>
              <p>Kontakt</p>
            </div>
          </div>
        </header>
        <main>
          <div className="apptodo">
            <div className="d-flex logoh2">
              <h></h>
              <img
                src="https://static.vecteezy.com/system/resources/previews/006/549/765/non_2x/to-do-list-hand-drawn-doodle-icon-free-vector.jpg"
                className="imglogo"
                alt="logo"
              />
              <h1>To-Do Liste</h1>
            </div>
            <div className="inputbtn">
              <input
                type="text"
                className="add"
                id="add"
                placeholder="Enter task"
              />

              <Add />
            </div>
            <div className="btnlist">
              <Clearlist />
              <Edit />
               {/* <SetLocalStorage /> */}
              {/* <GetlocalStorage />  */}
            </div> 

            <div className="ulli">
              <ul className="list-group list-group-flush" id="itemlist">
                <li className="list-group-item">ali</li>
                <li className="list-group-item">Daniel</li>
                <li className="list-group-item">clara</li>
                <li className="list-group-item">michal</li> 
              </ul>
            </div>
          </div>
        </main>
      </div>

    
    </>
  );
}

export default App;
