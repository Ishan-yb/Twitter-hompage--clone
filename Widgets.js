import React from 'react';
import './Widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from '@material-ui/icons/Search';
function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets_input ">
                <SearchIcon className="wigets_searchicon"/>
                <input placeholder="search Twitter " type= "text"/> 
                </div> 
            <div className="widgets_widgetcontainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1368915262209220609"}/>
                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="Cristiano"
                option={{height:400}}/>
                </div>  
                <TwitterShareButton
                url={"https://www.facebook.com/ishan.pathak.509/"}  
                options={{text:"#Dark knight",via:"IshanPa43636161"}}
                />
        </div>
    );
}

export default Widgets
