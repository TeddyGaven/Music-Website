
import './Songs.css'


function Music({img,songName,mp3}){
  return(
   <div className="song-container">
   <img src={img}/>
    <div id="Name">
     <h3 className='para'>Composer - Wolfgang Amaedeus Mozart</h3>
     <h4 className='para2'>Name - {songName}</h4>
     <audio className='audio' src={mp3} loop controls></audio>
    </div>
</div>
  )
}

function Mozart() {
  return (
    
    <div className="head">

      <div className="composer-info">

          <div className="composer-image">
              <img classname="composer-img" src="../images/Mozart.webp"/>
          </div>

          <div className="composer-name">
               <marquee direction="left" width="500px" height="100px">
                 Wolfgang Amaedeus Mozart
               </marquee>
          </div>
          
      </div>
     
    <div className="row-1">

    <Music 
       img="../images/Amaedeus.jpg" 
       songName="W.A. Mozart - Symphony No. 25 In G Minor, K. 183,Amaedeus"
       mp3="../mp3/Amaedeus.mp3"
    />

    <Music 
       img="../images/Eine.jpg" 
       songName="Eine Nachtmusik in G Major,K. 525,Allegro"
       mp3="../mp3/Eine.mp3"
    />

    <Music 
       img="../images/Lacrimosa.webp" 
       songName="Lacrimosa"
       mp3="../mp3/Lacrimosa.mp3"
    />

    </div>

   <div className="row-2">

    <Music 
       img="../images/Symphony40.jpg" 
       songName="Mozart Symphony #40 in G Minor, K 550 - 1. Molto Allegro"
       mp3="../mp3/Symphony40.mp3"
    />

    <Music 
       img="../images/TurkishMarch.jpg" 
       songName="Turkish March"
       mp3="../mp3/TurkishMarch.mp3"
    />

    <Music 
       img="../images/Sonata16.jpg" 
       songName="Piano Sonata No.16 in C Major, K.545(1st Mvt)"
       mp3="../mp3/Sonata16.mp3"
    />
    </div>

    <div className="row-3">

   <Music 
      img="../images/MagicFlute.jpg" 
      songName="The Magic Flute, Queen of the Night aria (Mozart; Diana Damrau, The Royal Opera)"
      mp3="../mp3/MagicFlute.mp3"
   />

</div>

<div className="more">
      <h2>For more Songs <a href="https://open.spotify.com/playlist/37i9dQZF1DX8qqIDAkKiQg?si=5265479cc3224eb4" target="_blank">Click here</a></h2>
   </div>


</div>
  )
}

export default Mozart