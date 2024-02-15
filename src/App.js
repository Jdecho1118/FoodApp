// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Searchbar from './components/Searchbar';
import Filter from './components/Filter';
import Cardcontainer from './components/Cardcontainer';
import Restaurantcard from './components/Restaurantcard';
import Carousel from './components/Carousel';
import CarouselItem from './components/CarouselItem';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header/>
      <Body/>
      <Searchbar/>
      <Filter/>
      <Cardcontainer/>
      <Carousel/>
      <CarouselItem/>
      <Restaurantcard/>
      <Footer/>
    </div>
  );
}

export default App;

