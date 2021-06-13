import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import Listing from './screens/Listing';
import NewsDetails from './screens/NewsDetails';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path='/listing-details/:id' component={NewsDetails} />
        <Route path='/listing' component={Listing} />
        <Route path='/' component={HomeScreen} exact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
