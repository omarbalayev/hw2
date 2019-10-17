// 1st question

function oddOrEven() {
    let a = Number(document.getElementById('input_a').value) ;
    let b = 2;
    let result;

    if (a%b==0) {
       result = (a*b).toString()
        console.log(`${a} is even number. Then a*b=${result}.`)
        document.getElementById('resultText').innerHTML = `${a} is even number. Then a*b=${result}.`;
    } else if (a%b==1) {
                result = (a+b).toString();
                console.log(`${a} is odd number. Then a+b=${result}`)
                document.getElementById('resultText').innerHTML = `${a} is odd number. Then a+b=${result}.`
    } else { console.log('number not entered by user') }

 };

 //short version
 let a;
 let b;
 if(!(a%2)) {
     result=a+b;
 } else { result = a*b;
};

// short function code ES6
// const oddOrEven = (first, second) => first %2


/* 2nd question */

/* if statement version */
function quarterFind() {
    let x = Number(document.getElementById('input_x').value);
    let y = Number(document.getElementById('input_y').value);
    
    // console.log(parseInt(q))

    if (x > 0 && y > 0) {
        document.getElementById('dotText').innerHTML = `The Dot is in 1st quarter.`
    } else if (x < 0 && y > 0) {
        document.getElementById('dotText').innerHTML = `The Dot is in 2nd quarter.`
    } else if (x < 0 && y < 0) {
        document.getElementById('dotText').innerHTML = `The Dot is in 3rd quarter.`
    } else if (x > 0 && y < 0) {
        document.getElementById('dotText').innerHTML = `The Dot is in 4th quarter.`
    }
}



// // Switch case version
    
    function quarterFind() {
        let x = document.getElementById('input_x').value;
        let y = document.getElementById('input_y').value;

        console.log(`x is ${x}, y is ${y}`)

        switch (true) {
            case (x > 0 && y > 0):
                document.getElementById('dotText').innerHTML = `The Dot is in 1st quarter.`;
                console.log('1st quarter');
                break;
            case (x < 0 && y > 0):
                document.getElementById('dotText').innerHTML = `The Dot is in 2nd quarter.`; 
                console.log('2nd quarter');
                break;
            case (x < 0 && y < 0):
                document.getElementById('dotText').innerHTML = `The Dot is in 3rd quarter.`;
                console.log('3rd quarter');
                break;
            case (x > 0 && y < 0):
                document.getElementById('dotText').innerHTML  = `The Dot is in 4th quarter.`;
                console.log('4th quarter');
                break;
            default : document.getElementById('dotText').innerHTML  = `The Dot is in center.`;
            }
    }

/* 3 question */
   function concatPos() {

    let a = document.getElementById('num1').value;
    let b = document.getElementById('num2').value;
    let c = document.getElementById('num3').value;
    
    // let aa = Math.sign(a);
    // let bb = Math.sign(b);   
    // let cc = Math.sign(c);

    let Arr = [a,b,c];
    console.log(`Default array is ${Arr}`);

    let posArr = Arr.filter(function(z) {
        return z > 0;
    }); console.log(`Positive array is ${posArr}`);

    let sum = eval(posArr.join("+"));
    console.log(`Summary of positive nums is ${sum}`);

    document.getElementById('concatText').innerHTML = `Total summary of positive numbers is ${sum}`
};

/* 4th question */

//Посчитать выражение макс(а * б * с, а + б + с) + 3

function compareMax() {

let a= Number(document.getElementById('max_num1').value); 
let b= Number(document.getElementById('max_num2').value);
let c= Number(document.getElementById('max_num3').value);
let arr = [a,b,c];
let concArr = eval(arr.join('+'));
let multipArr = eval(arr.join('*'));
let compareResult = concArr < multipArr;


    if (compareResult) {
        document.getElementById('compareMaxText').innerHTML = `Multiplication is higher than concatenate. concatenate result is ${concArr}. Multiplication result is ${multipArr}`
    } else {
        document.getElementById('compareMaxText').innerHTML = `Multiplication is lower than concatenate. concatenate result is ${concArr}. Multiplication result is ${multipArr}`
    }
    console.log(concArr, multipArr);
};

