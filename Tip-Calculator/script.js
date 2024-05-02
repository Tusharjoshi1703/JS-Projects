const btnele= document.getElementById('calculate');
const billinput=document.getElementById('bill');
const tipinput=document.getElementById('tip');
const totalinput= document.getElementById('total');

function calculatetotal(){
    const billvalue= billinput.value;
    const tipvalue= tipinput.value;
    const totalvalue = billvalue* ( 1+ tipvalue/100);
    totalinput.innerText=totalvalue.toFixed(2);
    
}

btnele.addEventListener('click',calculatetotal);

