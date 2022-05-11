//
//
//    YTNP2txt by Daniel M. (c)2022
//
//      https://github.com/T1G3R-DEV/YT2txt
//
//      version 0.4.1
//



const http = require('http');   //lib for webserver
const url = require('url');     //lib for parsing GET requests
const fs = require('fs');       //lib for writing to the files


console.log("\t\tYTNP2txt by Daniel M. (c)2022\n\nVisit my Github for more info/setup info: \n\thttps://github.com/T1G3R-DEV/YT2txt");



const requestListener = function (req, res) {
    const queryObject = url.parse(req.url, true).query;
    console.log(queryObject);
    if (queryObject['video_title'] !=null)
    {
        console.log(queryObject);


        fs.writeFile('./video_title.txt', String(queryObject['video_title']), err => {
            if (err) {
            console.error(err);
            }
            // file written successfully
        });

        fs.writeFile('./video_creator.txt', String(queryObject['video_creator']), err => {
            if (err) {
            console.error(err);
            }
            // file written successfully
        });
    
    }
    res.writeHead(200);
  
    res.end('For help visit the github: https://github.com/T1G3R-DEV/YT2txt/ !');
}

const server = http.createServer(requestListener);
server.listen(8099);