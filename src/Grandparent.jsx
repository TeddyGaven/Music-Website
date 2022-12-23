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


function Body({mainlink,src,composer,bio}){
    return(

        <div className='minbody'>   
        <div className="grid">
        <Link to={mainlink}> 
            <div className="container">
                <img src={src} className='img'/>
                <div className='info'>
                    <h3 className='composer'>{composer}</h3>
                    <a href={bio} className='bio'>Biography</a>
                    <p className='artist'>Artist</p>
                </div>
            </div>
        </Link>
        </div>
        </div>
        
    )
}

function GrandParent(){
    return(
        <div className='Body'>

            <section className='row-1'>

            <div className="grid-item">
                    <Body
                     mainlink="/Beethoven"
                     src="../images/Beethoven.jpg"
                     composer="Ludwig Van Beethoven"
                     bio="https://www.biographyonline.net/music/beethoven.html#:~:text=Beethoven%20Biography%20Ludwig%20van%20Beethoven%20%281770%20%E2%80%93%201827%29,one%20of%20the%20greatest%20composers%20of%20all%20time."
                    />
                </div>   

                <div className="grid-item">
                    <Body
                     mainlink="/Chopin"
                     src="../images/Chopin.jpg"
                     composer="Frederic Chopin"
                     bio="https://www.biographyonline.net/music/chopin.html#:~:text=Chopin%20was%20a%20Polish%20composer%20who%20wrote%20numerous,Poland%2C%20after%20the%20failed%20November%20uprising%20of%201830."
                     />
               </div>
               
               <div className="grid-item">
                    <Body
                     mainlink="/Mozart"
                     src="../images/Mozart.webp"
                     composer="Wolfgang Amaedeus Mozart"
                     bio="https://www.biographyonline.net/music/mozart.html#:~:text=Mozart%20Biography%20Wolfgang%20Amadeus%20Mozart%20%2827%20January%201756,pieces%20of%20symphonic%2C%20chamber%2C%20operatic%2C%20and%20choral%20music."
                    />
                </div>     

            </section>
            
             
            <section className="row-2">

            <div className="grid-item">
                    <Body
                     mainlink="/Bach"
                     src="../images/Bach.jpg"
                     composer="Johann Sebastian Bach"
                     bio="https://www.britannica.com/biography/Johann-Sebastian-Bach"
                    />
                </div>

                <div className="grid-item">
                    <Body
                     mainlink="/Liszt"
                     src="../images/Liszt.jpg"
                     composer="Franz Liszt"
                     bio="https://en.wikipedia.org/wiki/Franz_Liszt"
                    />
                </div>

                <div className="grid-item">
                    <Body
                     mainlink="/Handel"
                     src="../images/Handel.jpg"
                     composer="George Frideric Handel"
                     bio="https://en.wikipedia.org/wiki/George_Frideric_Handel"
                     />
                </div>

            </section> 
                    

            <section className="row-3">

            <div className="grid-item">
                    <Body
                     mainlink="/Evgeny"
                     src="../images/Evgeny.jpg"
                     composer="Evgeny Khmara"
                     bio="https://en.wikipedia.org/wiki/Evgeny_Khmara"
                     />
                </div>

                <div className="grid-item">
                    <Body
                     mainlink="/Paganini"
                     src="../images/Paganini.jpg"
                     composer="Niccolo Paganini"
                     bio="https://en.wikipedia.org/wiki/Niccol%C3%B2_Paganini"
                     />
               </div>
               
               <div className="grid-item">
                    <Body
                     mainlink="/92keys"
                     src="../images/92Keys.jpeg"
                     composer="Personal Favourites"
                     bio="https://open.spotify.com/playlist/21SNzfIlf5RczWQEt89o4O?si=a437b4029fae46b9"
                    />
                </div>     

            </section>

                
            <section className="row-4">
                
            <div className="grid-item">
                    <Body
                     mainlink="/Anime"
                     src="../images/Anime.webp"
                     composer="Anime Songs"
                     bio="https://thenerddaily.com/reasons-to-watch-anime/"
                    />
                </div> 

            </section>      

            <Routes>
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
    )
}

export default GrandParent