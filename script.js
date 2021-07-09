let result = document.getElementById('result');
buttons = document.querySelectorAll('button');
let Resultvalue = '';

for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        
        if(buttonText =='C'){
            Resultvalue = "";
            result.value = Resultvalue;

        }
        else if(buttonText =='='){
            result.value = eval(Resultvalue);
        }
        else{
            Resultvalue += buttonText;
            result.value = Resultvalue;
        }
    })
}