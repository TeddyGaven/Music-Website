
import './Songs.css'


function Music({img,composer,songName,mp3}){
  return(
   <div className="song-container">
   <img src={img}/>
   <div id="Name">
   <h3 className='para'>Anime - {composer}</h3>
   <h4 className='para2'>Name - {songName}</h4>
   <audio className='audio' src={mp3} loop controls></audio>
   </div>
</div>
  )
}

function Anime() {
  return (
    
    <div className="head">

      <div className="composer-info">

          <div className="composer-image">
              <img classname="composer-img" src="../images/Anime.webp"/>
          </div>

          <div className="composer-name">
               <marquee direction="left" width="500px" height="100px">
                  Anime Songs
               </marquee>
          </div>
          
      </div>
     
    <div className="row-1">

    <Music 
       img="../images/Op1.webp" 
       composer="One Piece OST(Carameii)"
       songName="Drums Of Liberation"
       mp3="../mp3/Op1.mp3"
    />

    <Music 
       img="../images/Aot.jpg" 
       composer="Attack on Titan"
       songName="Attack On Titan Opening Guren no Yumiya"
       mp3="../mp3/Aot.mp3"
    />

    <Music 
       img="../images/Vogel.jpg" 
       composer="Attack on Titan - Hiroyuki Sawano"
       songName="Vogel im käfig"
       mp3="../mp3/Vogel.mp3"
    />

    </div>

   <div className="row-2">

    <Music 
       img="../images/seno.jpg" 
       composer="Renai Circulation"
       songName="Kana Hanazawa - Renai Circulation"
       mp3="../mp3/seno.mp3"
    />

    <Music 
       img="../images/katachi.webp" 
       composer="Gotoubun no Hanayome"
       songName="Gotoubun no Katachi"
       mp3="../mp3/katachi.mp3"
    />

    <Music 
       img="../images/bunny.jpg" 
       composer="Bunny Girl Senpai"
       songName="Fukashigi no Carte"
       mp3="../mp3/Bunny.mp3"
    />
    </div>

    <div className="row-3">

   <Music 
      img="../images/OPM.jpg" 
      composer= "One Punch Man"
      songName="One Punch Man OST"
      mp3="../mp3/OPM.mp3"
   />

   <Music 
      img="../images/ds.jpg" 
      composer="Demon Slayer - Lisa"
      songName="Gurenge"
      mp3="../mp3/gurenge.mp3"
   />

   <Music 
      img="../images/blue.jpg" 
      composer="Naruto Shippuden"
      songName="Naruto Shippuden Opening 3 - Blue Bird"
      mp3="../mp3/blue.mp3"
   />
</div>

<div className="more">
      <h2>For more Songs <a href="https://open.spotify.com/playlist/6E2vxHwnPy00fvFU9yAQP8?si=410741bd68aa499a" target="_blank">Click here</a></h2>
   </div>


</div>
  )
}

export default Anime