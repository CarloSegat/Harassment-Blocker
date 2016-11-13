
function get_messages(name){
    var x = document.getElementById(name);
    //alert(x.innerHTML);

    var t = x.getElementsByClassName("message");
    var message_list = [];
    for(var i = 0; i < t.length; i++){
        var str_len = t[i].innerHTML.length - 7;
        var temp = t[i].innerHTML;
        var final = temp.slice(6, str_len);
        message_list.push(final);
    }
    return(message_list);
}

var e = get_messages("Crazy troll");
alert(e)

var unirest = require('unirest');

// These code snippets use an open-source library. http://unirest.io/nodejs
var a = unirest.post("https://neutrinoapi-bad-word-filter.p.mashape.com/bad-word-filter")
.header("X-Mashape-Key", "dcmsmMirTFmshXiL2wf9uN3eMETWp1e85iZjsnsblI2hQ9t2Dg")
.header("Content-Type", "application/x-www-form-urlencoded")
.header("Accept", "application/json")
.send("censor-character=*")
.send("content=This text does fuck not actually contain any bad words!")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});
alert(a);
