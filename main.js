let player1 = document.querySelector('.inputplayer1');
let player1scorecard = document.getElementById('player1-scorecard');
let player1scorecard2 = document.getElementById('player1-scorecard-2');
let player1scorecardtitle = document.getElementById('player1-scorecard-title');
let player2 = document.querySelector('.inputplayer2');
let player2scorecard = document.getElementById('player2-scorecard');
let player2scorecard2 = document.getElementById('player2-scorecard-2');
let player2scorecardtitle = document.getElementById('player2-scorecard-title');
let player3 = document.querySelector('.inputplayer3');
let player3scorecard = document.getElementById('player3-scorecard');
let player3scorecard2 = document.getElementById('player3-scorecard-2');
let player3scorecardtitle = document.getElementById('player3-scorecard-title');
let player4 = document.querySelector('.inputplayer4');
let player4scorecard = document.getElementById('player4-scorecard');
let player4scorecard2 = document.getElementById('player4-scorecard-2');
let player4scorecardtitle = document.getElementById('player4-scorecard-title');
let saveplayernames = document.querySelector('.savenames');


saveplayernames.addEventListener('click', function() {
player1scorecard.innerHTML = player1.value;
player1scorecard2.innerHTML = player1.value;

player2scorecard.innerHTML = player2.value;
player2scorecard2.innerHTML = player2.value;

player3scorecard.innerHTML = player3.value;
player3scorecard2.innerHTML = player3.value;


player4scorecard.innerHTML = player4.value;
player4scorecard2.innerHTML = player4.value;

});



let courses = [
        {
          "id": 11819,
          "name": "Thanksgiving Point Golf Course - Lehi, UT",
          "url": "https://exquisite-pastelito-9d4dd1.netlify.app/golfapi/course11819.json",
          "yards1": "363",
          "yards2": "493",
          "yards3": "390",
          "yards4": "175",
          "yards5": "375",
          "yards6": "500",
          "yards7": "400",
          "yards8": "200",
          "yards9": "450",
          "yards10": "450",
          "yards11": "363",
          "yards12": "493",
          "yards13": "390",
          "yards14": "175",
          "yards15": "375",
          "yards16": "500",
          "yards17": "400",
          "yards18": "200",
          
          "par1": "4", 
          "par2": "5",
          "par3": "4",
          "par4": "3",
          "par5": "4",
          "par6": "5",
          "par7": "4",
          "par8": "3",
          "par9": "4",
          "par10": "4",
          "par11": "4", 
          "par12": "5",
          "par13": "4",
          "par14": "3",
          "par15": "4",
          "par16": "5",
          "par17": "4",
          "par18": "3",
        
        },
        {
          "id": 18300,
          "name": "Fox Hollow Golf Course - American Fork, UT",
          "url": "https://exquisite-pastelito-9d4dd1.netlify.app/golfapi/course18300.json",
          "yards1": "555",
          "yards2": "400",
          "yards3": "200",
          "yards4": "360",
          "yards5": "500",
          "yards6": "150",
          "yards7": "270",
          "yards8": "475",
          "yards9": "302",
          "yards10": "302",
          "yards11": "555",
          "yards12": "400",
          "yards13": "200",
          "yards14": "360",
          "yards15": "500",
          "yards16": "150",
          "yards17": "270",
          "yards18": "475",
          
          "par1": "6", 
          "par2": "1",
          "par3": "2",
          "par4": "6",
          "par5": "3",
          "par6": "2",
          "par7": "1",
          "par8": "1",
          "par9": "5",
          "par10": "5",
          "par11": "6", 
          "par12": "1",
          "par13": "2",
          "par14": "1",
          "par15": "6",
          "par16": "4",
          "par17": "2",
          "par18": "1",
          
        },
        {
          "id": 19002,
          "name": "Spanish Oaks Golf Course - Spanish Fork, UT",
          "url": "https://exquisite-pastelito-9d4dd1.netlify.app/golfapi/course19002.json",
          "yards1": "106",
          "yards2": "385",
          "yards3": "322",
          "yards4": "237",
          "yards5": "404",
          "yards6": "433",
          "yards7": "123",
          "yards8": "674",
          "yards9": "432",
          "yards10": "432",
          "yards11": "106",
          "yards12": "385",
          "yards13": "322",
          "yards14": "237",
          "yards15": "404",
          "yards16": "433",
          "yards17": "123",
          "yards18": "674",
          
          "par1": "6", 
          "par2": "5",
          "par3": "2",
          "par4": "4",
          "par5": "8",
          "par6": "5",
          "par7": "2",
          "par8": "5",
          "par9": "3",
          "par10": "3",
          "par11": "6", 
          "par12": "5",
          "par13": "2",
          "par14": "4",
          "par15": "8",
          "par16": "5",
          "par17": "2",
          "par18": "5",
          
        }
];

