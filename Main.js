function dateSubmission(){
  let date = document.getElementById('birthday').value;
  let monthStr = date.substr(5, 2);
  let dayStr = date.substr(8, 2); 
  let audioPlayer = null
  let message = ""

  const CapricornButton = document.getElementById('capricorn'); 

  let month = parseInt(monthStr);
  let day = parseInt(dayStr);

    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    astrological_sign = 'Capricorn'
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    astrological_sign = 'Sagittarius'
  } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
    astrological_sign = 'Scorpio'
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
    astrological_sign = 'Libra'
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    astrological_sign = 'Virgo'
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    astrological_sign = 'Leo'
  } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
    astrological_sign = 'Cancer'
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
    astrological_sign = 'Gemini'
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    astrological_sign = 'Taurus'
  } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    astrological_sign = 'Aries'
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    astrological_sign = 'Pisces'
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    astrological_sign = 'Aquarius'
  }

  let resultImg = document.getElementById('resultImg');
  if (astrological_sign == 'Capricorn'){
    resultImg.src = "./Photos/AJBrown.jpg" 
  } else if(astrological_sign == 'Sagittarius'){
    resultImg.src = "./Photos/TyreseMaxey.jpg"
  } else if(astrological_sign == 'Scorpio'){
    resultImg.src = "./Photos/NickCastellanos.jpg"  
    soundPlayer = new Audio("")
    message = "You're Horny"
  } else if(astrological_sign == 'Libra'){
    resultImg.src = "./Photos/MilesSanders.jpg"  
  } else if(astrological_sign == 'Virgo'){
    resultImg.src = "./Photos/MatisseThybulle.jpg"  
  } else if(astrological_sign == 'Leo'){
    resultImg.src = "./Photos/KyleShwarber.jpg"  
  } else if(astrological_sign == 'Cancer'){
    resultImg.src = "./Photos/JoelEmbiid.jpg"  
  } else if(astrological_sign == 'Gemini'){
    resultImg.src = "./Photos/JasonKelce.jpg"  
  } else if(astrological_sign == 'Taurus'){
    resultImg.src = "./Photos/JamesHarden.jpg"  
  } else if(astrological_sign == 'Aries'){
    resultImg.src = "./Photos/JalenHurts.jpg"  
  } else if(astrological_sign == 'Pisces'){
    resultImg.src = "./Photos/BryceHarper.jpg"  
  } else if(astrological_sign == 'Aquarius'){
    resultImg.src = "./Photos/BrandonMarsh.jpg"  
  }

  audioPlayer.play()

  console.log(astrological_sign);
  console.log(date);
}

let astrological_sign='sign';
let birthday = document.getElementById('submit');
birthday.addEventListener('click', () => {dateSubmission();});

const capricornButton = document.getElementById('Capricornus');
capricornButton.addEventListener('click', () => {
  astrological_sign = 'Capricorn'
  dateSubmission();
});
const SagittariusButton = document.getElementById('Saggitarius');
SagittariusButton.addEventListener('click', () => {
  astrological_sign = 'Sagittarius'
  dateSubmission();
});
const ScorpioButton = document.getElementById('Scorpio');
ScorpioButton.addEventListener('click', () => {
  astrological_sign = 'Scorpio'
  dateSubmission();
});
const LibraButton = document.getElementById('Libra');
LibraButton.addEventListener('click', () => {
  astrological_sign = 'Libra'
  dateSubmission();
});
const VirgoButton = document.getElementById('Virgo');
VirgoButton.addEventListener('click', () => {
  astrological_sign = 'Virgo'
  dateSubmission();
});
const LeoButton = document.getElementById('Leo');
LeoButton.addEventListener('click', () => {
  astrological_sign = 'Leo'
  dateSubmission();
});
const CancerButton = document.getElementById('Cancer');
CancerButton.addEventListener('click', () => {
  astrological_sign = 'Cancer'
  dateSubmission();
});
const GeminiButton = document.getElementById('Gemini');
GeminiButton.addEventListener('click', () => {
  astrological_sign = 'Gemini'
  dateSubmission();
});
const TaurusButton = document.getElementById('Taurus');
TaurusButton.addEventListener('click', () => {
  astrological_sign = 'Taurus'
  dateSubmission();
});
const AriesButton = document.getElementById('Aries');
AriesButton.addEventListener('click', () => {
  astrological_sign = 'Aries'
  dateSubmission();
});
const PiscesButton = document.getElementById('Pisces');
PiscesButton.addEventListener('click', () => {
  astrological_sign = 'Pisces'
  dateSubmission();
});
const AquariusButton = document.getElementById('Aquarius');
AquariusButton.addEventListener('click', () => {
  astrological_sign = 'Aquarius'
  dateSubmission();
});