
import './Songs.css'


function Music({img,songName,mp3}){
  return(
      <div className="song-container">
          <img src={img}/>
          <div id="Name">
          <h3 className='para'>Composer - Ludwig van Beethoven</h3>
          <h4 className='para2'>Name - {songName}</h4>
          <audio className='audio' src={mp3} loop controls></audio>
          </div>
      </div>
  )
}

function Beethoven() {
  return (

    <div className="head">

      <div className="composer-info">

          <div className="composer-image">
              <img classname="composer-img" src="../images/Beethoven.jpg"/>
          </div>

          <div className="composer-name">
               <marquee direction="left" width="500px" height="100px">
                  Ludwig Van Beethoven
               </marquee>
          </div>
          
      </div>
     
    <div className="row-1">

    <Music 
       img="../images/MS1.jpg" 
       songName="Moonlight Sonata 1st Movement"
       mp3="../mp3/MS1.mp3"
    />

    <Music 
       img="../images/MS3.jpg" 
       songName="Moonlight Sonata 3rd Movement"
       mp3="../mp3/MS3.mp3"
    />

    <Music 
       img="../images/tempest.jpg" 
       songName="Sonata No.17 Tempest 3rd Movement"
       mp3="../mp3/tempest.mp3"
    />

    </div>

   <div className="row-2">

    <Music 
       img="../images/Symphony5.png" 
       songName="Symphony No. 5"
       mp3="../mp3/symphony5.mp3"
    />

    <Music 
       img="../images/Furelise.jpg" 
       songName="Für Elise"
       mp3="../mp3/Furelise.mp3"
    />

    <Music 
       img="../images/penny.jpg" 
       songName="Rage Over a Loast Penny"
       mp3="../mp3/Rage.mp3"
    />
    </div>

    <div className="row-3">

   <Music 
      img="../images/Waldstein.jpg" 
      songName="Sonata No.21 Waldstein 1st Movement"
      mp3="../mp3/Waldstein.mp3"
   />

   <Music 
      img="../images/Allegro.jpg" 
      songName="Symphony No.7 in A major op.92,Allegro con brio"
      mp3="../mp3/Allegro.mp3"
   />

   <Music 
      img="../images/apionsonata.webp" 
      songName="Sonata No.23 in F minor, op.57,Appionsonata"
      mp3="../mp3/apionsonata.mp3"
   />
   </div>2


   <div className="more">
      <h2>For more Songs <a href="https://open.spotify.com/playlist/37i9dQZF1DX12YIlzNkccL?si=0586cdce79b2466c" target="_blank">Click here</a></h2>
   </div>

</div>

  )
}

export default Beethoven
