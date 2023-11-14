import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/Signin';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
import PriveteRoute from './components/PriveteRoute';
import CreateListing from './pages/create-listing';
import UpdateListing from './pages/updateListing';
import Listing from './pages/Listing';


export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/listing/:listingId' element={<Listing/>} />
    <Route element={<PriveteRoute/>}>
          <Route path='/profile' element={<Profile />} />
    <Route path='/create-listing' element={<CreateListing/>} />
    <Route path='/update-listing/:listingId' element={<UpdateListing/>} />
     </Route>  
      </Routes>

    </BrowserRouter>
  )
}
