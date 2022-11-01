import './App.css';
import Navbar from './Components/NavigationBar/Navbar';
import Banner from './Components/Banner/Banner';
import Products from './Components/Products/Products';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
