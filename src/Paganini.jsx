
import './Songs.css'


function Music({img,songName,mp3}){
  return(
   <div className="song-container">
   <img src={img}/>
    <div id="Name">
     <h3 className='para'>Composer - Niccolo Paganini</h3>
     <h4 className='para2'>Name - {songName}</h4>
     <audio className='audio' src={mp3} loop controls></audio>
    </div>
</div>
  )
}

function Paganini() {
  return (
    
    <div className="head">

      <div className="composer-info">

          <div className="composer-image">
              <img classname="composer-img" src="../images/Paganini.jpg"/>
          </div>

          <div className="composer-name">
               <marquee direction="left" width="500px" height="100px">
               Niccolo Paganini
               </marquee>
          </div>
          
      </div>
     
    <div className="row-1">

    <Music 
       img="../images/La2.jpg" 
       songName="La Campanella"
       mp3="../mp3/La2.mp3"
    />

    <Music 
       img="../images/Cap1.jpg" 
       songName="Caprice No.24"
       mp3="../mp3/Cap1.mp3"
    />

    <Music 
       img="../images/Diablo.jpg" 
       songName="Sonata del diablo"
       mp3="../mp3/Diablo.mp3"
    />

    </div>

   <div className="row-2">

    <Music 
       img="../images/Cantabile.jpg" 
       songName="Cantabile"
       mp3="../mp3/Cantabile.mp3"
    />

    <Music 
       img="../images/Cap2.jpg" 
       songName="Caprice No. 5"
       mp3="../mp3/Cap2.mp3"
    />

    <Music 
       img="../images/pag1.jpg" 
       songName="Violin Sonata No 6"
       mp3="../mp3/pag1.mp3"
    />
    </div>


<div className="more">
      <h2>For more Songs <a href="https://open.spotify.com/playlist/37i9dQZF1DX4Z7StSYhtd4?si=32840bf21f364b2d" target="_blank">Click here</a></h2>
   </div>


</div>
  )
}

export default Paganini