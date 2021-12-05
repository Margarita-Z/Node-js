import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Route,Routes} from 'react-router-dom'
import Footer from './component/Footer';
import HomePage from './component/HomePage/HomePage';
import Login from './component/Login/Login';
import BreakFast from "./component/BreakFast/BreakFast";
import Braunch from "./component/Braunch/Braunch";
import Lunch from "./component/Lunch/Lunch";
import Dinner from "./component/Dinner/Dinner";
import Account from "./component/Account/Account";
import MyProfile from "./component/MyProfile/MyProfile";
import MyRecipes from "./component/MyRecipes/MyRecipes";
import CreateRecipe from "./component/CreateRecipe/CreateRecipe";



export function App () {
  
    return (
        <div className="App">
         
          <Routes>
            <Route path = '/' element = {<HomePage/>} />
            <Route path = '/login' element = {<Login/>} />
            <Route path = '/breakFast' element = {<BreakFast/>} />
            <Route path = '/braunch' element = {<Braunch/>} />
            <Route path = '/lunch' element = {<Lunch/>} />
            <Route path = '/dinner' element = {<Dinner/>} />
            <Route path = '/register' element = {<Account/>} />
            <Route path = '/myProfile' element = {<MyProfile/>} />
            <Route path = '/myRecipes' element = {<MyRecipes/>} />
            <Route path = '/createRecipe' element = {<CreateRecipe/>} />
          </Routes>
          <Footer />
        </div>
      

    );
  }



