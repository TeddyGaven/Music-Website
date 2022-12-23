
import './Songs.css'


function Music({img,composer,songName,mp3}){
  return(
   <div className="song-container">
   <img src={img}/>
   <div id="Name">
   <h3 className='para'>Composer - {composer}</h3>
   <h4 className='para2'>Name - {songName}</h4>
   <audio className='audio' src={mp3} loop controls></audio>
   </div>
</div>
  )
}

function Keys() {
  return (
    
    <div className="head">

      <div className="composer-info">

          <div className="composer-image">
              <img classname="composer-img" src="../images/92Keys.jpeg"/>
          </div>

          <div className="composer-name">
               <marquee direction="left" width="500px" height="100px">
                  Personal Favourites
               </marquee>
          </div>
          
      </div>
     
    <div className="row-1">

    <Music 
       img="../images/92Keys.jpeg" 
       composer="92 Keys"
       songName="Uprising on Bach's Toccata"
       mp3="../mp3/bachtoccata.mp3"
    />

    <Music 
       img="../images/Hauser.jpg" 
       composer="Hauser"
       songName="Livin' La Vida Loca"
       mp3="../mp3/Hauser1.mp3"
    />

    <Music 
       img="../images/yu.jpg" 
       composer="Lionel Yu"
       songName="Beethoven Virus"
       mp3="../mp3/Virus.mp3"
    />

    </div>

   <div className="row-2">

    <Music 
       img="../images/GrandLine.jpg" 
       composer="One Piece"
       songName="To The Grand Line"
       mp3="../mp3/GrandLine.mp3"
    />

    <Music 
       img="../images/Vivaldi1.jpg" 
       composer="Antonio Vivaldi"
       songName="Storm"
       mp3="../mp3/Vivaldi.mp3"
    />

    <Music 
       img="../images/Winter.jpg" 
       composer="Antonio Vivaldi"
       songName="Winter - The Four Seasons"
       mp3="../mp3/Winter.mp3"
    />
    </div>

    <div className="row-3">

   <Music 
      img="../images/legends.jpg" 
      composer="Against The Current"
      songName="Legends Never Die"
      mp3="../mp3/legends.mp3"
   />   

   <Music 
      img="../images/warriors.jpg" 
      composer="Imagine Dragons"
      songName="Warriors"
      mp3="../mp3/warriors.mp3"
   />

   <Music 
      img="../images/Formula1.jpg" 
      composer="Brian Tyler"
      songName="Formula 1 Theme"
      mp3="../mp3/Formula1.mp3"
   />
</div>

</div>
  )
}
export default Keys