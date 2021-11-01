

import NotFound from './Pages/NotFound/NotFound'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './Context/AuthProvider';
import Booking from './Pages/Booking/Booking';
import PrivateRouter from './Pages/Login/PrivateRouter/PrivateRouter';
import Register from './Pages/Login/Register/Register';
import AddEvents from './Pages/Home/AddEvents/AddEvents';
import EventsAdded from './Pages/Home/EventsAdded/EventsAdded';

;
function App() {
  return (
    <div className='text-center'>
      <AuthProvider>
     <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/home'>
            <Home></Home>
          </Route>

          <Route path='/register'>
            <Register></Register>
            </Route>

            <PrivateRouter path="/addEvents">
            <AddEvents></AddEvents>
            </PrivateRouter>
            
            <PrivateRouter path="/eventsAdded">
            <EventsAdded></EventsAdded>
          </PrivateRouter>
          <Route path='/login'>
            <Login></Login>
          </Route>

          <PrivateRouter path='/booking/:serviceId'>
          <Booking></Booking>
            </PrivateRouter>


          <Route path='*'>
            <NotFound></NotFound>
          </Route>

          </Switch>
          
          <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
