import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Dashboard } from './components/dashboard';
import { Home } from './components/home';
import { Context, createContext } from "react"
import { useState } from "react"

export const Appcontext=createContext();
function App() {
  const [dataInput, setDataInput]=useState({
    maintenance_provider: "1",
    loan_history: "0",
    loan_amt: "0",
    gaurantor: "0",
    marital_status: "0",
    number_of_loans_taken: "1",
    amt_in_cuur_acct: "0",
    ant_in_sav_acct: "0",
    per_of_income: "1",
    other_loan_plan: "0",
    check_telephone: "0",
    owned_property: "0",
    type_of_job: "0",
  })

  const [finalpercent, setFinalpercent]=useState("98");
  return (
    <Appcontext.Provider value={{dataInput, setDataInput, finalpercent, setFinalpercent}}>
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
