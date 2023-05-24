import Router from './Router/Router';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';

function App() {
  return (
    <>
      <div className='flex'>
        <Sidebar />
        <div>
          <TopBar />
          <Router />
        </div>
      </div>
    </>
  );
}

export default App;
