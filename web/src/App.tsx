import './global.style.scss';
import Navbar from './components/Navbar';
import Routes from './routes';
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes />
      </main>
    </>
  );
}

export default App;
