// Import essential libraries 
const exp = require('constants');
const express = require('express'); 
const app = express(); 
const path = require('path'); 
const router = express.Router()


// Setup essential routes 
router.get('/', function(req, res) { 
    res.sendFile(path.join(__dirname + '/index.html')); 
    //__dirname : It will resolve to your project folder. 
}); 
router.get('/about', function(req, res) { 
    res.sendFile(path.join(__dirname + '/about.html')); 
}); 
router.get('/services', function(req, res) { 
    res.sendFile(path.join(__dirname + '/services.html')); 
}); 
router.get('/contact', function(req, res) { 
    res.sendFile(path.join(__dirname + '/contact.html')); 
}); 
//add the router 
app.use('/', router);
app.use(express.static("public"));
app.listen(process.env.port || 3000); 
console.log(__dirname);
console.log('Running at Port 3000');