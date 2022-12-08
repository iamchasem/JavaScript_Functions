console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
  for (let i = 1; 1 <= Math.abs(count); i++){
    if (i % 2 != 0) {
      console.log(i * Math.sign(count));
    }
  }
}

printOdds(10); 
printOdds(100); 

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(name, age) {
  let oldEnoughMsg = `Congrats ${name}! You can drive!`;
  let tooYoungMsg = `Sorry ${name}, you need to wait ${
    16 - age
  } year(s) until you can drive.`;
}

if (age < 16) {
  console.log(tooYoungMsg);
} else {
  console.log(oldEnoughMsg);
}

checkAge("Tony", 12);
checkAge ("Linda", 16);
checkAge ("Bob", 21);


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function checkQuadrant(x, y) {
  switch (true) {
    case x > 0 && y > 0:
    return "Quadrant 1";
    case x < 0 && y > 0:
    return "Quadrant 2";
    case x < 0 && y < 0:
    return "Quadrant 3";
    case x > 0 && y < 0:
    return "Quadrant 4";
    case x == 0 && y != 0:
    return "X Axis";
    case x != 0 && y == 0:
    return "Y axis";
    default:
    return; "Origin";
  }
}

console.log(checkQuadrant(11, 1));
console.log(checkQuadrant(-11, 1));
console.log(checkQuadrant(-1, -11));
console.log(checkQuadrant(1, -11));
console.log(checkQuadrant(0, -11));
console.log(checkQuadrant(11, 0));
console.log(checkQuadrant(0, 0));

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function isValidTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

function checkTriangle(a, b, c) {
  let isValid = isValidTriangle(a, b, c);
  if (isValid) {
    if (a == b && b == c) {
      return `Equilateral`;
    } else if (a == b || b == c || a == c) {
      return `Isosceles`;
    } else {
      return `Scalene`
    }
  } else {
    return `Not valid Triangle`;
  }
}

console.log(checkTriangle(2, 3, 4));
console.log(checkTriangle(2, 2, 2));
console.log(checkTriangle(1, 2, 2));
console.log(checkTriangle(1, 1, 2));


// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function dataUsageFeedback(planLimit, day, usage) {
  let periodLength = 30;
  let currentAvg = usage / day;
  let projectedAvg = planLimit / periodLength;
  let remainingDays = periodLength - day;
  let projectedUsage = remainingDays * currentAvg;
  let statusMsg;

  console.log(`${day} day(s) used, ${remainingDays} day(s) remaining`);
  console.log(`Average projected used: ${planLimit / periodLength} GB/day`);

if (currentAvg > projectedAvg) {
  statusMsg = "Exceeding!";
} else if (currentAvg < projectedAvg) {
  statusMsg = "Under";
} else {
  statusMsg = "At";
}

console.log(`You are ${statusMsg} your average daily use (${currentAvg} GB/day),
continuing this high usage, you'll end up using ${planLimit - (usage + projectedUsage)} GB from your data limit!`);

}


dataUsageFeedback(50, 15, 25);