let courseSelect = document.getElementById('course-select');

let par = document.querySelectorAll('#Par');
let handicap = document.querySelectorAll('#Handicap');

//difficulty
let men = document.getElementById('option-difficulty-1')
let women = document.getElementById('option-difficulty-2')
let pro = document.getElementById('option-difficulty-3')
let Championship = document.getElementById('option-difficulty-4');
//yards
let option1 = document.querySelector('#option-1');
let option2 = document.querySelector('#option-2');
let option3 = document.querySelector('#option-3');
option1.innerHTML = courses[0].name;
option2.innerHTML = courses[1].name;
option3.innerHTML = courses[2].name;


option1.addEventListener('click', function() {

  let yardage1 = document.getElementById('Yardage1');
  yardage1.innerHTML = courses[0].yards1;
  let yardage2 = document.getElementById('Yardage2');
  yardage2.innerHTML = courses[0].yards2;
  let yardage3 = document.getElementById('Yardage3');
  yardage3.innerHTML = courses[0].yards3;
  let yardage4 = document.getElementById('Yardage4');
  yardage4.innerHTML = courses[0].yards4;
  let yardage5 = document.getElementById('Yardage5');
  yardage5.innerHTML = courses[0].yards5;
  let yardage6 = document.getElementById('Yardage6');
  yardage6.innerHTML = courses[0].yards6;
  let yardage7 = document.getElementById('Yardage7');
  yardage7.innerHTML = courses[0].yards7;
  let yardage8 = document.getElementById('Yardage8');
  yardage8.innerHTML = courses[0].yards8;
  let yardage9 = document.getElementById('Yardage9');
  yardage9.innerHTML = courses[0].yards9;
  let yardageout = document.getElementById('Yardageout');
  let sum = parseInt(courses[0].yards1) + parseInt(courses[0].yards2) + parseInt(courses[0].yards3) + parseInt(courses[0].yards4) + parseInt(courses[0].yards5) + parseInt(courses[0].yards6) + parseInt(courses[0].yards7) + parseInt(courses[0].yards8) + parseInt(courses[0].yards9);
  yardageout.innerHTML = sum;
 

  let yardage10 = document.getElementById('Yardage10');
  yardage10.innerHTML = courses[0].yards10;
  let yardage11 = document.getElementById('Yardage11');
  yardage11.innerHTML = courses[0].yards11;
  let yardage12 = document.getElementById('Yardage12');
  yardage12.innerHTML = courses[0].yards12;
  let yardage13 = document.getElementById('Yardage13');
  yardage13.innerHTML = courses[0].yards13;
  let yardage14 = document.getElementById('Yardage14');
  yardage14.innerHTML = courses[0].yards14;
  let yardage15 = document.getElementById('Yardage15');
  yardage15.innerHTML = courses[0].yards15;
  let yardage16 = document.getElementById('Yardage16');
  yardage16.innerHTML = courses[0].yards16;
  let yardage17 = document.getElementById('Yardage17');
  yardage17.innerHTML = courses[0].yards17;
  let yardage18 = document.getElementById('Yardage18');
  yardage18.innerHTML = courses[0].yards18;
  let yardagein = document.getElementById('Yardagein');
  let sum2 = parseInt(courses[0].yards10) + parseInt(courses[0].yards11) + parseInt(courses[0].yards12) + parseInt(courses[0].yards13) + parseInt(courses[0].yards14) + parseInt(courses[0].yards15) + parseInt(courses[0].yards16) + parseInt(courses[0].yards17) + parseInt(courses[0].yards18);
  yardagein.innerHTML = sum2;


let par1 = document.getElementById('Par1');
par1.innerHTML = courses[0].par1;
let par2 = document.getElementById('Par2');
par2.innerHTML = courses[0].par2;
let par3 = document.getElementById('Par3');
par3.innerHTML = courses[0].par3;
let par4 = document.getElementById('Par4');
par4.innerHTML = courses[0].par4;
let par5 = document.getElementById('Par5');
par5.innerHTML = courses[0].par5;
let par6 = document.getElementById('Par6');
par6.innerHTML = courses[0].par6;
let par7 = document.getElementById('Par7');
par7.innerHTML = courses[0].par7;
let par8 = document.getElementById('Par8');
par8.innerHTML = courses[0].par8;
let par9 = document.getElementById('Par9');
par9.innerHTML = courses[0].par9;
let parout = document.getElementById('Parout');
let parsum = parseInt(courses[0].par1) + parseInt(courses[0].par2) + parseInt(courses[0].par3) + parseInt(courses[0].par4) + parseInt(courses[0].par5) + parseInt(courses[0].par6) + parseInt(courses[0].par7) + parseInt(courses[0].par8) + parseInt(courses[0].par9);
parout.innerHTML = parsum;

let par10 = document.getElementById('Par10');
par10.innerHTML = courses[0].par10;
let par11 = document.getElementById('Par11');
par11.innerHTML = courses[0].par11;
let par12 = document.getElementById('Par12');
par12.innerHTML = courses[0].par12;
let par13 = document.getElementById('Par13');
par13.innerHTML = courses[0].par13;
let par14 = document.getElementById('Par14');
par14.innerHTML = courses[0].par14;
let par15 = document.getElementById('Par15');
par15.innerHTML = courses[0].par15;
let par16 = document.getElementById('Par16');
par16.innerHTML = courses[0].par16;
let par17 = document.getElementById('Par17');
par17.innerHTML = courses[0].par17;
let par18 = document.getElementById('Par18');
par18.innerHTML = courses[0].par18;
let parin = document.getElementById('Parin');
let parsum2 = parseInt(courses[0].par10) + parseInt(courses[0].par11) + parseInt(courses[0].par12) + parseInt(courses[0].par13) + parseInt(courses[0].par14) + parseInt(courses[0].par15) + parseInt(courses[0].par16) + parseInt(courses[0].par17) + parseInt(courses[0].par18);
parin.innerHTML = parsum2;


let handicap1 = document.getElementById('Handicap1');
handicap1.innerHTML = "11";
let handicap2 = document.getElementById('Handicap2');
handicap2.innerHTML = "7";
let handicap3 = document.getElementById('Handicap3');
handicap3.innerHTML = "13";
let handicap4 = document.getElementById('Handicap4');
handicap4.innerHTML = "17";
let handicap5 = document.getElementById('Handicap5');
handicap5.innerHTML = "15";
let handicap6 = document.getElementById('Handicap6');
handicap6.innerHTML = "5";
let handicap7 = document.getElementById('Handicap7');
handicap7.innerHTML = "1";
let handicap8 = document.getElementById('Handicap8');
handicap8.innerHTML = "5";
let handicap9 = document.getElementById('Handicap9');
handicap9.innerHTML = "1";
let handicapout = document.getElementById('Handicapout');
let handicapoutsum = parseInt(handicap1.innerHTML) + parseInt(handicap2.innerHTML) + parseInt(handicap3.innerHTML) + parseInt(handicap4.innerHTML) + parseInt(handicap5.innerHTML) + parseInt(handicap6.innerHTML) + parseInt(handicap7.innerHTML) + parseInt(handicap8.innerHTML) + parseInt(handicap9.innerHTML);
handicapout.innerHTML = handicapoutsum;

let handicap10 = document.getElementById('Handicap10');
handicap10.innerHTML = "13";
let handicap11 = document.getElementById('Handicap11');
handicap11.innerHTML = "7";
let handicap12 = document.getElementById('Handicap12');
handicap12.innerHTML = "6";
let handicap13 = document.getElementById('Handicap13');
handicap13.innerHTML = "12";
let handicap14 = document.getElementById('Handicap14');
handicap14.innerHTML = "4";
let handicap15 = document.getElementById('Handicap15');
handicap15.innerHTML = "5";
let handicap16 = document.getElementById('Handicap16');
handicap16.innerHTML = "5";
let handicap17 = document.getElementById('Handicap17');
handicap17.innerHTML = "2";
let handicap18 = document.getElementById('Handicap18');
handicap18.innerHTML = "3";
let handicapin = document.getElementById('HandicapIn');
let handicapinsum = parseInt(handicap10.innerHTML) + parseInt(handicap11.innerHTML) + parseInt(handicap12.innerHTML) + parseInt(handicap13.innerHTML) + parseInt(handicap14.innerHTML) + parseInt(handicap15.innerHTML) + parseInt(handicap16.innerHTML) + parseInt(handicap17.innerHTML) + parseInt(handicap18.innerHTML);
handicapin.innerHTML = handicapinsum;



});
option2.addEventListener('click', function() {
  let yardage1 = document.getElementById('Yardage1');
  yardage1.innerHTML = courses[1].yards1;
  let yardage2 = document.getElementById('Yardage2');
  yardage2.innerHTML = courses[1].yards2;
  let yardage3 = document.getElementById('Yardage3');
  yardage3.innerHTML = courses[1].yards3;
  let yardage4 = document.getElementById('Yardage4');
  yardage4.innerHTML = courses[1].yards4;
  let yardage5 = document.getElementById('Yardage5');
  yardage5.innerHTML = courses[1].yards5;
  let yardage6 = document.getElementById('Yardage6');
  yardage6.innerHTML = courses[1].yards6;
  let yardage7 = document.getElementById('Yardage7');
  yardage7.innerHTML = courses[1].yards7;
  let yardage8 = document.getElementById('Yardage8');
  yardage8.innerHTML = courses[1].yards8;
  let yardage9 = document.getElementById('Yardage9');
  yardage9.innerHTML = courses[1].yards9;
  let yardageout = document.getElementById('Yardageout');
  let sum = parseInt(courses[1].yards1) + parseInt(courses[1].yards2) + parseInt(courses[1].yards3) + parseInt(courses[1].yards4) + parseInt(courses[1].yards5) + parseInt(courses[1].yards6) + parseInt(courses[1].yards7) + parseInt(courses[1].yards8) + parseInt(courses[1].yards9);
  yardageout.innerHTML = sum;

  let yardage10 = document.getElementById('Yardage10');
  yardage10.innerHTML = courses[1].yards10;
  let yardage11 = document.getElementById('Yardage11');
  yardage11.innerHTML = courses[1].yards11;
  let yardage12 = document.getElementById('Yardage12');
  yardage12.innerHTML = courses[1].yards12;
  let yardage13 = document.getElementById('Yardage13');
  yardage13.innerHTML = courses[1].yards13;
  let yardage14 = document.getElementById('Yardage14');
  yardage14.innerHTML = courses[1].yards14;
  let yardage15 = document.getElementById('Yardage15');
  yardage15.innerHTML = courses[1].yards15;
  let yardage16 = document.getElementById('Yardage16');
  yardage16.innerHTML = courses[1].yards16;
  let yardage17 = document.getElementById('Yardage17');
  yardage17.innerHTML = courses[1].yards17;
  let yardage18 = document.getElementById('Yardage18');
  yardage18.innerHTML = courses[1].yards18;
  let yardagein = document.getElementById('Yardagein');
  let sum2 = parseInt(courses[1].yards10) + parseInt(courses[1].yards11) + parseInt(courses[1].yards12) + parseInt(courses[1].yards13) + parseInt(courses[1].yards14) + parseInt(courses[1].yards15) + parseInt(courses[1].yards16) + parseInt(courses[1].yards17) + parseInt(courses[1].yards18);
  yardagein.innerHTML = sum2;


    let par1 = document.getElementById('Par1');
    par1.innerHTML = courses[1].par1;
    let par2 = document.getElementById('Par2');
    par2.innerHTML = courses[1].par2;
    let par3 = document.getElementById('Par3');
    par3.innerHTML = courses[1].par3;
    let par4 = document.getElementById('Par4');
    par4.innerHTML = courses[1].par4;
    let par5 = document.getElementById('Par5');
    par5.innerHTML = courses[1].par5;
    let par6 = document.getElementById('Par6');
    par6.innerHTML = courses[1].par6;
    let par7 = document.getElementById('Par7');
    par7.innerHTML = courses[1].par7;
    let par8 = document.getElementById('Par8');
    par8.innerHTML = courses[1].par8;
    let par9 = document.getElementById('Par9');
    par9.innerHTML = courses[1].par9;
    let parout = document.getElementById('Parout');
    let parsum = parseInt(courses[1].par1) + parseInt(courses[1].par2) + parseInt(courses[1].par3) + parseInt(courses[1].par4) + parseInt(courses[1].par5) + parseInt(courses[1].par6) + parseInt(courses[1].par7) + parseInt(courses[1].par8) + parseInt(courses[1].par9);
    parout.innerHTML = parsum;


    let par10 = document.getElementById('Par10');
    par10.innerHTML = courses[1].par10;
    let par11 = document.getElementById('Par11');
    par11.innerHTML = courses[1].par11;
    let par12 = document.getElementById('Par12');
    par12.innerHTML = courses[1].par12;
    let par13 = document.getElementById('Par13');
    par13.innerHTML = courses[1].par13;
    let par14 = document.getElementById('Par14');
    par14.innerHTML = courses[1].par14;
    let par15 = document.getElementById('Par15');
    par15.innerHTML = courses[1].par15;
    let par16 = document.getElementById('Par16');
    par16.innerHTML = courses[1].par16;
    let par17 = document.getElementById('Par17');
    par17.innerHTML = courses[1].par17;
    let par18 = document.getElementById('Par18');
    par18.innerHTML = courses[1].par18;
    let parin = document.getElementById('Parin');
    let parsum2 = parseInt(courses[1].par10) + parseInt(courses[1].par11) + parseInt(courses[1].par12) + parseInt(courses[1].par13) + parseInt(courses[1].par14) + parseInt(courses[1].par15) + parseInt(courses[1].par16) + parseInt(courses[1].par17) + parseInt(courses[1].par18);
    parin.innerHTML = parsum2;


    let handicap1 = document.getElementById('Handicap1');
    handicap1.innerHTML = "5";
    let handicap2 = document.getElementById('Handicap2');
    handicap2.innerHTML = "8";
    let handicap3 = document.getElementById('Handicap3');
    handicap3.innerHTML = "3";
    let handicap4 = document.getElementById('Handicap4');
    handicap4.innerHTML = "20";
    let handicap5 = document.getElementById('Handicap5');
    handicap5.innerHTML = "10";
    let handicap6 = document.getElementById('Handicap6');
    handicap6.innerHTML = "3";
    let handicap7 = document.getElementById('Handicap7');
    handicap7.innerHTML = "5";
    let handicap8 = document.getElementById('Handicap8');
    handicap8.innerHTML = "7";
    let handicap9 = document.getElementById('Handicap9');
    handicap9.innerHTML = "9";
    let handicapout = document.getElementById('Handicapout');
    let handicapoutsum = parseInt(handicap1.innerHTML) + parseInt(handicap2.innerHTML) + parseInt(handicap3.innerHTML) + parseInt(handicap4.innerHTML) + parseInt(handicap5.innerHTML) + parseInt(handicap6.innerHTML) + parseInt(handicap7.innerHTML) + parseInt(handicap8.innerHTML) + parseInt(handicap9.innerHTML);
    handicapout.innerHTML = handicapoutsum;
    let handicap10 = document.getElementById('Handicap10');
    handicap10.innerHTML = "11";
    let handicap11 = document.getElementById('Handicap11');
    handicap11.innerHTML = "7";
    let handicap12 = document.getElementById('Handicap12');
    handicap12.innerHTML = "13";
    let handicap13 = document.getElementById('Handicap13');
    handicap13.innerHTML = "17";
    let handicap14 = document.getElementById('Handicap14');
    handicap14.innerHTML = "15";
    let handicap15 = document.getElementById('Handicap15');
    handicap15.innerHTML = "5";
    let handicap16 = document.getElementById('Handicap16');
    handicap16.innerHTML = "1";
    let handicap17 = document.getElementById('Handicap17');
    handicap17.innerHTML = "5";
    let handicap18 = document.getElementById('Handicap18');
    handicap18.innerHTML = "1";
    let handicapin = document.getElementById('Handicapin');
    let handicapinsum = parseInt(handicap10.innerHTML) + parseInt(handicap11.innerHTML) + parseInt(handicap12.innerHTML) + parseInt(handicap13.innerHTML) + parseInt(handicap14.innerHTML) + parseInt(handicap15.innerHTML) + parseInt(handicap16.innerHTML) + parseInt(handicap17.innerHTML) + parseInt(handicap18.innerHTML);
    handicapin.innerHTML = handicapinsum;
    
});
option3.addEventListener('click', function() {
  let yardage1 = document.getElementById('Yardage1');
  yardage1.innerHTML = courses[2].yards1;
  let yardage2 = document.getElementById('Yardage2');
  yardage2.innerHTML = courses[2].yards2;
  let yardage3 = document.getElementById('Yardage3');
  yardage3.innerHTML = courses[2].yards3;
  let yardage4 = document.getElementById('Yardage4');
  yardage4.innerHTML = courses[2].yards4;
  let yardage5 = document.getElementById('Yardage5');
  yardage5.innerHTML = courses[2].yards5;
  let yardage6 = document.getElementById('Yardage6');
  yardage6.innerHTML = courses[2].yards6;
  let yardage7 = document.getElementById('Yardage7');
  yardage7.innerHTML = courses[2].yards7;
  let yardage8 = document.getElementById('Yardage8');
  yardage8.innerHTML = courses[2].yards8;
  let yardage9 = document.getElementById('Yardage9');
  yardage9.innerHTML = courses[2].yards9;
  let yardageout = document.getElementById('Yardageout');
  let sum = parseInt(courses[2].yards1) + parseInt(courses[2].yards2) + parseInt(courses[2].yards3) + parseInt(courses[2].yards4) + parseInt(courses[2].yards5) + parseInt(courses[2].yards6) + parseInt(courses[2].yards7) + parseInt(courses[2].yards8) + parseInt(courses[2].yards9);
  yardageout.innerHTML = sum;

  let yardage10 = document.getElementById('Yardage10');
  yardage10.innerHTML = courses[2].yards10;
  let yardage11 = document.getElementById('Yardage11');
  yardage11.innerHTML = courses[2].yards11;
  let yardage12 = document.getElementById('Yardage12');
  yardage12.innerHTML = courses[2].yards12;
  let yardage13 = document.getElementById('Yardage13');
  yardage13.innerHTML = courses[2].yards13;
  let yardage14 = document.getElementById('Yardage14');
  yardage14.innerHTML = courses[2].yards14;
  let yardage15 = document.getElementById('Yardage15');
  yardage15.innerHTML = courses[2].yards15;
  let yardage16 = document.getElementById('Yardage16');
  yardage16.innerHTML = courses[2].yards16;
  let yardage17 = document.getElementById('Yardage17');
  yardage17.innerHTML = courses[2].yards17;
  let yardage18 = document.getElementById('Yardage18');
  yardage18.innerHTML = courses[2].yards18;
  let yardagein = document.getElementById('Yardagein');
  let sum2 = parseInt(courses[2].yards10) + parseInt(courses[2].yards11) + parseInt(courses[2].yards12) + parseInt(courses[2].yards13) + parseInt(courses[2].yards14) + parseInt(courses[2].yards15) + parseInt(courses[2].yards16) + parseInt(courses[2].yards17) + parseInt(courses[2].yards18);
  yardagein.innerHTML = sum2;



  let par1 = document.getElementById('Par1');
par1.innerHTML = courses[2].par1;
let par2 = document.getElementById('Par2');
par2.innerHTML = courses[2].par2;
let par3 = document.getElementById('Par3');
par3.innerHTML = courses[2].par3;
let par4 = document.getElementById('Par4');
par4.innerHTML = courses[2].par4;
let par5 = document.getElementById('Par5');
par5.innerHTML = courses[2].par5;
let par6 = document.getElementById('Par6');
par6.innerHTML = courses[2].par6;
let par7 = document.getElementById('Par7');
par7.innerHTML = courses[2].par7;
let par8 = document.getElementById('Par8');
par8.innerHTML = courses[2].par8;
let par9 = document.getElementById('Par9');
par9.innerHTML = courses[2].par9;
let parout = document.getElementById('Parout');
let parsum = parseInt(courses[2].par1) + parseInt(courses[2].par2) + parseInt(courses[2].par3) + parseInt(courses[2].par4) + parseInt(courses[2].par5) + parseInt(courses[2].par6) + parseInt(courses[2].par7) + parseInt(courses[2].par8) + parseInt(courses[2].par9);
parout.innerHTML = parsum;

let par10 = document.getElementById('Par10');
par10.innerHTML = courses[2].par10;
let par11 = document.getElementById('Par11');
par11.innerHTML = courses[2].par11;
let par12 = document.getElementById('Par12');
par12.innerHTML = courses[2].par12;
let par13 = document.getElementById('Par13');
par13.innerHTML = courses[2].par13;
let par14 = document.getElementById('Par14');
par14.innerHTML = courses[2].par14;
let par15 = document.getElementById('Par15');
par15.innerHTML = courses[2].par15;
let par16 = document.getElementById('Par16');
par16.innerHTML = courses[2].par16;
let par17 = document.getElementById('Par17');
par17.innerHTML = courses[2].par17;
let par18 = document.getElementById('Par18');
par18.innerHTML = courses[2].par18;
let parin = document.getElementById('Parin');
let parsum2 = parseInt(courses[2].par10) + parseInt(courses[2].par11) + parseInt(courses[2].par12) + parseInt(courses[2].par13) + parseInt(courses[2].par14) + parseInt(courses[2].par15) + parseInt(courses[2].par16) + parseInt(courses[2].par17) + parseInt(courses[2].par18);
parin.innerHTML = parsum2;




let handicap1 = document.querySelectorAll('#Handicap1');
handicap1.innerHTML = "11";
let handicap2 = document.querySelectorAll('#Handicap2');
handicap2.innerHTML = "7";
let handicap3 = document.querySelectorAll('#Handicap3');
handicap3.innerHTML = "13";
let handicap4 = document.querySelectorAll('#Handicap4');
handicap4.innerHTML = "17";
let handicap5 = document.querySelectorAll('#Handicap5');
handicap5.innerHTML = "15";
let handicap6 = document.querySelectorAll('#Handicap6');
handicap6.innerHTML = "5";
let handicap7 = document.querySelectorAll('#Handicap7');
handicap7.innerHTML = "1";
let handicap8 = document.querySelectorAll('#Handicap8');
handicap8.innerHTML = "5";
let handicap9 = document.querySelectorAll('#Handicap9');
handicap9.innerHTML = "1";
let handicapout = document.querySelectorAll('#Handicapout');
let handicapoutsum = parseInt(handicap1.innerHTML) + parseInt(handicap2.innerHTML) + parseInt(handicap3.innerHTML) + parseInt(handicap4.innerHTML) + parseInt(handicap5.innerHTML) + parseInt(handicap6.innerHTML) + parseInt(handicap7.innerHTML) + parseInt(handicap8.innerHTML) + parseInt(handicap9.innerHTML);
handicapout.innerHTML = handicapoutsum;
let handicap10 = document.querySelectorAll('#Handicap10');
handicap10.innerHTML = "11";
let handicap11 = document.querySelectorAll('#Handicap11');
handicap11.innerHTML = "4";
let handicap12 = document.querySelectorAll('#Handicap12');
handicap12.innerHTML = "3";
let handicap13 = document.querySelectorAll('#Handicap13');
handicap13.innerHTML = "7";
let handicap14 = document.querySelectorAll('#Handicap14');
handicap14.innerHTML = "9";
let handicap15 = document.querySelectorAll('#Handicap15');
handicap15.innerHTML = "3";
let handicap16 = document.querySelectorAll('#Handicap16');
handicap16.innerHTML = "7";
let handicap17 = document.querySelectorAll('#Handicap17');
handicap17.innerHTML = "1";
let handicap18 = document.querySelectorAll('#Handicap18');
handicap18.innerHTML = "3";
let handicapin = document.querySelectorAll('#Handicapin');
let handicapinsum = parseInt(handicap10.innerHTML) + parseInt(handicap11.innerHTML) + parseInt(handicap12.innerHTML) + parseInt(handicap13.innerHTML) + parseInt(handicap14.innerHTML) + parseInt(handicap15.innerHTML) + parseInt(handicap16.innerHTML) + parseInt(handicap17.innerHTML) + parseInt(handicap18.innerHTML);
handicapin.innerHTML = handicapinsum;

});


