
// declaration of some global variables
var IsFirstSelect = false;
var IsSecondSelect = false;
var IsThirdSelect = false;
var IsFourthSelect = false;
var IsFifthSelect = false;

var ListOfElliCustFile = './ElliCustomers.txt';

// reading the file containing the list of elligible customers
var StrListOfElliCust = new String(readTextFile(ListOfElliCustFile));
var TabListOfElliCustStr = StrListOfElliCust.split(';');
var TabListOfElliCustObj = [];

// customers list from a table of strings to a table of objects
    let counter = 0;
    let counter2 = 0;

    while ( counter < TabListOfElliCustStr.length) {

        let tmpTab = TabListOfElliCustStr[counter].split('/');
        if (tmpTab.length == 3){
            let ElliCust = {
                "Name": tmpTab[0],
                "Email": tmpTab[1],
                "Phone": tmpTab[2],
            };
            TabListOfElliCustObj[counter2] = ElliCust;

            counter2++;
        }
        counter++;
    }

// This function randomly selects a customer from a list of customers    
function SelectRandomCust(ListCust){
    let SelectedWinner = null;
    if(ListCust.length > 0){
      let RandomIndex = Math.floor(Math.random() * (ListCust.length - 1));
      SelectedWinner = ListCust[RandomIndex];
    }
    return SelectedWinner;
}

// This function removes from the list of customers all occurences of a customer already selected 
function RemoveSelectedWinner(SelectedWinner,TabCust){
  
    let cter = 0;
    let NewTab = [];

    while(cter < TabCust.length){
        
        if(TabCust[cter].Phone != SelectedWinner.Phone){
            NewTab.push(TabCust[cter]);
        }
        cter++;
    }
    return NewTab;
}

// This function reads a file from the webserver
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

// This function randomly selects a winner from the list of elligible customers and displays it.
function SelectWinner(num)
{
    window.document.getElementById("idParaLotoDrawErrorMsg").innerHTML = "";

    if(IsFifthSelect){
      return;
    }
    if(num == 1){
        let FirstWinner = SelectRandomCust(TabListOfElliCustObj);
        if(FirstWinner != null){
            TabListOfElliCustObj = RemoveSelectedWinner(FirstWinner,TabListOfElliCustObj);
            window.document.getElementById("idSpanFirstWin").innerHTML = FirstWinner.Name + " " + FirstWinner.Phone;
            window.document.getElementById("idSpanFirstWin").style.color = "green";
            IsFirstSelect = true;  
        }
    }
    
    if(num == 2){
        if(!IsFirstSelect){
           window.document.getElementById("idParaLotoDrawErrorMsg").innerHTML = "Please select the previous winners at first";
           window.document.getElementById("idParaLotoDrawErrorMsg").style.color = "red";

        }
        else {
            let SecondWinner = SelectRandomCust(TabListOfElliCustObj);
            if(SecondWinner != null){
                TabListOfElliCustObj = RemoveSelectedWinner(SecondWinner,TabListOfElliCustObj);
                window.document.getElementById("idSpanSecondWin").innerHTML = SecondWinner.Name + " " + SecondWinner.Phone;
                window.document.getElementById("idSpanSecondWin").style.color = "green";
                IsSecondSelect = true;
            }
        }
    }

    if(num == 3){
        if(!IsSecondSelect){
           window.document.getElementById("idParaLotoDrawErrorMsg").innerHTML = "Please select the previous winners at first";
           window.document.getElementById("idParaLotoDrawErrorMsg").style.color = "red";

        }
        else {
            let ThirdWinner = SelectRandomCust(TabListOfElliCustObj);
            if(ThirdWinner != null){
                TabListOfElliCustObj = RemoveSelectedWinner(ThirdWinner,TabListOfElliCustObj);
                window.document.getElementById("idSpanThirdWin").innerHTML = ThirdWinner.Name + " " + ThirdWinner.Phone;
                window.document.getElementById("idSpanThirdWin").style.color = "green";
                IsThirdSelect = true;
            }  

        }
    }

    if(num == 4){
        if(!IsThirdSelect){
           window.document.getElementById("idParaLotoDrawErrorMsg").innerHTML = "Please select the previous winners at first";
           window.document.getElementById("idParaLotoDrawErrorMsg").style.color = "red";

        }
        else {
            let FourthWinner = SelectRandomCust(TabListOfElliCustObj);
            if(FourthWinner != null){
                TabListOfElliCustObj = RemoveSelectedWinner(FourthWinner,TabListOfElliCustObj);
                window.document.getElementById("idSpanFourthWin").innerHTML = FourthWinner.Name + " " + FourthWinner.Phone;
                window.document.getElementById("idSpanFourthWin").style.color = "green";
                IsFourthSelect = true;
            }
        }
    }

    if(num == 5){
        if(!IsFourthSelect){
           window.document.getElementById("idParaLotoDrawErrorMsg").innerHTML = "Please select the previous winners at first";
           window.document.getElementById("idParaLotoDrawErrorMsg").style.color = "red";

        }
        else {
            let FifthWinner = SelectRandomCust(TabListOfElliCustObj);
            if(FifthWinner != null){
                TabListOfElliCustObj = RemoveSelectedWinner(FifthWinner,TabListOfElliCustObj);
                window.document.getElementById("idSpanFifthWin").innerHTML = FifthWinner.Name + " " + FifthWinner.Phone;
                window.document.getElementById("idSpanFifthWin").style.color = "green";
                IsFifthSelect = true;
            }
        }
    }
}

    

