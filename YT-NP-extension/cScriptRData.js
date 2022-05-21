//
//
//    YTNP2txt by Daniel M. (c)2022
//
//      https://github.com/T1G3R-DEV/YT2txt
//
//  
//




console.log('YTNP2txt by Daniel M. (c)2022');

var video_title_old="";

var isON = false;
var infoRefreshInterval = 10000;
var targetIP= "http://localhost"
var targetPort= 8099;


chrome.storage.sync.get({
    ONOFF: true,
    refreshInterval: 10000,
    targetIP: "http://localhost",
    targetPort: 8099
}, function(items) {
    infoRefreshInterval = items.refreshInterval;
    isON = items.ONOFF;
    targetIP= items.targetIP;
    targetPort= items.targetPort;
});


var intervalId = window.setInterval(function()
{
    var video_title = document.querySelector('#container h1 yt-formatted-string');
    var video_creator = document.querySelector('#channel-name yt-formatted-string');
    if(isON)
    {
        if (video_title!=null)
        {
            if(video_title.textContent != video_title_old)
            {
                video_title_old = video_title.textContent;
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.onreadystatechange = function() { }
                xmlHttp.open("GET",targetIP + ":" + targetPort + "/?video_title=" + video_title.textContent + "&video_creator=" + video_creator.textContent, true); // true for asynchronous 
                xmlHttp.send(null); 
            }
        }

    }  else clearInterval(intervalId);
}, infoRefreshInterval);






