
/*Ticket Pricing: Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:

Children (age <= 12): $10
Teenagers (age 13-17): $15
Adults (age >= 18): $20 */

// Creation of  readin line fo user age 
const readline = require('readline');

// Créer une interface pour lire les entrées du terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Demande de l'âge à l'utilisateur

rl.question('Please enter your age: ', (age) => {

  // Conversion de l'âge en nombre entier
  let ageInt = parseInt(age);

  // Vérification de l'âge
  if (isNaN(ageInt) || ageInt < 0) {
    console.log('Invalid age. Please enter a positive integer.');
    rl.close();
  } else {
    // Détermination du prix du ticket selon l'âge
    let ticketPrice;
    if (ageInt <= 12) {
      ticketPrice = 10;
    } else if (ageInt >= 18) {
      ticketPrice = 20;
    } else {
      ticketPrice = 15;
    }

    // Affichage du prix du ticket
    console.log(`The ticket price for an age ${age} is $${ticketPrice}.`);
    rl.close();
  }

  // Fermeture de la console pour arrêter le programme
});


