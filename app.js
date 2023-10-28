// // // Import required libraries
// const express = require('express');
// const compromise = require('compromise');
// const app = express();
// const port = 3000;
// 
// app.use(express.json());
// 
// // Initial provided text
// let providedText = "Wash your face with warm water boiled with 'ath kaha'.Grind 'aralu', 'bulu', 'nelli','rathhadun' with little bit of lime juice in ale water and apply on the blisters.Take 2 tablespoons of 'thipaladiya Quathaya' after breakfast, lunch and dinner.";
// let updatedText = providedText;
// 
// // NLP processing logic
// function processText(userInput) {
//   // Check if the user is allergic to lime
//   const isAllergicToLime = userInput.toLowerCase().includes('lime');
// 
//   if (isAllergicToLime) {
//     // Define words to replace for allergies
//    const allergyWords = ['lime', 'lemon', 'lime juice', 'dehi'];
// 
//     // Replace words related to allergies
//     allergyWords.forEach((word) => {
//       updatedText = updatedText.replace(new RegExp(word, 'gi'), 'veniwelgeta');
//     });
//   }
// }
// 
// // POST route for updating text
// app.post('/updateText', (req, res) => {
//   const userInput = req.body.userInput;
//   processText(userInput);
//   res.json({ updatedText });
// });
// 
// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


// Import required libraries
// const express = require('express');
// const compromise = require('compromise');
// const app = express();
// const port = 3000;
// 
// app.use(express.json());
// 
// // NLP processing logic
// // function processText(providedText, userInput) {
// //   // Clone the provided text so that we can make changes
// //   let updatedText = providedText;
// // 
// //   // Check if the user is allergic to lime
// //  // Check if the user is allergic to lime, lemon, or dehi
// // const isAllergicToLime = userInput.toLowerCase().includes('lime') ||
// // userInput.toLowerCase().includes('lemon') ||
// // userInput.toLowerCase().includes('dehi');
// // 
// //   if (isAllergicToLime) {
// //     // Define words to replace for allergies
// //     const allergyWords = ['lime', 'lemon', 'lime juice', 'dehi'];
// // 
// //     // Replace words related to allergies
// //     allergyWords.forEach((word) => {
// //       const regex = new RegExp(`\\b${word}\\b`, 'gi'); // Match whole words
// //       updatedText = updatedText.replace(regex, 'veniwelgeta');
// //     });
// //   }
// // 
// //   return updatedText;
// // }
// // NLP processing logic
// function processText(providedText, userInput) {
//     // Clone the provided text so that we can make changes
//     let updatedText = providedText;
//   
//     // Check if the user is allergic to lime, lemon, or dehi
//     const isAllergicToLime = userInput.toLowerCase().includes('lime') ||
//       userInput.toLowerCase().includes('lemon') ||
//       userInput.toLowerCase().includes('dehi');
//   
//     if (isAllergicToLime) {
//       // Define words to replace for allergies
//       const allergyWords = ['lime', 'lemon', 'lime juice', 'dehi'];
//   
//       // Replace words related to allergies
//       allergyWords.forEach((word) => {
//         const regex = new RegExp(`\\b${word}\\b`, 'gi'); // Match whole words
//         updatedText = updatedText.replace(regex, 'veniwelgeta');
//       });
//     }
//   
//     // Check if user's input includes "phlegm" and if provided text includes specified words
//     if (userInput.toLowerCase().includes('phlegm')) {
//       const diseaseWords = ['pawatta', 'aralu', 'Pavatta'];
//       diseaseWords.forEach((word) => {
//         const regex = new RegExp(`\\b${word}\\b`, 'gi'); // Match whole words
//         updatedText = updatedText.replace(regex, 'weniwelgeta');
//       });
//     }
//   
//     return updatedText;
//   }
//   
// // POST route for updating text
// app.post('/updateText', (req, res) => {
//   const providedText = "Wash your face with warm water boiled with 'ath kaha'.Grind 'kuburu eta mada', 'udupiyaliya', 'ath kaha' with little bit of lime juice in ale water and apply on the blisters. Take 10 gram each of 'aralu', 'bulu', 'nelli', 'sanniyanam', 'walmadata','snehe' leveas and put it in 8 cups of water and boil it till 1 cup. Then drink half of a cup it twice a day. Drink 1/2 cup of 'kashaya' with 5 grams of solid salt in the morning.";
//   const userInput = req.body.userInput;
// 
//   // Process the text
//   const updatedText = processText(providedText, userInput);
// 
//   res.json({ updatedText });
// });
// 
// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


const express = require('express');
const compromise = require('compromise');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(express.json());
app.use(cors());
// NLP processing logic
function processText(providedText, userInput) {
  // Clone the provided text so that we can make changes
  let updatedText = providedText;

  // Check if the user is allergic to lime, lemon, or dehi
  const isAllergicToLime = userInput.toLowerCase().includes('lime') ||
    userInput.toLowerCase().includes('lemon') ||
    userInput.toLowerCase().includes('dehi');

  if (isAllergicToLime) {
    // Define words to replace for allergies
    const allergyWords = ['lime', 'lemon', 'lime juice', 'dehi'];

    // Replace words related to allergies
    allergyWords.forEach((word) => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi'); // Match whole words
      updatedText = updatedText.replace(regex, 'Weniwelgeta');
    });
  }

  // Check if user's input includes "phlegm" and if provided text includes specified words
  if (userInput.toLowerCase().includes('phlegm')|| userInput.toLowerCase().includes('sputa') || userInput.toLowerCase().includes('rheum'))  {
    const diseaseWords = ['pawatta', 'aralu', 'Pavatta'];
    diseaseWords.forEach((word) => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi'); // Match whole words
      updatedText = updatedText.replace(regex, 'weniwelgeta');
    });
  }

  return updatedText;
}

app.post('/updateText', (req, res) => {
  const providedText = req.body.providedText; 
  const userInput = req.body.userInput;

  
  const updatedText = processText(providedText, userInput);

  res.json({ updatedText });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
