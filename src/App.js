import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom';
import './App.scss';
import CourseDetails from './components/course-details/course-details';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import { Home } from './components/home/home';
import CourseList from './components/course-list/course-list';
import Services from './components/services/services';
import Products from './components/products/products';
import Contact from './components/contact/contact';
import About from './components/about/about';

function App() {
  return (
    <>      
      <Router>
        <Header />        
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About mainPage='false' />}></Route>
          <Route exact path="/courses" element={<CourseList display="6" hideViewMore="true"/>}></Route>
          <Route exact path="/courses/description/:id" element={<CourseDetails />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/products" element={<Products />}></Route>
          <Route exact path="/contactus" element={<Contact />}></Route>
        </Routes>
      </Router>
      <Footer />   
    </>
  );
}

export default App;
