
import './Songs.css'


function Music({img,songName,mp3}){
  return(
   <div className="song-container">
   <img src={img}/>
    <div id="Name">
     <h3 className='para'>Composer - George Frideric Handel</h3>
     <h4 className='para2'>Name - {songName}</h4>
     <audio className='audio' src={mp3} loop controls></audio>
    </div>
</div>
  )
}

function Handel() {
  return (
   
    <div className="head">

      <div className="composer-info">

          <div className="composer-image">
              <img classname="composer-img" src="../images/Handel.jpg"/>
          </div>

          <div className="composer-name">
               <marquee direction="left" width="500px" height="100px">
                  George Fridric Handel
               </marquee>
          </div>
          
      </div>
     
    <div className="row-1">

    <Music 
       img="../images/Passacaglia1.jpg" 
       songName="Passacaglia - Piano"
       mp3="../mp3/Passacaglia1.mp3"
    />

    <Music 
       img="../images/Passacaglia2.jpg" 
       songName="Passacaglia - Cello"
       mp3="../mp3/Passacaglia2.mp3"
    />

    <Music 
       img="../images/Sarende.webp" 
       songName="Sarabande"
       mp3="../mp3/Sarabande.mp3"
    />

    </div>

   <div className="row-2">

    <Music 
       img="../images/Da.jpg" 
       songName="Da tempeste"
       mp3="../mp3/Da.mp3"
    />

    <Music 
       img="../images/Lascia.jpg" 
       songName=" Lascia ch'io pianga"
       mp3="../mp3/Lascia.mp3"
    />

    <Music 
       img="../images/Water.jpg" 
       songName=" Water Music Suite, HWV 348-350 / Water Music Suite in F Major, BWV 348 - 3"
       mp3="../mp3/Water.mp3"
    />
    </div>

    <div className="row-3">

   <Music 
      img="../images/Arrival.jpg" 
      songName="The Arrival of the Queen of Sheba"
      mp3="../mp3/Arrival.mp3"
   />

   <Music 
      img="../images/Messiah.jpg" 
      songName=" Messiah - Hallelujah Chorus"
      mp3="../mp3/Messiah.mp3"
   />

   <Music 
      img="../images/Zadok.jpg" 
      songName="Zadok the Priest"
      mp3="../mp3/Zadok.mp3"
   />
</div>

<div className="more">
      <h2>For more Songs <a href="https://open.spotify.com/playlist/37i9dQZF1DX9ZP5oobcNgA?si=3844338bf929452e" target="_blank">Click here</a></h2>
   </div>


</div>
  )
}

export default Handel