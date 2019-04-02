function randomNumberFromRange(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
var randomNumber = randomNumberFromRange(60, 120);
var d = new Date();
var countdown=Cookies.get('countdown');
var finalDate='';
if (typeof countdown === "undefined"){
    finalDate = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes()+randomNumber, d.getSeconds()).toUTCString();    
    Cookies.set('countdown', { datetime: finalDate});
}else{
    countdown=$.parseJSON(countdown);
    finalDate = countdown.datetime;    
}

const timer = new TimezZ("#countdown", {
  date: finalDate,
  text: {
    hours: " hours",
    minutes: " minutes",
    seconds: " seconds"
  },
  canContinue: false,
  template: '<span class="datenum">NUMBER</span><span class="datetxt">LETTER</span>',
  finished() {
    randomNumber = randomNumberFromRange(30, 70);
    finalDate = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes()+randomNumber, d.getSeconds()).toUTCString();    
    Cookies.set('countdown', { datetime: finalDate});      
    location.reload();
  }
});