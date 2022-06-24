const num1 = parseFloat (prompt("Enter a number;"));
const num2 = parseFloat (prompt("Enter another number;"));
//read operator
const operator =prompt("enter an operator(+, -, *, /,)");
if(isNaN(num1) || isNaN(num2)){
    alert("wrong input! Provide correct data");
  }else{
  
    if(operator == '+'){
      result = num1 + num2;
    }else if (operator == '-'){
      result = num1 - num2;
    }else if (operator == '*'){
      result = num1 * num2;
    }else if (operator == '/'){
      result = num1 / num2
   }
  document.write(num1 + operator + num2 +'=' + result);
  }


