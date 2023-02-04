const date = {
  days: {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  },
  months: {
    1: 0,
    2: 3,
    3: 3,
    4: 6,
    5: 1,
    6: 4,
    7: 6,
    8: 2,
    9: 5,
    10: 0,
    11: 3,
    12: 5,
  },
  years: {
    0: [1599, 1999],
    2: [1499, 1899, 2299],
    4: [1799, 2199],
    6: [1699, 2099],
  },
};

// input day like this "day/month/year"
function getDayOfBirth(param) {
  let dateInfo = param.split("/");
  let day = Number(dateInfo[0]);
  let month = Number(dateInfo[1]);
  let monthChar = Number(date.months[month]);
  let year = dateInfo[2];
  let lastTwoNumbers = Number(year.slice(2, 4));
  let endCentury = Number(year.slice(0, 2) + 99);
  let yearCharKeys = Object.keys(date.years);
  let yearCharIndex;
  let yearChar;
  let values = Object.values(date.years);
  for (let i = 0; i < values.length; i++) {
    const element = values[i];
    if (element.includes(endCentury)) {
      yearCharIndex = values.indexOf(element);
    }
  }
  yearChar = Number(yearCharKeys[yearCharIndex]);
  let dayIndex =
    (Number(day) +
      monthChar +
      yearChar +
      lastTwoNumbers +
      Math.floor(lastTwoNumbers / 4)) %
    7;
  let message = "Your Day Of Birth Is : " + date.days[dayIndex];
  if (year % 4 === 0 && month === 2) {
    dayIndex -= 1;
  }
  if (year > 2299) {
    message = "Please Enter Year Less Than 2299";
  }
  if (isNaN(monthChar)) {
    message = "Please Enter A Valid Month";
  }
  console.log(message);
}

getDayOfBirth("05/12/1974");
