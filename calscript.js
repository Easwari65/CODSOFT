function Actiontobutton(value){
    document.getElementById("display").value += value;
}

function cleardisplay(){
    document.getElementById("display").value = "";
}

function deletelast()
{
    let current = document.getElementById("display").value;
    document.getElementById("display").value = current.slice(0, -1);
}

function calculateresult()
{
    try{
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    }
    catch(error)
    {
        alert("Invalid")
    }
}