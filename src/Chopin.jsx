
import './Songs.css'


function Music({img,songName,mp3}){
  return(
   <div className="song-container">
       <img src={img}/>
        <div id="Name">
         <h3 className='para'>Composer - Frederic Chopin</h3>
         <h4 className='para2'>Name - {songName}</h4>
         <audio className='audio' src={mp3} loop controls></audio>
        </div>
   </div>
  )
}

function Chopin() {
  return (
    <div className="head">

    <div className="composer-info">

        <div className="composer-image">
            <img classname="composer-img" src="../images/Chopin.jpg"/>
        </div>

        <div className="composer-name">
             <marquee direction="left" width="500px" height="100px">
                Frederic Chopin
             </marquee>
        </div>
        
    </div>
   
  <div className="row-1">

  <Music 
     img="../images/Etude10.jpg" 
     songName="Etude Op.10 No.4,Torrent"
     mp3="../mp3/Etude10.mp3"
  />

  <Music 
     img="../images/Nocturne1.webp" 
     songName="Nocture in C Sharp Minor"
     mp3="../mp3/Nocturne1.mp3"
  />

  <Music 
     img="../images/Nocturne2.webp" 
     songName="Nocturne Op.9 No.1"
     mp3="../mp3/Nocturne2.mp3"
  />

  </div>

 <div className="row-2">

  <Music 
     img="../images/Nocturne3.webp" 
     songName="Nocturne Op.9 No.2(E Flat Major)"
     mp3="../mp3/Nocturne3.mp3"
  />

  <Music 
     img="../images/prelude.jpg" 
     songName="Prelude in E minor Op.28 No.4"
     mp3="../mp3/prelude.mp3"
  />

  <Music 
     img="../images/winterwind.jpg" 
     songName="Etude Op.25 No.11,Winter Wind"
     mp3="../mp3/winterwind.mp3"
  />
  </div>

  <div className="row-3">

  <Music 
     img="../images/fantaisie.jpg" 
     songName="Fantaisie-Impromptu,Op.66"
     mp3="../mp3/fantaisie.mp3"
  />

  <Music 
     img="../images/waltz1.webp" 
     songName=" Waltz in D-flat major, Op.64, No.1 Valse du petit chien"
     mp3="../mp3/waltz1.mp3"
  />

  <Music 
     img="../images/ballade1.jpg" 
     songName="Ballade No.1 in G minor Op.23"
     mp3="../mp3/ballade1.mp3"
  />
  </div>

  <div className="more">
      <h2>For more Songs <a href="https://open.spotify.com/playlist/37i9dQZF1DWV7cvDzE3MOI?si=3fffeb2283804aa4" target="_blank">Click here</a></h2>
   </div>

</div>
  )
}

export default Chopin