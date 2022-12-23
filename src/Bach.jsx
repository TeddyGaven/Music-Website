
import './Songs.css'


function Music({img,songName,mp3}){
  return(
   <div className="song-container">
   <img src={img}/>
   <div id="Name">
   <h3 className='para'>Composer - Johann Sebastian Bach</h3>
   <h4 className='para2'>Name - {songName}</h4>
   <audio className='audio' src={mp3} loop controls></audio>
   </div>
</div>
  )
}

function Bach() {
  return (
   
    <div className="head">

      <div className="composer-info">

          <div className="composer-image">
              <img classname="composer-img" src="../images/Bach.jpg"/>
          </div>

          <div className="composer-name">
               <marquee direction="left" width="500px" height="100px">
                 Johann Sebastian Bach
               </marquee>
          </div>
          
      </div>
     
    <div className="row-1">

    <Music 
       img="../images/AveMaria.jpg" 
       songName="Ave Maria"
       mp3="../mp3/AveMaria.mp3"
    />

    <Music 
       img="../images/GMinor.jpg" 
       songName="G Minor Bach (Arr. Luo Ni)"
       mp3="../mp3/GMinor.mp3"
    />

    <Music 
       img="../images/ToccataFugue.jpg" 
       songName="Toccata and Fugue in D Minor" 
       mp3="../mp3/ToccataFugue.mp3"
    />

    </div>

   <div className="row-2">  

    <Music 
       img="../images/Suite1.jpg" 
       songName="J. S. Bach: Orchestral Suite No. 1 i C major, BWV 1066, 1. Ouverture"
       mp3="../mp3/Suite1.mp3" 
    />

    <Music 
       img="../images/Suite3.jpg" 
       songName="Bach: Air on the G String (Orchestral Suite No. 3)"
       mp3="../mp3/Suite3.mp3"
    />

    <Music 
       img="../images/Koopman.jpg" 
       songName="Air / Koopman"
       mp3="../mp3/Koopman.mp3"
    />
    </div>

    <div className="more">
      <h2>For more Songs <a href="https://open.spotify.com/playlist/37i9dQZF1DWZnzwzLBft6A?si=5690b1fea951435c">Click here</a></h2>
   </div>

</div>
  )
}

export default Bach