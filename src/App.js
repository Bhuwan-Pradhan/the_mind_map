import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import HomePage from "./pages/HomePage";
import AddCase from "./components/AddCase";
import PersonHomePage from "./pages/PersonHomePage";
import ClueHomePage from "./pages/ClueHomePage";
import AddClue from "./components/AddClue";
import AddPerson from "./components/AddPerson";
import TimeLine from "./pages/TimeLine";
import UpdateCase from "./components/UpdateCase";
import UpdateClue from "./components/UpdateClue";
import UpdatePerson from "./components/UpdatePerson";


function App() {
  const { token } = useSelector((state) => state.auth);
  let st=0;
  function changetheme(){
    if(st===0){
      
      // alert(document.body);
      document.body.style.backgroundColor="#0F172A";
      // setTimeout(() => {
      //   changethm(1);
      // }, 2000);
      let crds=document.getElementsByClassName("card");
      for (let i = 0; i < crds.length; i++) {
        document.getElementsByClassName("inside-page__text")[i].style.color="#f5f5f5";
        document.getElementsByClassName("card-front")[i].style.backgroundColor="#1E293B";
        document.getElementsByClassName("card-back")[i].style.backgroundColor="#1E293B";
        document.getElementsByClassName("inside-page")[i].style.backgroundColor="#1E293B";
        document.getElementsByClassName("card-front__text-view")[i].style.color="#f5f5f5";
        document.getElementsByClassName("inside-page__heading--city")[i].style.color="#f5f5f5";
        document.getElementsByClassName("inside-page__btn--city")[2*i].style.color="#e5e5e5";
        document.getElementsByClassName("inside-page__btn--city")[2*i+1].style.color="#e5e5e5";
        document.getElementsByClassName("inside-page__btn--city")[2*i].style.backgroundColor="#21434E";
        document.getElementsByClassName("inside-page__btn--city")[2*i+1].style.backgroundColor="#21434E";
        document.getElementsByClassName("inside-page__btn--city")[2*i].style.border="1px solid #21439f";
        document.getElementsByClassName("inside-page__btn--city")[2*i+1].style.border="1px solid #21439f";
      }
      st=1;
      // changethm(1);
      // console.log(document.getElementsByClassName("card-front")[0]);
    }else{
      document.body.style.backgroundColor="#f5f5f5";
      let crds=document.getElementsByClassName("card");
      for (let i = 0; i < crds.length; i++) {
        document.getElementsByClassName("inside-page__text")[i].style.color="#333";
      document.getElementsByClassName("card-front")[i].style.backgroundColor="#ebc489";
        document.getElementsByClassName("card-back")[i].style.backgroundColor="#ebc28a";
        document.getElementsByClassName("inside-page")[i].style.backgroundColor="#ebc489";
        document.getElementsByClassName("card-front__text-view")[i].style.color="#584e53";
        document.getElementsByClassName("inside-page__heading--city")[i].style.color="#584e53";
      }
      for(let i=0;i<2*crds.length;i++){
        document.getElementsByClassName("inside-page__btn--city")[i].style.color="#514b4e";
        document.getElementsByClassName("inside-page__btn--city")[i].style.backgroundColor="transparent";
        document.getElementsByClassName("inside-page__btn--city")[i].style.border="3px solid #6f676b";
      }
      st=0;
      // changethm(0);
      
    }
  }
//   useEffect(() => {
//     changetheme();
// }, []);
  if (token) {
    return (
      <div className="App">
        <button className="themebutton" onClick={changetheme}>Change</button>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/timeline" element={<TimeLine />} />
          <Route path="/person" element={<PersonHomePage />} />
          <Route path="/clue" element={<ClueHomePage />} />
          <Route path="/addCase" element={<AddCase />} />
          <Route path="/addClue" element={<AddClue />} />
          <Route path="/addPerson" element={<AddPerson />} />
          <Route path="/updateCase" element={<UpdateCase />} />
          <Route path="/updateClue" element={<UpdateClue />} />
          <Route path="/updatePerson" element={<UpdatePerson />} />
        </Routes>
      </div>
    );
  }
  else {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    );
  }

}

export default App;