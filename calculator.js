let num1=0;
let num2=0;
let value = "";
function display(val){
    if(val =="="){
        const splitPattern = /[\s()*/%+-]+/g;
        let valueArr = value.split(splitPattern);
        clr();

        num1 = parseFloat(valueArr[0]);
        num2 = parseFloat(valueArr[1]);
        let operator = value[value.search(splitPattern)]; // find first operator in display
        let answer = operate(num1, num2, operator);
        document.getElementById("result").value = answer
    }else{
        value = document.getElementById("result").value += val;
    };
    
    
};
function clr(){
    document.getElementById("result").value = "";
}

function operate(num1, num2, operator){
    if(operator == '+'){
        return num1+num2
    }else if(operator == '-'){
        return num1-num2
    }else if(operator == '/'){
        return num1/num2
    }else if(operator == '*'){
        return num1*num2
    };
};