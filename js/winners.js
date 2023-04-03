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

var ListOfWinnersFile = './ListWinners.txt';

var StrListOfWinners = new String(readTextFile(ListOfWinnersFile));
var TabListOfWinnersStr = StrListOfWinners.split(';');
var TabListOfWinnersObj = [];

// customers list from a table of strings to a table of objects
    let counter = 0;
    let counter2 = 0;
    let TabWinners = window.document.createElement("table");

    TabWinners.style.display = "block";
    TabWinners.style.border = "1px solid";
    TabWinners.style.borderCollapse = "collapse";
    //TabWinners.style.width = "100%";
    TabWinners.style.tableLayout = "fixed";
    
   /* let tmpColGroup = window.document.createElement("colgroup");
    let tmpcol = window.document.createElement("col");
    tmpcol.style.span = "1";
    tmpcol.style.width = "2%";
    tmpColGroup.appendChild(tmpcol);

    tmpcol.style.span = "1";
    tmpcol.style.width = "38%";
    tmpColGroup.appendChild(tmpcol);

    tmpcol.style.span = "1";
    tmpcol.style.width = "25%";
    tmpColGroup.appendChild(tmpcol);

    tmpcol.style.span = "1";
    tmpcol.style.width = "10%";
    tmpColGroup.appendChild(tmpcol);

    tmpcol.style.span = "1";
    tmpcol.style.width = "25%";
    tmpColGroup.appendChild(tmpcol);

    TabWinners.appendChild(tmpColGroup);
    */


    let tmpRow = window.document.createElement("tr");
    tmpRow.style.display = "block";
    tmpRow.style.backgroundColor = "rgba(147, 140, 140, 0.44)";

    let tmpHeader =  window.document.createElement("th");
    tmpHeader.innerHTML = "No";
    tmpHeader.style.border = "1px solid";
    //tmpHeader.style.fontSize = "large"; 
    tmpHeader.style.width = "2%";
    tmpRow.appendChild(tmpHeader);

    tmpHeader =  window.document.createElement("th");
    tmpHeader.innerHTML = "FULL NAME";
    tmpHeader.style.border = "1px solid";
    //tmpHeader.style.fontSize = "large";
    tmpHeader.style.width = "38%";
    tmpRow.appendChild(tmpHeader);

    tmpHeader =  window.document.createElement("th");
    tmpHeader.innerHTML = "EMAIL";
    tmpHeader.style.border = "1px solid";
    //tmpHeader.style.fontSize = "large";
    tmpHeader.style.width = "25%";
    tmpRow.appendChild(tmpHeader);

    tmpHeader =  window.document.createElement("th");
    tmpHeader.innerHTML = "PHONE";
    tmpHeader.style.border = "1px solid";
    //tmpHeader.style.fontSize = "large";
    tmpHeader.style.width = "10%";
    tmpRow.appendChild(tmpHeader);

    tmpHeader =  window.document.createElement("th");
    tmpHeader.innerHTML = "PRIZE";
    tmpHeader.style.border = "1px solid";
    //tmpHeader.style.fontSize = "large";
    tmpHeader.style.width = "25%";
    tmpRow.appendChild(tmpHeader);

    TabWinners.appendChild(tmpRow);


    while ( counter < TabListOfWinnersStr.length) {

        let tmpTab = TabListOfWinnersStr[counter].split('/');
        if (tmpTab.length == 4){
            let Winner = {
                "Name": tmpTab[0],
                "Email": tmpTab[1],
                "Phone": tmpTab[2],
                "Prize": tmpTab[3],
            };
            TabListOfWinnersObj[counter2] = Winner;

            tmpRow =  window.document.createElement("tr");
            tmpRow.style.display = "block";
            
            if ((counter2 % 2) == 0) {
                tmpRow.style.backgroundColor = "white";
            }
            
           

            let tmpCell = window.document.createElement("td");
            tmpCell.innerHTML = 1 + counter2;
            tmpCell.style.border = "1px solid";
            tmpCell.style.display = "table-cell";
            //tmpCell.style.fontSize = "large"; 
            tmpCell.style.width = "2%"; 
            tmpCell.style.textAlign = "auto";
            tmpRow.appendChild(tmpCell);

            tmpCell = window.document.createElement("td");
            tmpCell.innerHTML = Winner.Name;
            tmpCell.style.border = "1px solid";
            tmpCell.style.display = "table-cell";
            //tmpCell.style.fontSize = "large"; 
            tmpCell.style.width = "38%";
            tmpCell.style.textAlign = "auto"; 
            tmpRow.appendChild(tmpCell);

        
            tmpCell = window.document.createElement("td");
            tmpCell.innerHTML = Winner.Email;
            tmpCell.style.border = "1px solid";
            tmpCell.style.display = "table-cell";
            //tmpCell.style.fontSize = "large";
            tmpCell.style.width = "25%";
            tmpCell.style.textAlign = "auto";  
            tmpRow.appendChild(tmpCell); 
            
            tmpCell = window.document.createElement("td");
            tmpCell.innerHTML = Winner.Phone;
            tmpCell.style.border = "1px solid";
            tmpCell.style.display = "table-cell";
            //tmpCell.style.fontSize = "large";
            tmpCell.style.width = "10%"; 
            tmpCell.style.textAlign = "auto"; 
            tmpRow.appendChild(tmpCell); 

            tmpCell = window.document.createElement("td");
            tmpCell.innerHTML = Winner.Prize;
            tmpCell.style.border = "1px solid";
            tmpCell.style.display = "table-cell";
            //tmpCell.style.fontSize = "large"; 
            tmpCell.style.width = "25%"; 
            tmpCell.style.textAlign = "auto";
            tmpRow.appendChild(tmpCell);  

            TabWinners.appendChild(tmpRow);

           /* let ParaNode = window.document.createElement("p");
            let msg = (1 + counter2) + " - " + Winner.Name.toUpperCase() + " " + Winner.Email + " " + Winner.Phone + " wins " + Winner.Prize;
            
            ParaNode.style.color = "green";
            ParaNode.style.fontSize = "large";
            ParaNode.innerHTML = msg;
            window.document.getElementById("idListWinners").appendChild(ParaNode); */
            counter2++;
        }
        counter++;
    }

    
    window.document.getElementById("idListWinners").appendChild(TabWinners);



