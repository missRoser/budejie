
var https = require('https');
var fs = require('fs');
var express = require('express');
var request = require('request');

var app = express();

app.listen(8088);

app.get('/alls.json',function(req,res){
	//let urlNow = 'http://s.budejie.com/topic/list/jingxuan/1/bs0315-iphone-4.5.7/0-20'
	var dataNp = req.query.np || 0;
	console.log('http://s.budejie.com/topic/tag-topic/64/hot/bs0315-iphone-4.5.7/'+dataNp+'-20.json');
	var urlL = 'http://s.budejie.com/topic/list/jingxuan/1/bs0315-iphone-4.5.7/'+dataNp+'-20.json';
	request.get(urlL,function(err,reson,body){
		//console.log(data);
		
		//console.log(body);
		res.setHeader('Content-Type', 'application/json')
		res.setHeader("Access-Control-Allow-Origin", "*")
		res.send(body);
		res.end();
		/*res.send(data);
		res.end();*/
	})

})

app.get('/imgs.json',function(req,res){
	//let urlNow = 'http://s.budejie.com/topic/list/jingxuan/1/bs0315-iphone-4.5.7/0-20'
	var dataNp = req.query.np || 0;
	console.log('http://s.budejie.com/topic/tag-topic/64/hot/bs0315-iphone-4.5.7/'+dataNp+'-20.json');
	var urlL = 'http://s.budejie.com/topic/list/jingxuan/10/bs0315-iphone-4.5.7/'+dataNp+'-20.json';
	//console.log(dataNp);
	request.get(urlL,function(err,reson,body){
		//console.log(data);
		
		//console.log(body);
		res.setHeader('Content-Type', 'application/json')
		res.setHeader("Access-Control-Allow-Origin", "*")
		res.send(body);
		res.end();
		/*res.send(data);
		res.end();*/
	})

})

app.get('/txts.json',function(req,res){
	//let urlNow = 'http://s.budejie.com/topic/list/jingxuan/1/bs0315-iphone-4.5.7/0-20'
	var dataNp = req.query.np || 0;
	console.log('http://s.budejie.com/topic/tag-topic/64/hot/bs0315-iphone-4.5.7/'+dataNp+'-20.json');
	var urlL = 'http://s.budejie.com/topic/tag-topic/64/hot/bs0315-iphone-4.5.7/'+dataNp+'-20.json';
	request.get(urlL,function(err,reson,body){
		//console.log(data);
		res.setHeader('Content-Type', 'application/json')
		res.setHeader("Access-Control-Allow-Origin", "*")
		res.send(body);
		res.end();
		/*res.send(data);
		res.end();*/
	})

})