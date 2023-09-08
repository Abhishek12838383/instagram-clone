import React from 'react'
import './Sidenav.css'


function Sidenav() {
  return (
    <div className='sidenav'>
     <img className='sidenav_logo' src='https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png' alt='' />

<div className="sidenav_buttons">
  
    {/* icons */}
 <button className='sidenav_button'>
 <span class="material-symbols-outlined">
home
</span> <span>Home</span>
 </button>

<button className='sidenav_button'>
<span class="material-symbols-outlined">
search
</span> <span>Search</span>
</button>

<button className='sidenav_button'>
<span class="material-symbols-outlined">
explore
</span> <span>Explore</span>
</button>

<button className='sidenav_button'>
<span class="material-symbols-outlined">
slideshow
</span> <span>Reels</span>
</button>

<button className='sidenav_button'>
<span class="material-symbols-outlined">
chat
</span> <span>Messages</span>
</button>

<button className='sidenav_button'>
<span class="material-symbols-outlined">
notifications
</span> <span>Notifications</span>
</button>


<button className='sidenav_button'>
<span class="material-symbols-outlined">
add_circle
</span> <span>Create</span>
</button>

 <div className="sidenav_more">
  <button className="sidenav_button">
  <span class="material-symbols-outlined">
menu
</span> <span>More</span>
  </button>
 </div>
</div>
    </div>
  )
}

export default Sidenav;
