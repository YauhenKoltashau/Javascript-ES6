const user = {
    johnDoe: { 
      age: 34,
      email: 'johnDoe@freeCodeCamp.com'
    }
  };
//

  const { johnDoe: { age, email }} = user;
//

  const { johnDoe: { age: userAge, email: userEmail }} = user;
//

  const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
     
  const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;
  const { yesterday: { low: lowYesterday, high: highYesterday } } = LOCAL_FORECAST;
  const { tomorrow: {low: lowTomorrow, high: highTomorrow } } = LOCAL_FORECAST