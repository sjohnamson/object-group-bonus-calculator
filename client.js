// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.



// This function will calculate 1 employee's bonus!
//
for (let employee of employees) {
  console.log(employee)
  calculateIndividualEmployeeBonus(employee);
}
  
function calculateIndividualEmployeeBonus( employee ) {  
    console.log('We are in calculate');

    // Creating new object

    // Create bonusPercentage variable
    let bonusPercentage = 1;
    // Conditionals to make bonusPercentage
    if (employee.reviewRating == 3) {
      bonusPercentage += .04;
    } else if (employee.reviewRating == 4) {
      bonusPercentage += .06;
    } else if (employee.reviewRating == 5) {
      bonusPercentage += .10;
    }

  console.log(bonusPercentage);

  if (employee.employeeNumber.length == 4) {
    bonusPercentage += .05;
  }
  
  console.log(bonusPercentage);

  if (employee.annualSalary > 65000) {
    bonusPercentage -= .01;
  }

  console.log(bonusPercentage);

  if (bonusPercentage > 1.13) {
    bonusPercentage = 1.13;
  }

  if (bonusPercentage < 1) {
    bonusPercentage = 1;
  }

  console.log(bonusPercentage);


  // return new object with bonus results

}


// let bonusInfo = calculateIndividualEmploymentBonus(employee);
// console.log(bonusInfo)

