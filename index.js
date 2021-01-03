let date_ob = new Date();

let url = "https://api.coingecko.com/api/v3/simple/price?ids=dogecoin,bitcoin,bitcoin-cash,dash,monero&vs_currencies=usd,eur";

const http = require('https');
const fs = require('fs');

//save();

let date = ("0" + date_ob.getDate()).slice(-2);
        let hours = date_ob.getHours();
        let minutes = date_ob.getMinutes();
        let seconds = date_ob.getSeconds();
        download(hours+","+minutes+","+seconds+","+date+".json");
        save();

function save(){
   setTimeout(function () {
        date_ob = new Date();
        let date = ("0" + date_ob.getDate()).slice(-2);
        let hours = date_ob.getHours();
        let minutes = date_ob.getMinutes();
        let seconds = date_ob.getSeconds();
        download(hours+","+minutes+","+seconds+","+date+".json");
        save();
    }, 300000);
}

function download(name){
  var path = "data/"+name;
  console.log(path);
  const request = http.get(url, function(response) {
    if (response.statusCode === 200) {
        var file = fs.createWriteStream(path);
        response.pipe(file);
    }
    console.log(response.statusCode);
    request.setTimeout(60000, function() { // if after 60s file not 
        request.abort();
        console.log("abort");
    });
});
}




const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
