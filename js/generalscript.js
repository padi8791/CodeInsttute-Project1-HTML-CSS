
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    var allText;
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
            }
        }
    }
    rawFile.open("GET", file,false);
    rawFile.setRequestHeader('Content-Type','application/Javascript')
    rawFile.send(null);
    return(allText);
}

/*function CheckElli() {
    console.log("Example to read line by line text");
    const f = require('fs');
    const readline = require('readline');
    var user_file = './ElliCustomers.txt';
    var r = readline.createInterface({
        input : f.createReadStream(user_file)
    });
    r.on('line', function (text) {
    console.log(text);
    window.alert(text);
    });

}*/


function CheckElli() {
    window.document.getElementById("idParaElliresult").innerHTML = "";
    var user_file = 'js/CheckElliServerSide.js';
    var Filecontent = readTextFile(user_file);
    window.document.getElementById("idParaElliresult").innerHTML = Filecontent;
    console.log(Filecontent);
    window.alert(Filecontent);
}
