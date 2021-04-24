
function calc(val){
     document.form.resultInput.value +=val;
}

function getResult(){
    let val = document.form.resultInput.value;
    if (val){
        document.form.resultValue.value = eval(document.form.resultInput.value);
    }
}

function resetInput(){
    document.form.resultInput.value = " ";
    document.form.resultValue.value = " ";

}
 function handleBackspace(){
     let val = document.form.resultInput.value;
     if (val) {
         val = val.substring(0, val.length - 1);
         document.form.resultInput.value = val;
         document.form.resultValue.value = " ";

     } 
 }