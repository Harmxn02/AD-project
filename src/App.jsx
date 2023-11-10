// import Header from './components/dashboard/Header'
// import Sidebar from './components/dashboard/Sidebar'
// import Homescreen from './components/homescreen/Homescreen'

// import fetchData from '../api';
// const data = await fetchData("/plans");


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import TransactionsList from './pages/Transactions';
import Settings from './pages/Settings';
import AccountDeletedPage from './pages/AccountDeleted';
import DeleteAccount from './pages/DeleteAccount';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<TransactionsList />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/settings/delete-acount" element={<DeleteAccount />} />
          <Route path="/settings/account-deleted" element={<AccountDeletedPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
