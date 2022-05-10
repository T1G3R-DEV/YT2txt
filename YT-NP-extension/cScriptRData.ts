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


var intervalId = window.setInterval(function()
{
    var video_title = document.querySelector('#container h1 yt-formatted-string');
    var video_creator = document.querySelector('#channel-name yt-formatted-string');
    if (video_title!=null)
    {
        if(video_title.textContent != video_title_old)
        {
            video_title_old = video_title.textContent;
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function() { }
            xmlHttp.open("GET", "http://localhost:8099/?video_title=" + video_title.textContent + "&video_creator=" + video_creator.textContent, true); // true for asynchronous 
            xmlHttp.send(null); 
        }
    }

       
}, 1000);




