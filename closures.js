
// const sum = () =>{
//     var a = 32;
//     return ()=>{
//         var b = 30
//         return a+b
//     }

// }

// var sumOf = sum()()

// console.log(sumOf);

// function specialMultiply(a,b){
  
//     if((a && b) || (a === 0 && b) || (a && b===0) || (a ===0 && b===0)){
//         return a*b
//     }

//     return function sumUp(b2){
//         return a*b2
//     }
// }


// var result = specialMultiply(4)(3)

// console.log(result);


function guessingGame(amount){
    var answer = Math.ceil(Math.random() * 10)
    var guesses = 0
    var comlpeted = false
    
    
  


    return function inner(guess){

      
        if(!comlpeted){
            guesses++
            
            if(guesses === amount){
                comlpeted = true
            }
            if(guess === answer){
                return "You got it!"
            }   
           else if(guess > answer){
                
                return  "Your guess is too high!"
            } else if(guess < answer){
                 return "Your guess is too low!"
            }
    
            
            
        }
    
        
        return  "You are all done playing!"
        }
    

}

var result = guessingGame(3)
// console.log(result);



// ---- this global--


// console.log(this);

const setGlobal =()=>{
   this.number = 34 
}
setGlobal()
// console.log(number);

// *Explicit Binding*
// call

function sayHi(){
    return 'Hi ' + this.firstName

}

var matt = {
    firstName: 'Matt'
}

// console.log(sayHi.call(matt));
// console.log(sayHi.apply(matt));
// console.log(sayHi.bind(matt));





var john = {
    firstName: 'Kevin',
    sayHi: function (){
        setTimeout(function (){
              console.log('Hi ' + this.firstName);
        },1000);
    }
}
// john.sayHi()
var john = {
    firstName: 'Kevin',
    sayHi: function (){
        setTimeout(function (){
              console.log('Hi ' + this.firstName);
        }.bind(this),1000);
    }
}

// john.sayHi()


function sumEvenArguments(){
    
    var data = [].slice.call(arguments)

  return data.reduce((acc, next)=>{

    if(next%2 === 0){
        return acc+=next
    }
         return acc
    },0)

   
    
}

var result = sumEvenArguments(1,2,3,4)
console.log(result);

function arrayFrom(arrayLikeObject){
    

}
function arrayFrom(arrayLikeObject){
    return [].slice.call(arrayLikeObject)
}


function invokeMax(fn, num){
    var max = 0;
    return function(){
        if(max >= num) return "Maxed Out!";
        max++;
        return fn.apply(this,arguments);
    }
}