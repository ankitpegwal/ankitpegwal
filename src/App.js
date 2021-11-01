
import './App.css';
import Header from './components/Header/Header';
import LabelBottomNavigation from './components/MainNav';
import Trending from './components/Trending/Trending';
import Movies from './components/Movies/Movies';
import Search from './components/Search/Search';
import TvShow from './components/TvShow/TvShow';
import { Route,Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';

function App() {

  return (
    <>
    <Header/>

    <div className="App">
<Container>
      
<Switch>
      <Route exact path="/" component={Trending}/>
      <Route  path="/movies" component={Movies}/>
      <Route  path="/search" component={Search}/>
      <Route  path="/tv" component={TvShow}/>
    
    </Switch>
    </Container>
    </div>
    <LabelBottomNavigation/>
    </>
  );
}

export default App;
