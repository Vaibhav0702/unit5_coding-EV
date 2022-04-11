import { useState } from "react";

import "./App.css";


function App() {

  const [ Score , setScore ] = useState(76);

  const [ Wicket , setWicket ] = useState(2);

  const [ Ball , setBall ] = useState(50);


const addHandle = (value) => {

  if( Score >= 100 )
  {
    return;
  }

  setScore( Score + value)
}

const addWicket = (value) => {
  if(Wicket === 12 || Score >= 100 )
  {
    return;
  }

  setWicket( Wicket + value)
}

const addBall = (value) => {
  if( Score >= 100 )
  {
    return;
  }

   
  setBall(  Ball + value );
}




  return (
    <div className="App">
      <h3 className="title" >India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
              Score

            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
               Wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.

               Ball 
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=> addHandle(1)} >Add 1</button>
        <button className="addScore4" onClick={()=> addHandle(4)} >Add 4</button>
        <button className="addScore6" onClick={()=> addHandle(6)} >Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=> addWicket(1)} >Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=> addBall(1)} >Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}

       <h1 className="Status">{Score >= 100 ? "India Won": ""}</h1>


    </div>
  );
}

export default App;