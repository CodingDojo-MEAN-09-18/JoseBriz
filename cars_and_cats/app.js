// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/') {
        fs.readFile('carscats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/cars') {
        fs.readFile('cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/cats') {
        fs.readFile('cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/cars/new') {
        fs.readFile('new.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    // for own .css files (not bootstrap on a cdn, this does not need configuartion)
    else if(request.url === '/stylesheets/style.css') {   
        fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(contents); 
            response.end();
        });
    }
    // for own .js files (not jquery on a cdn)
    else if(request.url === '/scripts/script.js') {  
        fs.readFile('./scripts/script.js', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/javascript'});
            response.write(contents); 
            response.end();
        });
    }
    // for image files
    else if(request.url === '/images/home.jpg') {  
        fs.readFile('./images/home.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    // request didn't match anything:
    else {
        fs.readFile('carscats.html', function (errors, contents){
            response.writeHead(404,{'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");