//short function
// const getMaxOfProductSum = (first, second, third) => {
//     const product = first * second *  third;
//     const sum = first + second + third;
//     return product > sum ? product + 3 : sum + 3;
// }; 


/* 5th question */
//write in if else statement. switch case switchs true boolen result. it is not recommended.

// switch case

function findGrade() {
    let rating = Number(document.getElementById('rating_input').value);
    switch(true) {
        case (rating>0 && rating<=19) :
            document.getElementById('gradeText').innerHTML = `E`
            break;
        case (rating>19 && rating<=39) :
            document.getElementById('gradeText').innerHTML = `F`
            break;
        case (rating>39 && rating<=59) :
            document.getElementById('gradeText').innerHTML = `D`
            break;
        case (rating>59 && rating<=74) :
            document.getElementById('gradeText').innerHTML = `C`
            break;
        case (rating>74 && rating<=89) :
            document.getElementById('gradeText').innerHTML = `B`
            break;
        case (rating>90 && rating<=100) :
            document.getElementById('gradeText').innerHTML = `A`
            break;
        case (rating<0) :
            document.getElementById('gradeText').innerHTML = `Rating is between 0-100. Enter positive number.`
    }
}


/* Loop  */

//1 question

// summarize between 0-100.
function sumOfEven() {
    let sum = 0;
    for (let i=0; i<=100;i+=2)
        sum+=i;
    console.log(sum);
    document.getElementById('sumText').innerHTML = `${sum}`
};
//user input test
function sumOfEven2() {
    let l; 
    l = Number(document.getElementById('lowerValue').value);
    
    let h ;
    h = Number(document.getElementById('higherValue').value);
    let sum2=0;
    let i;
console.log(`checking if type of input is number:`,l, typeof l,h,typeof h);
    for (i=l;i<h;i+=2) {
        sum2+=i;
        console.log(sum2);
        document.getElementById('sumUserText').innerHTML = `${sum2}`
    };
console.log(`checking if type of output is number:`,i, typeof i,sum2,typeof sum2);
}

//short version 

    // let i=l;
    // let sum2=0;
    // if((i%2) == 0)
    //     i++;
    // while(i<h){
    //     sum2+=i;
    //     i+=2;};
    // document.getElementById('sumUserText').innerHTML = `${sum2}`;}



// 2nd question - Loop
//Check if is prime

function isPrime(numPrime) {

    console.log(`Function called`)
    numPrime=document.getElementById('primeInput').value;

    if (numPrime<2) return false;
    for (let i=2; i<numPrime; i++) {
        if (numPrime%i==0)
            return false;
            document.getElementById('primeReplyBox').innerHTML = `${numPrime} is prime number.`;
            console.log(numPrime, i, isPrime());
    };
    return true;
    document.getElementById('primeReplyBox').innerHTML = `${numPrime} is composite number.`
    console.log(numPrime, i, isPrime())
}; 


function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}



//-------------------------------------------------
//below all replies from classroom discussion. not done by me.
//-------------------------------------------------


 // 7th question
    //teacher version
    // const getIsPrime = number => {
    //     for (let i=2; i<tempNumber/2; i++) {
    //         if (number% i) {
    //             return false;
    //         }
    //     }
    //     return true;
    // };

// /* 8th */
// const getSquareRoot = number => {
//     let result = 1;

//     for (let i=1; i<number/2; i++) {
//         const difference  = i**2 - number;
//     }
//     if (difference <1 || difference > -1) {
//         return i;
//     } else {
//         result = i;
//     } 
//     return result;
// };


// // Circle 6 question

// const getMirrorNumber = number => {
//     let result = 0;
//     let tempNumber = number;
//     let remainder = 0;

//     while (tempNumber>0) {
//         remainder = tempNumber % 10;
//         result += remainder;
//         tempNumber = (tempnumber - remainder) / 10;
//         // if tempNumber will be 0  it returns false and second order will not called
//         tempNumber && (result*=10);
//     }
//     return result;
// };


// const getMinIndex = array => {
//     let minIndex = 0;
//     let

// const reverseArray = array => {
//     let result = [];

//     for ( let i= array.lenght-1; i>=0; i-- ) {
//         result[index] = array[i];
//         index++;
// // we can use result[result.length] = array[i] - 
//     }
//     return result;
// }

// continue to hw2

