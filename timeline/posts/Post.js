import React from 'react'
import './Post.css'

function Post() {
  return (
    <div className='post'>
      <div className="post_header">
        <div className="post_headerauthor">
        <img className='avatar_img1' src="https://afrokonnect.ng/wp-content/uploads/2023/04/images.jpeg" alt="" />
Abhishek__ • <span>21h</span>
        </div>
    <span class="material-symbols-outlined">
more_horiz
</span>
      </div>
      <div className="post_image">
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/0c/bb/a3/97/predator-ride-in-the.jpg" alt="" />
      </div>
      <div className="post_footer">
        <div className="post_footericons">
            <div className="post_iconsmain">
            <span className='posticon' class="material-symbols-outlined">
favorite
</span> 
<span className='posticon' class="material-symbols-outlined">
chat_bubble
</span>
<span className='posticon'  class="material-symbols-outlined">
share
</span>
            </div>
            <div className="post_iconsave">
            <span class="material-symbols-outlined">
bookmark
</span>
                </div>
        </div>

    <div>
    Liked by 21 People
    </div>
      </div>
    </div>
  )
}

export default Post
