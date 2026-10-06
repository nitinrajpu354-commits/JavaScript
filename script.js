async function getWeather(city) {
  try {
    let apikey = "API_KEY";

    let raw = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`,
    );

    if(!raw.ok) {
      let errorData = await raw.json();
      throw new Error(errorData.message);
    }

    let real = await raw.json();

    console.log(real);
    
  } catch (err) {
    console.log(err.message);
  }
}

getWeather("Delhi");
