import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Hearder from "./components/Header";
import SalesCard from "./components/SalesCard";


function App() {
  return (
    <>
      <ToastContainer />
      <Hearder />
      <main>
        <section id="sales">
          <div className="dsmeta-container"></div>
          <SalesCard/>
        </section>
      </main>
    </>
  );
}

export default App;
