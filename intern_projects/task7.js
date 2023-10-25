document.getElementById("convertButton").addEventListener("click", function () {
  let myAge = parseInt(document.getElementById("ageInput").value);

  let earlyYears = 2;
  earlyYears *= 10.5;

  let laterYears = (myAge - 2) * 4;

  let myAgeInDogYears = earlyYears + laterYears;

  let myName = "Basavarajeshwari".toLowerCase();

  let result = `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`;

  document.getElementById("result").textContent = result;
});
