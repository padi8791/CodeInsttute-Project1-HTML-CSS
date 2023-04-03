//This function reads a file from the webserver and returns its content
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
    };
    rawFile.open("GET", file,false);
    rawFile.send(null);
    return(allText);
}

//This function checks if a customer specified in the search input field by his/her full name or email address or phone number is in the
// list of elligible customers for the loto draw.
function CheckElli() {
    window.document.getElementById("idParaElliresult").innerHTML = "";
    var ListOfCustFile = './ElliCustomers.txt';

    var StrListOfCust = new String(readTextFile(ListOfCustFile));
    var TabListOfCustStr = StrListOfCust.split(';');
    var TabListOfCustObj = [];
    var IsInList = false;
    var IndexInList;
    var StrSearchInput = window.document.getElementById("searchinput").value;

// customers list from a table of strings to a table of objects
    let counter = 0;
    let counter2 = 0;
    while ( counter < TabListOfCustStr.length) {
        let tmpTab = TabListOfCustStr[counter].split('/');
        if (tmpTab.length == 3){
            let ElliCust = {
                "Name": tmpTab[0],
                "Email": tmpTab[1],
                "Phone": tmpTab[2],
            }
            TabListOfCustObj[counter2] = ElliCust;
            
            if((tmpTab[0].toUpperCase().trim() == StrSearchInput.toUpperCase().trim()) || (tmpTab[1].toUpperCase().trim() == StrSearchInput.toUpperCase().trim()) || (tmpTab[2].toUpperCase().trim() == StrSearchInput.toUpperCase().trim()) ){
                IsInList = true;
                IndexInList = counter2;
            }
            
            counter2++;
        }
        counter++;
    }

    if (IsInList){
       
        let Message = "Congratulations !!! Dear customer " + TabListOfCustObj[IndexInList].Name + " your phone number " + TabListOfCustObj[IndexInList].Phone + " has been selected for a car win draw to take place very soon. You have received a notification at the adresse " + TabListOfCustObj[IndexInList].Email + " To multiply your chances continue purchasing items on our website www.buyamsellam.com";
        window.document.getElementById("idParaElliresult").style.color = "green";
        window.document.getElementById("idParaElliresult").style.fontSize = "large";
        window.document.getElementById("idParaElliresult").innerHTML = Message;
       

    } 
    else{

        let Message = "Dear customer you are not yet elligible for the car win draw. You still have your chances. Please continue purchasing items on our website www.buyamsellam.com" ;
        window.document.getElementById("idParaElliresult").style.color = "red";
        window.document.getElementById("idParaElliresult").style.fontSize = "large";
        window.document.getElementById("idParaElliresult").innerHTML = Message;
        
    }
    
}
