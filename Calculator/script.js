const btnsele=document.getElementsByClassName("button");
const inputfield=document.getElementById("dp");
for(let i=0;i < btnsele.length  ;  i++){
    btnsele[i].addEventListener("click",()=>{
        const btnvalue=btnsele[i].value;
        if(btnvalue=== "AC"){
            clearResult();
        }
        else if(btnvalue==="="){
            calcresult();
        }
        else if(btnvalue==="DEL"){
            slicce();
        }
        else  {
            appendValue(btnvalue);
        }
        
    });
}
function clearResult(){
  inputfield.value="";
}
function calcresult(){
   inputfield.value=eval(inputfield.value);
}
function appendValue(btnvalue){
     inputfield.value+=btnvalue
}
function slicce(){
    dp.value=dp.value.toString().slice(0,-1);
}