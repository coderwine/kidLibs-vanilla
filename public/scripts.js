let baseURL = 'https://dictionaryapi.com/api/v3/references/collegiate/json/'
const view = document.getElementById('viewPort');
const label = document.querySelector('label');
const input = document.querySelector('input');
const nxtBtn = document.querySelector('button');
const section = document.querySelector('section');

let libArr = [];
let petName;
let teamName;
let villain;
let libPos = 0;
let madQuestions = [
    'What is your name?',  //NAME
    'Name a city.',  //CITY
    'If you had one power, what would it be?', // YOUR-POWER 
    'What kind of pet do you have?', //PET-TYPE
    'What is your pet’s name?', //PET-NAME
    `If your pet had one power, what would it be?`, //PET-POWER 
    `If you and pet were a team, what would that team name be?`, //TEAM-NAME 
    `Who or what would be your arch nemesis?`,  //VILLAIN 
    `What doe they want?`,  //VILLAIN-GOALS 
    `What is your nemesis' weakness?`  //VILLAIN-WEAKNESS 
];
console.log(madQuestions.length);

let date = new Date();
let mm = date.getMonth()+1
let ddyy = `${date.getDate()}, ${date.getFullYear()}`;

let displayDate;

mm === 1 ? displayDate = `January ${ddyy}` : 
mm === 2 ? displayDate = `February ${ddyy}` :
mm === 3 ? displayDate = `March ${ddyy}` :
mm === 4 ? displayDate = `April ${ddyy}` :
mm === 5 ? displayDate = `May ${ddyy}` :
mm === 6 ? displayDate = `June ${ddyy}` :
mm === 7 ? displayDate = `July ${ddyy}` :
mm === 8 ? displayDate = `August ${ddyy}` :
mm === 9 ? displayDate = `September ${ddyy}` :
mm === 10 ? displayDate = `October ${ddyy}` :
mm === 11 ? displayDate = `November ${ddyy}` :
mm === 12 ? displayDate = `December ${ddyy}` :
null;

console.log(displayDate);

label.textContent = madQuestions[libPos] 

nxtBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let answer = input.value;
    libArr.push(answer)
    // console.log(libArr);
    libArr.length === 5 ? petName = answer : libArr.length === 7 ? teamName = answer : null;
    nextQuestion()
    fetchDef(answer);
});

function nextQuestion() {
    array = libArr;
    // console.log(array.length, res);
    // array.length === 5 ? petName = res : array.length === 7 ? teamName = res : null;

    input.value = null;
    console.log('Array: ', array)

    array.length === 9 ? nxtBtn.textContent = 'Finished' : null;

    libPos++
    // console.log('Lib Pos', libPos);
    label.textContent = madQuestions[libPos];
    array.length === 10 ? displayResults(array) :
    label.textContent = madQuestions[array.length];
    
}

function displayResults(array) {
    label.textContent = 'YOUR STORY'
    // console.log('displayResults: ', array);

    let user = array[0];
    let city = array[1];
    let power = array[2];
    let petType = array[3];
    let petName = array[4];
    let petPower = array[5];
    let teamName = array[6];
    let villain = array[7];
    let villainWants = array[8];
    let villanWeak = array[9];

    let art = document.createElement('article');

    art.innerText =
        `${displayDate} will soon come to be known as the day ${teamName} came against their greatest foe to date.  The arch villain, ${villain}! 
        In the city of ${city}, ${villain} desired ${villainWants} and vowed to obtain it at all costs.  There would be no stopping ${villain}, not even ${user} or their pesky side-kick ${petName}!
        But, unknown to ${villain}, with ${petName}’s innate ${petType} abilities with ${petPower} and ${user}’s skills in ${power}, the powerful ${villain} had no chance!
        ${teamName} understood their foe and what ${villain}’s ${villanWeak} truly was.  So, ${teamName} went against the evil ${villain}, using their weakness of ${villanWeak} against them and saved the day!`;

    section.appendChild(art);

}

async function fetchDef(word) {
    let url = `${baseURL+word}?key=${dictKey}`
    let res = await fetch(url);
    let data = await res.json();
    console.log(data); 

}


// fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/carrot?key=${dictKey}`)
// .then(res => {
//     // console.log(res);
//     return res.json();
// })
// .then(json => console.log(json))
// .catch(err => console.log(err))