
import './App.css';
import Header from './Components/Header/app'
import Footer from './Components/Footer/app'
import MainCard from './Components/MainCard/app';
import ASide from './Components/ASide/app';


function App() {
  return <>
   <Header/>
   <div class="container container-flex"> 
    <MainCard />
   <ASide/> 
   </div>
 
   <Footer/>
  </>
}

export default App;