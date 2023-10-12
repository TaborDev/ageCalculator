const btnEl = document.querySelector('.js-btn');
const birthdayEl = document.querySelector('.js-birthday');
const resultEl = document.querySelector('.js-result');

function calculateAge() {
    const birthdayValue = birthdayEl.value;
    if (birthdayValue === ''){
        alert('Please enter your birthday');
    } else{
        const age = getAge(birthdayValue);
        resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}

//This code down here is written if we need to write using procedural 'tranditional' if statment
/*
resultEl.innerText = `Your age is ${age} `;
if (age > 1) {
    resultEl.innerText += "years old";
} else {
    resultEl.innerText += "year old";
}
*/ 

function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (
        month < 0 ||
        (month === 0 && currentDate.getDate() < birthdayDate.getDate())
      ) {
        age--;
      }
    
      return age;
}

/*
Certainly, let's break down the `getAge` function step by step:

1. `const currentDate = new Date();`: This line creates a `Date` object called `currentDate` to store the current date and time.

2. `const birthdayDate = new Date(birthdayValue);`: This line creates another `Date` object called `birthdayDate`, using the `birthdayValue` parameter, which is expected to be a date string in a recognized format (e.g., "YYYY-MM-DD"). It converts the provided date string into a `Date` object.

3. `let age = currentDate.getFullYear() - birthdayDate.getFullYear();`: It calculates the age by subtracting the birth year from the current year, storing the result in the `age` variable. This gives a rough estimate of the age.

4. `const month = currentDate.getMonth() - birthdayDate.getMonth();`: It calculates the difference in months between the current date's month and the birth date's month, storing the result in the `month` variable.

5. The `if` statement is used to adjust the age calculation based on the month and day of the birthdate. If the current month is earlier than the birth month, or if they are the same month but the current day is earlier than the birth day, the age is decremented by 1 to account for the fact that the person hasn't had their birthday yet this year.

6. Finally, the `age` variable is returned as the calculated age, considering the current date, birthdate, and the adjustment for the month and day.

The function effectively calculates a person's age based on their birthdate and the current date, taking into account whether they have already celebrated their birthday in the current year.

*/

btnEl.addEventListener("click", calculateAge);