// import Header from './components/dashboard/Header'
// import Sidebar from './components/dashboard/Sidebar'
// import Homescreen from './components/homescreen/Homescreen'
import fetchData from '../api';
console.log(await fetchData("/plans"));

function App() {

  return (
    <>
      {/* <Header/>
      <Sidebar/>
      <Homescreen/> */}

    </>
  );
}

export default App;
