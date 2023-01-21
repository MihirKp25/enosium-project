import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Dashboard } from './components/dashboard';
import { Home } from './components/home';
import { Context, createContext } from "react"
import { useState } from "react"

export const Appcontext=createContext();
function App() {
  const [dataInput, setDataInput]=useState({
    loan_history: "",
    gaurantor: "",
    marital_status: "",
    amt_in_cuur_acct: "",
    ant_in_sav_acct: "",
    loan_amt: "",
    other_loan_plan: "",
    check_telephone: "",
    owned_property: "",
    type_of_job: "",
  })
  return (
    <Appcontext.Provider value={{dataInput, setDataInput}}>
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/dashboard' exact element={<Dashboard/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
    </Appcontext.Provider>
  );
}

export default App;
