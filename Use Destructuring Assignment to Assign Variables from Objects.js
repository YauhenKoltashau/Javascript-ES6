const user = { name: 'John Doe', age: 34 };

const { name: userName, age: userAge } = user;

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
      
  const {today: highToday, tomorrow: highTomorrow, yesterday: highYesterday} = HIGH_TEMPERATURES
  console.log(highToday);
  console.log(highTomorrow);
  console.log(highYesterday);