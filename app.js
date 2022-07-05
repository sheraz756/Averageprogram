function onAverage()
{
    let value1 = parseInt(document.querySelector("#value1").value); 
    let value2 = parseInt(document.querySelector("#value2").value);
    let value3 = parseInt(document.querySelector("#value3").value);
    let value4 = parseInt(document.querySelector("#value3").value);
    let value5 = parseInt(document.querySelector("#value3").value);
    let value6 = parseInt(document.querySelector("#value3").value);
    let value7 = parseInt(document.querySelector("#value3").value);
    let value8 = parseInt(document.querySelector("#value3").value);
    let value9 = parseInt(document.querySelector("#value3").value);
    let value10 =parseInt(document.querySelector("#value3").value);
    let result = value1+value2+value3;value4+value5+value6+value7+value8+value9+value10;
    let average = result/3;
    document.querySelector("#result").innerHTML = average;  
}

