import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Cards />} /> 
        <Route path='/cart/:id' element={<CardsDetails />} />
        <Route exact path="/about" element={<About />} > </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
