import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import LoadServices from './components/Services/LoadServices';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login/Login';
import SignUp from './components/Login/SignUp/SignUp';
import RequireAuth from './components/RequireAuth/RequireAuth';
import ServiceInfo from './components/ServiceInfo/ServiceInfo';
import useServices from './hooks/useServices';

function App() {
  const [services] = useServices();
  services.map(service => console.log(service));
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/services" element={<LoadServices></LoadServices>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/service/:id" element={
          <RequireAuth>
            <ServiceInfo data={services}></ServiceInfo>
          </RequireAuth>
        } />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
