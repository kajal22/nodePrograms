var shortUrl = require('node-url-shortener');
 
shortUrl.short('http://localhost:4000/#/resetPassword/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDk1ZWRlN2E5ZDY4MDFhZDgzMjVkNzUiLCJpYXQiOjE1NzAxMDgxOTAsImV4cCI6MTU3MDEyOTc5MH0.k8QejMagp7SRXnXBTrZwxu41cu96T1vWEK3iZ5Q-_7E', function(err, url){
    console.log(url);
});