// bind event listener to hole inputs
for(let holeNumber = 1; holeNumber <= 18; holeNumber++) {
  for(let playerNumber = 1; playerNumber <= 4; playerNumber++) {
    const holeScoreElement = document.getElementById(`p${playerNumber}-input${holeNumber}`);

    holeScoreElement.addEventListener('change', function(event) {
      // update out score
      const outScore = getOutScore(playerNumber);
      // update in score
      const inScore = getInScore(playerNumber);
      // update total score
      const totalScore = getTotalScore(playerNumber);
      
      const outScoreElement = document.getElementById(`p${playerNumber}-inputout`);
      const inScoreElement = document.getElementById(`p${playerNumber}-inputIn`);
      const totalElement1 = document.getElementById(`p${playerNumber}-total`);
      const totalElement2 = document.getElementById(`p${playerNumber}-total2`);

      outScoreElement.value = outScore;
      inScoreElement.value = inScore;
      totalElement1.innerHTML = totalScore;
      totalElement2.innerHTML = totalScore;
    })

  }
}

function getInScore(playerNumber) {

  let inScore = 0;
  for(let holeNumber = 1; holeNumber <= 9; holeNumber++) {
    const holeScoreElement = document.getElementById(`p${playerNumber}-input${holeNumber}`);
    const holeScore = parseInt(holeScoreElement.value) || 0;

    inScore += holeScore;
  }

  return inScore
}

function getOutScore(playerNumber) {

  let outScore = 0;
  for(let holeNumber = 9; holeNumber <= 18; holeNumber++) {
    const holeScoreElement = document.getElementById(`p${playerNumber}-input${holeNumber}`);
    const holeScore = parseInt(holeScoreElement.value) || 0;

    outScore += holeScore;
  }

  return outScore
}

function getTotalScore(playerNumber) {
  return getInScore(playerNumber) + getOutScore(playerNumber);
}

