 import React from 'react'
 import "./Home.css"
 import man from "../../assets/man.png"
 import TypingEffect from "react-typing-effect"
 
 function Home() {
   return (
     <div id='home'>
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">VIJENDRA RAJPUT</div>
          <div className="line3"> WEB DEVELOPER
            {/* <TypingEffect
             text = {["WEB DEVELOPER","SOFTWARE DEVELOPER"]}
             speed={100}
             eraseSpeed={50}
             eraseDelay={1000}
             typingDelay={500}
             cursor='|'

            /> */}
          </div>
          <button>HIRE ME</button>
        </div>

      </div>
      <div className="righthome">
        <img src={man} alt="" />
      </div>


     </div>
   )
 }
 
 export default Home