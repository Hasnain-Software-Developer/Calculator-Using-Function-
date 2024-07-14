//calculator project using function

let firstNumber = 20
let secondNumber = 10
let Operator = "+"

//Creating a function which contain 3 parameters
function calculate(num1:number,num2:number,Operator:string){
    switch (Operator) {
        case "+":
            return num1 + num2
            break;
            case"-":
            return num1 * num2
            case "*":
            return num1 * num2
            break;
            case "/":
            return num1 / num2
            break;
    
        default: "Invalid Operator"
            break;
    }
}

//Now storing function in a variable for addition
let cheak1 = calculate (firstNumber,secondNumber,Operator)
console.log(`After Adding ${firstNumber} With ${secondNumber} using operator ${Operator} The result is ${cheak1}`);
console.log("=".repeat(60));

//Reassigning Operator
Operator = "-"

//Now storing dunction in a variable for Subtracting

let cheak2 = calculate (firstNumber,secondNumber,Operator)
console.log(`After Subtracting ${firstNumber} from ${secondNumber} using operator ${Operator} The result is ${cheak2}`);
console.log("=".repeat(60));   //.repeat is a predefined function Just To Make our Code readable and Attractive


Operator = "*"
//Now storing dunction in a variable for Multilpication

let cheak3 = calculate (firstNumber,secondNumber,Operator)
console.log(`After Multilplying ${firstNumber} from ${secondNumber} using operator ${Operator} The result is ${cheak3}`);
console.log("=".repeat(60));


Operator = "/"
//Now storing dunction in a variable for Division

let cheak4 = calculate (firstNumber,secondNumber,Operator)
console.log(`After Dividing ${firstNumber} from ${secondNumber} using operator ${Operator} The result is ${cheak4}`);
 
console.log("=".repeat(60));

