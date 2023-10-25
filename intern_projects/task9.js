// Generate a random race number
let raceNumber = Math.floor(Math.random() * 1000);

// Variable to indicate early registration
let registeredEarly = true;

// Variable for runner's age
let runnerAge = 18;

// Check if runner is an adult and registered early
if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

// Check race time based on age and registration

if (runnerAge > 18 && registeredEarly) {
  console.log(`You will race at 9:30 am. Your race number is ${raceNumber}.`);
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(`You will race at 11:00 am. Your race number is ${raceNumber}.`);
} else if (runnerAge < 18) {
  console.log(`You will race at 12:30 pm. Your race number is ${raceNumber}.`);
} else {
  console.log(`Please see the registration desk.`);
}
