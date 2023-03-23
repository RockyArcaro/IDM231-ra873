function dateSubmission() {

  //Code that pulls birthdate from form and makes them integer values

  let date = document.getElementById('birthday').value;
  let monthStr = date.substr(5, 2);
  let dayStr = date.substr(8, 2); 
  let yearStr = date.substr(0, 4);
  const CapricornButton = document.getElementById('capricorn'); 

  let month = parseInt(monthStr);
  let day = parseInt(dayStr);

  let todaysDate = Date();
  console.log(todaysDate);
  console.log(yearStr);

  if(todaysDate < date){
    
  }

//Code that determines astrological sign based off of form input

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
  var text = document.getElementById("resultText");
}

//Code that displays outcome images, sounds, and text based on astrological sign value
function result(){
  if (astrological_sign == 'Capricorn'){
    resultImg.src = "./Photos/AJBrown.jpg" 
    var audio = new Audio('Sounds/Sound1.mp3');
    audio.play();
    text.innerText = "You are AJ Brown! What is the most valuable resource? For Capricorn, the answer is clear: Time. Capricorn is climbing the mountain straight to the top and knows that patience, perseverance, and dedication is the only way to scale. The last earth sign of the zodiac, Capricorn, is represented by the sea-goat, a mythological creature with the body of a goat and the tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms.rks"
    text.scrollIntoView();
  } else if(astrological_sign == 'Sagittarius'){
    resultImg.src = "./Photos/TyreseMaxey.jpg"
    var audio = new Audio('Sounds/Sound2.mp3');
    audio.play();
    text.innerText = "You are Tyrese Maxey! Oh, the places Sagittarius goes! But... actually. This fire sign knows no bounds. Represented by the archer, Sagittarians are always on a quest for knowledge. The last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures. "
    text.scrollIntoView();
  } else if(astrological_sign == 'Scorpio'){
    resultImg.src = "./Photos/NickCastellanos.jpg"  
    var audio = new Audio('Sounds/Sound3.mp3');
    audio.play();
    text.innerText = "You are Nick Castellanos! Elusive and mysterious, Scorpio is one of the most misunderstood signs of the zodiac. Scorpio is a water sign that uses emotional energy as fuel, cultivating powerful wisdom through both the physical and unseen realms. In fact, Scorpio derives its extraordinary courage from its psychic abilities, which is what makes this sign one of the most complicated, dynamic signs of the zodiac."
    text.scrollIntoView();
  } else if(astrological_sign == 'Libra'){
    resultImg.src = "./Photos/MilesSanders.jpg"  
    var audio = new Audio('Sounds/Sound4.mp3');
    audio.play();
    text.innerText = "You are Miles Sanders! Balance, harmony, and justice define Libra energy. As a cardinal air sign, Libra is represented by the scales (interestingly, the only inanimate object of the zodiac), an association that reflects Libra's fixation on establishing equilibrium. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life - especially when it comes to matters of the heart. "
    text.scrollIntoView();
  } else if(astrological_sign == 'Virgo'){
    resultImg.src = "./Photos/MatisseThybulle.jpg" 
    var audio = new Audio('Sounds/Sound5.mp3');
    audio.play();
    text.innerText = "You are Matisse Thybulle! You know the expression, if you want something done, give it to a busy person? Well, that definitely is the Virgo anthem. Virgos are logical, practical, and systematic in their approach to life. Virgo is an earth sign historically represented by the goddess of wheat and agriculture, an association that speaks to Virgo's deep-rooted presence in the material world. This earth sign is a perfectionist at heart and isn't afraid to improve skills through diligent and consistent practice."
    text.scrollIntoView();
  } else if(astrological_sign == 'Leo'){
    resultImg.src = "./Photos/KyleShwarber.jpg" 
    var audio = new Audio('Sounds/Sound6.mp3');
    audio.play();
    text.innerText = "You are Kyle Shwarber! Roll out the red carpet because Leo has arrived. Passionate, loyal, and infamously dramatic, Leo is represented by the lion and these spirited fire signs are the kings and queens of the celestial jungle. They're delighted to embrace their royal status: Vivacious, theatrical, and fiery, Leos love to bask in the spotlight and celebrate... well, themselves."
    text.scrollIntoView();
  } else if(astrological_sign == 'Cancer'){
    resultImg.src = "./Photos/JoelEmbiid.jpg" 
    var audio = new Audio('Sounds/Sound7.mp3');
    audio.play();
    text.innerText = "You are Joel Embiid! Represented by the crab, Cancer seamlessly weaves between the sea and shore representing Cancer's ability to exist in both emotional and material realms. Cancers are highly intuitive and their psychic abilities manifest in tangible spaces. But-just like the hard-shelled crustaceans-this water sign is willing to do whatever it takes to protect itself emotionally. In order to get to know this sign, you're going to need to establish trust!"
    text.scrollIntoView();
  } else if(astrological_sign == 'Gemini'){
    resultImg.src = "./Photos/JasonKelce.jpg" 
    var audio = new Audio('Sounds/Sound8.mp3');
    audio.play();
    text.innerText = "You are Jason Kelce! Have you ever been so busy with football, press, and being a singer, that you wished you could clone yourself just to get everything done? That's the Gemini experience in a nutshell. Spontaneous, playful, and adorably erratic, Gemini is driven by its insatiable curiosity. Appropriately symbolized by the celestial twins, this air sign was interested in so many pursuits that it had to double itself."
    text.scrollIntoView();
  } else if(astrological_sign == 'Taurus'){
    resultImg.src = "./Photos/JamesHarden.jpg" 
    var audio = new Audio('Sounds/Sound9.mp3');
    audio.play();
    text.innerText = "You are James Harden! What sign is more likely to take a six-hour bath, followed by a luxurious Swedish massage and decadent dessert spread? Why Taurus, of course! Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors."
    text.scrollIntoView();
  } else if(astrological_sign == 'Aries'){
    resultImg.src = "./Photos/JalenHurts.jpg"
    var audio = new Audio('Sounds/Sound10.mp3');
    audio.play();
    text.innerText = "You are Jalen Hurts! Aries loves to be number one (just like him). Naturally, this dynamic fire sign is no stranger to competition. Bold and ambitious, Aries dives headfirst into even the most challenging situations-and they'll make sure they always come out on top!"
    text.scrollIntoView();
  } else if(astrological_sign == 'Pisces'){
    resultImg.src = "./Photos/BryceHarper.jpg" 
    var audio = new Audio('Sounds/Sound11.mp3');
    audio.play();
    text.innerText = "You are Bryce Harper! If you looked up the word psychic in the dictionary, there would definitely be a picture of Pisces next to it. Pisces is the most intuitive, sensitive, and empathetic sign of the entire zodiac - and that's because it's the last of the last. As the final sign, Pisces has absorbed every lesson - the joys and the pain, the hopes and the fears - learned by all of the other signs. It's symbolized by two fish swimming in opposite directions, representing the constant division of Pisces' attention between fantasy and reality."
    text.scrollIntoView();
  } else if(astrological_sign == 'Aquarius'){
    resultImg.src = "./Photos/BrandonMarsh.jpg" 
    var audio = new Audio('Sounds/Sound12.mp3');
    audio.play();
    text.innerText = "You are Brandon Marsh! Despite the aqua in its name, Aquarius is actually the last air sign of the zodiac. Innovative, progressive, and shamelessly revolutionary, Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. Accordingly, Aquarius is the most humanitarian astrological sign. At the end of the day, Aquarius is dedicated to making the world a better place, Especially by making it to the World Series."
    text.scrollIntoView();
  }
  console.log(astrological_sign);
  console.log(date);
}
let astrological_sign='sign';


