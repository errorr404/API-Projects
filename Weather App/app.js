// init weather object
const weather = new Weather('Boston','MA');
// get weather on DOM load
document.addEventListener('DOMContentLoaded',getWeather);

// weather.changeLoaction('Miami','FL');
function getWeather(){
weather.getWeather()
.then(results =>{
  console.log(results);
})
.catch(err =>console.log(err));
}