

    console.log("Example to read line by line text");
    const f = require('fs');
    const readline = require('readline');
    var user_file = './ElliCustomers.txt';
    var r = readline.createInterface({
        input : f.createReadStream(user_file)
    });
    r.on('line', function (text) {
    console.log(text);
    });



