import "./App.css";
import LoginButton from "./auth/LoginButton";
import LogoutButton from "./auth/LogoutButton";
import Challenges from "./Challenges";

import {Route, Routes} from "react-router-dom";
function App(){
  return(
    <div className="App-body">
      <span>
         <LoginButton />
         <LogoutButton/>
       </span>
       <Routes>
         <Route path="/challenges" component={Challenges} />
       </Routes>
         </div>
        
         );
}
export default App;