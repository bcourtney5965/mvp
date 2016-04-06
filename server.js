var express = require('express');
var app = express();

var books = [
  	{
    	title: 'Fool Me Once', 
    	price: 16.80, 
    	pubdate: new Date('2016', '03', '22'), 
    	cover: 'http://ecx.images-amazon.com/images/I/51lS8ElxWGL._SX329_BO1,204,203,200_.jpg',
      pages: "400 pages"
  	}, 
  	{ 
    	title: 'Private Paris', 
    	price: 19.01, 
    	pubdate: new Date('2016', '03', '14'), 
    	cover: 'http://ecx.images-amazon.com/images/I/519AuLflJqL._SX319_BO1,204,203,200_.jpg',
			pages: "448 pages"
  	}, 
  	{ 
    	title: 'The Nest', 
    	price: 16.19, 
    	pubdate: new Date('2016', '03', '2'), 
    	cover: 'http://ecx.images-amazon.com/images/I/51bNNg5XD0L._SX329_BO1,204,203,200_.jpg',
    	pages: "368 pages"
  	}, 
  	{ 
    	title: 'Me Before You', 
    	price: 10.43, 
    	pubdate: new Date('2013', '07', '30'), 
    	cover: 'http://ecx.images-amazon.com/images/I/51fUUVAZ5PL._SX324_BO1,204,203,200_.jpg',
    	pages: "369 pages"
  	}, 
  	{ 
    	title: 'Property of a Noblewoman', 
    	price: 18.73, 
    	pubdate: new Date('2013', '03', '15'), 
    	cover: 'http://ecx.images-amazon.com/images/I/51SdRHCPriL._SX327_BO1,204,203,200_.jpg',
    	pages: "336 pages"
  	}, 
  	{ 
    	title: 'The Nightingale', 
    	price: 17.11, 
    	pubdate: new Date('2015', '02', '03'), 
    	cover: 'http://ecx.images-amazon.com/images/I/515p3OrN1KL._SX327_BO1,204,203,200_.jpg',
    	pages: "440 pages"
  	}
  ];

app.use(express.static(__dirname));

app.get('/books', function (req, res) {
  res.send(books);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});