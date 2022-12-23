
import './Songs.css'


function Music({img,songName,mp3}){
  return(
   <div className="song-container">
   <img src={img}/>
    <div id="Name">
     <h3 className='para'>Composer - Franz Liszt</h3>
     <h4 className='para2'>Name - {songName}</h4>
     <audio className='audio' src={mp3} loop controls></audio>
    </div>
</div>
  )
}

function Liszt() {
  return (
   
    <div className="head">

      <div className="composer-info">

          <div className="composer-image">
              <img classname="composer-img" src="../images/Liszt.jpg"/>
          </div>

          <div className="composer-name">
               <marquee direction="left" width="500px" height="100px">
                  Franz Liszt
               </marquee>
          </div>
          
      </div>
     
    <div className="row-1">

    <Music 
       img="../images/Liszt2.jpg" 
       songName="Hungarian Rhapsody No.2"
       mp3="../mp3/Hungarian2.mp3"
    />

    <Music 
       img="../images/Liszt1.jpg" 
       songName="Liebestraum No.3 Love Dream"
       mp3="../mp3/LoveDream.mp3"
    />

    <Music 
       img="../images/Ave.jpg" 
       songName="Ave Maria"
       mp3="../mp3/Ave.mp3"
    />

    </div>

   <div className="row-2">

    <Music 
       img="../images/Liszt3.jpg" 
       songName="Paganini_Liszt - Etude No.6"
       mp3="../mp3/Liszt3.mp3"
    />

    <Music 
       img="../images/La1.jpg" 
       songName="Paganini_Liszt - La Campanella"
       mp3="../mp3/La1.mp3"
    />
      
    <Music 
       img="../images/Liszt4.jpg" 
       songName="Etude - Un Sospiro"
       mp3="../mp3/Liszt4.mp3"
    />
    </div>


<div className="more">
      <h2>For more Songs <a href="https://open.spotify.com/playlist/37i9dQZF1DX93wmY669mVj?si=eba8b772c7884964" target="_blank">Click here</a></h2>
   </div>


</div>
  )
}

export default Liszt