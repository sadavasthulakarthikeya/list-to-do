function appendValue(value){
    document.getElementById("display").value += value;
}

function cleardisplay(){
    document.getElementById("display").value = "";
}

function backspace(){
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}




function calculate(){
    try{
        document.getElementById("display").value = eval(
            document.getElementById("display").value
        )
    }
    catch(e){
        document.getElementById("display").value = "Error"
    }
}