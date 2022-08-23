// // The Charactrer Letters
// let my_Char = 'abcdefghijklmnopqrstuvwxyz';

// // Convert the Character To Array
// let letters = Array.from(my_Char);

// // Selected the Container Letters
// let container_Letters = document.querySelector('.letters');

// // Loop In All Characters
// letters.forEach((letter) => {

//   // Create Span For Letters
//   let span =      document.createElement('span'),
      
//       // Create Text Node (Letters)
//       span_Text = document.createTextNode(letter);

//   // Add Class To Span
//   span.className = 'letter-box';
  
//   // Append Letters In Span
//   span.appendChild(span_Text);

//   // Append Span To Container Letters
//   container_Letters.appendChild(span);

// });

// // This Is Object Of Words + category

// const words = {
//   programming: ['php', 'python', 'javascript', 'go', 'scala', 'csharp', 'r', 'mysql', 'fortran'],
//   movies: ['prestige', 'matrex', 'titanic', 'lord of rings', 'john waek', 'memento', 'coco', 'up', 'parasite'],
//   people: ['alexander', 'ramsise', 'ronaldo', 'messi', 'xavi', 'ramos', 'zidane', 'maradona', 'van persi', 'rooben', 'roony', 'beckhame', 'owen', 'salah', 'benzema', 'modric', 'ronaldinho', 'marcelo', 'roberto carlose', 'totti'],
//   countries: ['egypt', 'syria', 'yemen', 'bahrain', 'qatar', 'england', 'italia', 'spean', 'portogal', 'brazel', 'germanny', 'turkish', 'china', 'jaban', 'island', 'france', 'emarate'],
//   clubs_Egypt: ['elzamalek', 'alahly', 'alesmaeely', 'almesry', 'aletehad', 'pyramids', 'elgona', 'ennpi'],
//   clubs_England: ['arsinal', 'man city', 'man united', 'chelsea', 'leverpool', 'tottenham'],
//   clubs_Spain: ['real madrid', 'barcelona', 'valencia', 'atletico madrid', 'sevellia'],
//   clubs_Italian: ['juventus', 'millan', 'inter', 'atlanta', 'roma'],
//   clubs_Germanny: ['bayern munich', ],
//   clubs_Frencia: ['paris']
// };

// // Selected Object In Variables
// let all_Key = Object.keys(words);

// // Get Random Number
// let random_Number = Math.floor(Math.random() * all_Key.length);

// // Get Random Key
// let random_Key = all_Key[random_Number];

// // Get Random Name
// let random_Name = words[random_Key];

// // Get Random Index From Name
// let random_Index = Math.floor(Math.random() * random_Name.length);

// // Get Random Value From All Keys
// let random_Value = random_Name[random_Index];

// // Set the Key Name From Category
// let category_Span = document.querySelector('.category span').innerHTML = random_Key;

// console.log(random_Value);

// // Selected The Letter Guess
// let letters_Guess = document.querySelector('.letters-guess');

// // console.log(letters_Guess);

// // Get Random Value Convert To Array
// let array_Value = Array.from(random_Value);

// // Loop In Random Value
// array_Value.forEach((letterGuess) => {

//   let my_Spans = document.createElement('span');
  
//   if (letterGuess === ' ') {

//     my_Spans.className = 'space';
    
//   };
//   letters_Guess.appendChild(my_Spans);
// });

// // Selected The Letters Guess
// let my_Spans = document.querySelectorAll('.letters-guess span');

// // Selected The Hangman Draw
// let hangman_Draw = document.querySelector('.hangman-draw');

// // The Game Number
// let game_Numbers = 0;


// // Selected the Letter Box
// document.addEventListener('click', (e) => {

//   let the_Status = false;
  
//   // If E Clicked = Class Letter-box
//   if (e.target.className === 'letter-box') {
    
//     // Add Class To Letter Box
//     e.target.classList.add('clicked');

//     let letter_Box = e.target.innerHTML.toLowerCase();
    
//     let the_Word = Array.from(random_Value.toLowerCase());

//     the_Word.forEach((word, index) => {

//       if (word === letter_Box) {
//         the_Status = true;

//         my_Spans.forEach((letter, i) => {

//           if (i === index) {

//             letter.innerHTML = letter_Box;

//           }

//         })

//       }

//     })

//     if (the_Status !== true) {

//       game_Numbers++

//       hangman_Draw.classList.add(`wrong-${game_Numbers}`);

//       document.querySelector('#feil').play();

//       if (game_Numbers === 8) {

//         container_Letters.classList.add('none');

//         endGame();

//       }

//     } else {

//       e.target.classList.add('color');

//       document.querySelector('#success').play();

//     }

//   }

// })

// function endGame() {

//   let div = document.createElement('div'),
//       span1 = document.createElement('span'),
//       span2 = document.createElement('span'),
//       but = document.createElement('button'),
//       gameOver = document.createTextNode('Game Over'),
//       the_Word = document.createTextNode(`${random_Value}`),
//       tryAgain = document.createTextNode('Try Again');

