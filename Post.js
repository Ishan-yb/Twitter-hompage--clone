import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Post.css"
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { ChatBubble, Repeat } from '@material-ui/icons';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublicIcon from '@material-ui/icons/Public';
function Post({displayName,username,verified,text,image,avatar }) {
    return (
        <div className="post">
          <div className="post_avatar">
              <Avatar src={avatar}/>
              </div>  
            <div className="post_body">
            <div className="post_header">
                <div className="post_headertext">
                    <h3>
                        {displayName}{" "}
                        <span className="post_headerspecial">
                        {verified &&  <VerifiedUserIcon className="post_badge"/>} @{username} 
                        </span>
                    </h3>

            </div>
            <div className="post_headerdescription">
                <p>
                   {text}
                </p>
            </div>
            </div>
            <img src={image} alt=""/>
            <div className="post_footer">
                <ChatBubbleOutlineIcon fontSize="small"/>
                <RepeatIcon fontsize="small"/>
                <FavoriteBorderIcon fontSize="small"/>
                <PublicIcon fontsize="small"/>
    

            </div>
        </div>
        </div>
    )
}

export default Post