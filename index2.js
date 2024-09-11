const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// fonction de verrification si une annee est biceptille 

// demander a l'utulisateur d'entrer une annee  recuperration de lannee 2016 par exemple 

rl.question('Veuller entrer une annee : ', (year) => {
    // appel de la fonction isLeapYear avec la valeur de l'annee
    isLeapYear(parseInt(year));
    rl.close();

    // fonction isLeapYear : verifie si une annee est bissextile
  function isLeapYear(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          console.log(`${year} is a leap year.`);
        } else {
          console.log(`${year} is not a leap year.`);
        }
      } else {
        console.log(`${year} is a leap year.`);
      }
    } else {
      console.log(`${year} is not a leap year.`);
    }
  }

  });


// La fonction isLeapYear prend une annee en parametre et retourne true si elle est bissextile, sinon elle retourne false. Cette fonction utilise le modulo (%) pour vérifier si une annee est divisible par 4, si c'est le cas, elle vérifie si elle est divisible par 100 et si c'est le cas, elle vérifie si elle est divisible par 400. Si tout est vrai, l'annee est bissextile, sinon elle ne l'est pas.