//   div.className = 'div';
//   span1.className = 'the-end';
//   span2.className = 'word-div';
//   but.className = 'but';

//   div.appendChild(span1);
//   div.appendChild(span2);
//   div.appendChild(but);
//   span1.appendChild(gameOver);
//   span2.appendChild(the_Word);
//   but.appendChild(tryAgain);

//   document.body.appendChild(div);

//   but.onclick = function() {
//     window.location.reload();
//   }


// }



// ==============================================

let myChar = 'abcdefghijklmnopqrstuvwxyz';

let myArray = Array.from(myChar);

let myContainer = document.querySelector('.letters');

myArray.forEach((letter) => {

  let span = document.createElement('span');

  let span_Text = document.createTextNode(letter);

  span.className = 'letter-box';

  span.appendChild(span_Text);

  myContainer.appendChild(span);

});

// This Is Object Of Words + category

const words = {
  programming: ['php', 'python', 'javascript', 'go', 'scala', 'csharp', 'r', 'mysql', 'fortran'],
  movies: ['prestige', 'matrex', 'titanic', 'lord of rings', 'john waek', 'memento', 'coco', 'up', 'parasite'],
  people: ['alexander', 'ramsise', 'ronaldo', 'messi', 'xavi', 'ramos', 'zidane', 'maradona', 'van persi', 'rooben', 'roony', 'beckhame', 'owen', 'salah', 'benzema', 'modric', 'ronaldinho', 'marcelo', 'roberto carlose', 'totti'],
  countries: ['egypt', 'syria', 'yemen', 'bahrain', 'qatar', 'england', 'italia', 'spean', 'portogal', 'brazel', 'germanny', 'turkish', 'china', 'jaban', 'island', 'france', 'emarate'],
  clubs_Egypt: ['elzamalek', 'alahly', 'alesmaeely', 'almesry', 'aletehad', 'pyramids', 'elgona', 'ennpi'],
  clubs_England: ['arsinal', 'man city', 'man united', 'chelsea', 'leverpool', 'tottenham'],
  clubs_Spain: ['real madrid', 'barcelona', 'valencia', 'atletico madrid', 'sevellia'],
  clubs_Italian: ['juventus', 'millan', 'inter', 'atlanta', 'roma'],
  clubs_Germanny: ['bayern munich', ],
  clubs_Frencia: ['paris']
};

let all_Key = Object.keys(words);

let ranNum = Math.floor(Math.random() * all_Key.length);

let ranKey = all_Key[ranNum];

let ranName = words[ranKey];

let ranNum1 = Math.floor(Math.random() * ranName.length);

let ranVal = ranName[ranNum1];

let myCategory = document.querySelector('.category span').innerHTML = ranKey;

console.log(ranVal);
console.log(ranKey)

let letter_Guess = document.querySelector('.letters-guess');

let myArray2 = Array.from(ranVal);

myArray2.forEach((letterSpace) => {

  let spanSpace = document.createElement('span');

  if (letterSpace === ' ') {

    spanSpace.className = 'space';

  };

  letter_Guess.appendChild(spanSpace);

});


let letter_Guess2 = document.querySelectorAll('.letters-guess span');

let hangman = document.querySelector('.hangman-draw');

let game_Numbers = 0;

document.addEventListener('click', (e) => {

  let the_Status = false;

  if (e.target.className === 'letter-box') {

    e.target.classList.add('clicked');

    let letter_Box = e.target.innerHTML.toLowerCase();

    let myArray3 = Array.from(myArray2);

    myArray3.forEach((word, index) => {

      if (word === letter_Box) {

        the_Status = true;

        letter_Guess2.forEach((letter, i) => {

          if (index === i) {

            letter.innerHTML = letter_Box;

          }
        })
      }
    })

    if (the_Status !== true) {

      game_Numbers++;
      
      hangman.classList.add(`wrong-${game_Numbers}`);

      document.querySelector('#feil').play();

      if (game_Numbers === 8) {

        endGame();

        myContainer.classList.add('none');

        document.querySelector('#endgame').play();

      }

    } else {

      document.querySelector('#success').play();

      e.target.classList.add('color');

    }

  }
})


function endGame() {

  let div = document.createElement('div'),
      span1 = document.createElement('span'),
      span2 = document.createElement('span'),
      but = document.createElement('button'),
      gameOver = document.createTextNode('Game Over'),
      the_Word = document.createTextNode(`${ranVal}`),
      tryAgain = document.createTextNode('Try Again');

  div.className = 'div';
  span1.className = 'the-end';
  span2.className = 'word-div';
  but.className = 'but';

  div.appendChild(span1);
  div.appendChild(span2);
  div.appendChild(but);
  span1.appendChild(gameOver);
  span2.appendChild(the_Word);
  but.appendChild(tryAgain);

  document.body.appendChild(div);

  but.onclick = function() {
    window.location.reload();
  }


}