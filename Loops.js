const twoDArray = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
];
//for (let i = whatever; i < goes this far; i++ we counting up)
for (let i = 0; i < twoDArray.length; i++) {
   for(let j = 0; j < twoDArray[i].length; j++) {
     console.log(twoDArray[i][j]);
   }
}

// for objects

 let apple = {
   'color': 'red',
   'type': 'Pink Lady',
   'size': 'medium',

//preferred way of referencing a property you know the name of
//console.log(apple.type)

 };
 for (property in apple) {
     console.log(property + ' : ' + apple[property]);
 }

//while loop

let i = 0

while (i < 5) {
  console.log(i);
  i++;
}

let isSomethingTrue = true;

while (isSomethingTrue) {
  //logic here
  console.log('in true false loop');
  isSomethingTrue = false;


//do while loop

let f = 0;

do {
   console.log(f);
   f++;
 }while (f < 5)

 console.log('after do while loop');

 let j = 5;

 while (j < 5) {
   console.log(j);
   j++;
 }
 console.log('after while loop');
 
