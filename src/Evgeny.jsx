
import './Songs.css'


function Music({img,songName,mp3}){
  return(
   <div className="song-container">
   <img src={img}/>
    <div id="Name">
     <h3 className='para'>Composer - Evgeny Khmara</h3>
     <h4 className='para2'>Name - {songName}</h4>
     <audio className='audio' src={mp3} loop controls></audio>
    </div>
</div>
  )
}

function Evgeny() {
  return (
   
    <div className="head">

      <div className="composer-info">

          <div className="composer-image">
              <img classname="composer-img" src="../images/Evgeny.jpg"/>
          </div>

          <div className="composer-name">
               <marquee direction="left" width="500px" height="100px">
                  Evgeny Khmara
               </marquee>
          </div>
          
      </div>
     
    <div className="row-1">

    <Music 
       img="../images/Element.jpg" 
       songName="Element"
       mp3="../mp3/Element.mp3"
    />

    <Music 
       img="../images/tenderness.jpg" 
       songName="TENDERNESS"
       mp3="../mp3/tenderness.mp3"
    />

    <Music 
       img="../images/wheel.jpg" 
       songName="The Wheel of Life"
       mp3="../mp3/wheel.mp3"
    />

    </div>

   <div className="row-2">

    <Music 
       img="../images/myself.jpg" 
       songName="To Find Myself"
       mp3="../mp3/myself.mp3"
    />

    <Music 
       img="../images/InOut.jpg" 
       songName="In and out of love"
       mp3="../mp3/InOut.mp3"
    />

    <Music 
       img="../images/Dreams.jpg" 
       songName="DREAMS"
       mp3="../mp3/Dreams.mp3"
    />
    </div>

    <div className="row-3">

   <Music 
      img="../images/TimeZ.webp" 
      songName="TIME Z"
      mp3="../mp3/TimeZ.mp3"
   />

   <Music 
      img="../images/MagicClock.webp" 
      songName="Magic Clock"
      mp3="../mp3/MagicClock.mp3"
   />

   <Music 
      img="../images/FairyTale.jpg" 
      songName="Fairy Tale"
      mp3="../mp3/FairyTale.mp3"
   />
</div>

<div className="more">
      <h2>For more Songs <a href="https://www.youtube.com/@EvgenyKhmaraOfficial" target="_blank">Click here</a></h2>
   </div>


</div>
  )
}

export default Evgeny