//Code that allows the user to click on their sign image and sets astrological sign value to that allowing them to see the message

let birthday = document.getElementById('submit');
birthday.addEventListener('click', () => {dateSubmission();});

const capricornButton = document.getElementById('Capricornus');
capricornButton.addEventListener('click', () => {  astrological_sign = 'Capricorn';  result(); });

const SagittariusButton = document.getElementById('Saggitarius');
SagittariusButton.addEventListener('click', () => {  astrological_sign = 'Sagittarius';  result(); });

const ScorpioButton = document.getElementById('Scorpio');
ScorpioButton.addEventListener('click', () => {  astrological_sign = 'Scorpio';  result(); });

const LibraButton = document.getElementById('Libra');
LibraButton.addEventListener('click', () => {  astrological_sign = 'Libra';  result(); });

const VirgoButton = document.getElementById('Virgo');
VirgoButton.addEventListener('click', () => { astrological_sign = 'Virgo'; result(); });

const LeoButton = document.getElementById('Leo');
LeoButton.addEventListener('click', () => {  astrological_sign = 'Leo';   result(); });

const CancerButton = document.getElementById('Cancer');
CancerButton.addEventListener('click', () => {  astrological_sign = 'Cancer';  result();});

const GeminiButton = document.getElementById('Gemini');
GeminiButton.addEventListener('click', () => {  astrological_sign = 'Gemini';   result(); });

const TaurusButton = document.getElementById('Taurus');
TaurusButton.addEventListener('click', () => {  astrological_sign = 'Taurus';  dateSubmission(); });

const AriesButton = document.getElementById('Aries');
AriesButton.addEventListener('click', () => {  astrological_sign = 'Aries';  dateSubmission(); });

const PiscesButton = document.getElementById('Pisces');
PiscesButton.addEventListener('click', () => {  astrological_sign = 'Pisces';  dateSubmission(); });

const AquariusButton = document.getElementById('Aquarius');
AquariusButton.addEventListener('click', () => {  astrological_sign = 'Aquarius';  dateSubmission(); });

