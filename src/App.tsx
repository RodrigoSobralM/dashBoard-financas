import { Budget, Home, Login, Pots, RecurringBills, Registration, Transactions } from "./pages"
import {BrowserRouter as Router, Route, Routes } from "react-router"


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/cadastro" element={<Registration/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/transacoes" element={<Transactions/>} />
        <Route path="/orcamento" element={<Budget/>} />
        <Route path="/carteira" element={<Pots/>} />
        <Route path="/conta-corrente" element={<RecurringBills/>} />
      </Routes>
    </Router>
  )
}

export default App
