import './App.css'
import GrandParent from './Grandparent'
import './Grandparent.css'
import {
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Beethoven from './Beethoven'
import Mozart from './Mozart'
import Chopin from './Chopin'
import Bach from './Bach'
import Handel from './Handel'
import Keys from './92keys'
import Evgeny from './Evgeny'
import Anime from './Anime'
import Paganini from './Paganini'
import Liszt from './Liszt' 



function App() {

  return (
  <div className='alpha'>

          {/* <button className='icon-link' id='Ilink' onclick="navBar()">
          <div className='icon'>
              <div className="line-icon"></div>
              <div className="line-icon"></div>
              <div className="line-icon"></div>
            </div>
          </button> */}
          

   <div className='main'>
    
        <div className='parent' id='Dad'>

            <h1 className='logo'>Musicia</h1>
          <p className='note'>Note:<span className="imp">SCROLL DOWN</span> <br />after clicking the links <br /> on Mobile Devices</p>

            <Link to="/" className='children'>Home</Link>
            <Link to="/Beethoven" className='children'>Beethoven</Link>
            <Link to="/Mozart" className='children'>Mozart</Link>
            <Link to="/Chopin" className='children'>Chopin</Link>
            <Link to="/Bach" className='children'>Bach</Link>
            <Link to="/Handel" className='children'>Handel</Link>
            <Link to="/Liszt" className='children'>Liszt</Link>
            <Link to="/Paganini" className='children'>Paganini</Link>
            <Link to="/Evgeny" className='children'>Evgeny</Link>
            <Link to="/92keys" className='children'>Personal Favourites</Link>
            <Link to="/Anime" className='children'>Anime</Link>
       <footer>
        <p className='foot'>Designed by <br/> Gaven Dcosta</p>
        <p className='foot'>My first React Project</p>
       </footer>
         
        </div>
  
         <div className='sub-main'>
         <Routes>
              <Route path='/' element={<GrandParent/>}/>
              <Route path='/Beethoven' element={<Beethoven/>}/>
              <Route path='/Mozart' element={<Mozart/>}/>
              <Route path='/Chopin' element={<Chopin/>}/>
              <Route path='/Bach' element={<Bach/>}/>
              <Route path='/Handel' element={<Handel/>}/>
              <Route path='/Paganini' element={<Paganini/>}/>
              <Route path='/Liszt' element={<Liszt/>}/>
              <Route path='/92keys' element={<Keys/>}/>
              <Route path='/Anime' element={<Anime/>}/>
              <Route path='/Evgeny' element={<Evgeny/>}/>
          </Routes>



         </div>  

    
   </div>

       

   </div>
   
     
  )
}

export default App
