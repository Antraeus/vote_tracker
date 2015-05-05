/*
 _______ _    _ _    _ _   _ _____  ______ _____  _____   ____  __  __ ______
|__   __| |  | | |  | | \ | |  __ \|  ____|  __ \|  __ \ / __ \|  \/  |  ____|
   | |  | |__| | |  | |  \| | |  | | |__  | |__) | |  | | |  | | \  / | |__
   | |  |  __  | |  | | . ` | |  | |  __| |  _  /| |  | | |  | | |\/| |  __|
   | |  | |  | | |__| | |\  | |__| | |____| | \ \| |__| | |__| | |  | | |____
   |_|  |_|  |_|\____/|_| \_|_____/|______|_|  \_\_____/ \____/|_|  |_|______|
                                                                              */

(function(){
// Setting up the contestants for battle!
var dossierArray =
  [
  {
  alias: 'Snape',
  url: 'images/01.jpg'
  },
  {
  alias: 'Severance',
  url: 'images/02.jpg'
  },
  {
  alias: 'Fang',
  url: 'images/03.jpg'
  },
  {
  alias: 'Tazmina',
  url: 'images/04.jpg'
  },
  {
  alias: 'ShadowFang',
  url: 'images/05.jpg'
  },
  {
  alias: 'Scaramouch',
  url: 'images/06.jpg'
  },
  {
  alias: 'Brownie',
  url: 'images/07.jpg'
  },
  {
  alias: 'MrMagoo',
  url: 'images/08.jpg'
  },
  {
  alias: 'Bleuberry',
  url: 'images/09.jpg'
  },
  {
  alias: 'ClippedClaw',
  url: 'images/10.jpg'
  },
  {
  alias: 'Stripe',
  url: 'images/11.jpg'
  },
  {
  alias: 'Isis',
  url: 'images/12.jpg'
  },
  {
  alias: 'Jinxsta',
  url: 'images/13.jpg'
  },
  {
  alias: 'Marvin',
  url: 'images/14.jpg'
  }];

var ThunderDomeEntrant = function(takedowns, dossier) {
  this.takedowns = this.takedowns;
  this.dossier = dossier;
}
/* Tracking Object: */
var TrackerSleuth = function (){
  this.arenaLeft = document.getElementById('arena-left');
  this.arenaRight = document.getElementById('arena-right');
}
/* Random selector prototype method
      Array.prototype.selectContestant = function(dossierArray){
      return this[Math.floor(Math.random() * this.length)]
      };
*/
var selectContestant = function(dossierArray){
  //random selection and return value for each contender
  return dossierArray[Math.floor(Math.random() * dossierArray.length)];

var leftContender = dossierArray.selectContestant();
var elLeftContender = getElementById('left-contender');
    elLeftContender.removeAttribute("src, ''");
                  // .url is a property of objects in the array
    elLeftContender.setAttribute('src', this.leftContender.url);


var rightContender = dossierArray.selectContestant();

var trackerSleuth = new TrackerSleuth();
var elRightContender = document.getElementById('right-contender');
    elRightContender.removeAttribute("src, ''");
                    // .url is a property of objects in the array
    elRightContender.setAttribute('src', this.rightContender.url);
  }
  console.log(dossierArray.length);
})();
//
//
// (function(){
// // Setting up the contestants for battle!
// var dossierArray =
//   [
//   {
//   alias: 'Snape',
//   url: 'images/01.jpg'
//   },
//   {
//   alias: 'Severance',
//   url: 'images/02.jpg'
//   },
//   {
//   alias: 'Fang',
//   url: 'images/03.jpg'
//   },
//   {
//   alias: 'Tazmina',
//   url: 'images/04.jpg'
//   },
//   {
//   alias: 'ShadowFang',
//   url: 'images/05.jpg'
//   },
//   {
//   alias: 'Scaramouch',
//   url: 'images/06.jpg'
//   },
//   {
//   alias: 'Brownie',
//   url: 'images/07.jpg'
//   },
//   {
//   alias: 'MrMagoo',
//   url: 'images/08.jpg'
//   },
//   {
//   alias: 'Bleuberry',
//   url: 'images/09.jpg'
//   },
//   {
//   alias: 'ClippedClaw',
//   url: 'images/10.jpg'
//   },
//   {
//   alias: 'Stripe',
//   url: 'images/11.jpg'
//   },
//   {
//   alias: 'Isis',
//   url: 'images/12.jpg'
//   },
//   {
//   alias: 'Jinxsta',
//   url: 'images/13.jpg'
//   },
//   {
//   alias: 'Marvin',
//   url: 'images/14.jpg'
//   }];
//
// var ThunderDomeEntrant = function(takedowns, dossier){
//   var takedowns = this.takedowns;
//   this.dossier = dossierArray;
// console.log(dossierArray);
// }
// /* Tracking Object: */
// var trackerSleuth = function (arenaLeft, arenaRight){
//   this.arenaLeft = document.getElementById('arena-left');
//   this.arenaRight = document.getElementById('arena-right');
//   var selectContestant = this.selectContestant;
// }
// /* Random selector prototype method */
// Array.prototype.selectContestant = function(dossierArray){
//   return this[Math.floor(Math.random() * this.length)]
// var leftContender = dossierArray.selectContestant();
// var elLeftContender = document.getElementById('left-contender')
//   elLeftContender.removeAttribute("src, ''");
//   elLeftContender.setAttribute('src', this.leftContender);
//
// var rightContender = dossierArray.selectContestant();
// var elRightContender = document.getElementById('right-contender');
//   elRightContender.removeAttribute("src, ''");
//   elRightContender.setAttribute('src', this.rightContender);
//   }
//   console.log(dossierArray.length);
// })();
/* Dummy Proof Copy

(function(){
// Setting up the contestants for battle!
var dossierArray =
  [
  {
  alias: 'Snape',
  url: 'images/01.jpg'
  },
  {
  alias: 'Severance',
  url: 'images/02.jpg'
  },
  {
  alias: 'Fang',
  url: 'images/03.jpg'
  },
  {
  alias: 'Tazmina',
  url: 'images/04.jpg'
  },
  {
  alias: 'ShadowFang',
  url: 'images/05.jpg'
  },
  {
  alias: 'Scaramouch',
  url: 'images/06.jpg'
  },
  {
  alias: 'Brownie',
  url: 'images/07.jpg'
  },
  {
  alias: 'MrMagoo',
  url: 'images/08.jpg'
  },
  {
  alias: 'Bleuberry',
  url: 'images/09.jpg'
  },
  {
  alias: 'ClippedClaw',
  url: 'images/10.jpg'
  },
  {
  alias: 'Stripe',
  url: 'images/11.jpg'
  },
  {
  alias: 'Isis',
  url: 'images/12.jpg'
  },
  {
  alias: 'Jinxsta',
  url: 'images/13.jpg'
  },
  {
  alias: 'Marvin',
  url: 'images/14.jpg'
  }];

var ThunderDomeEntrant = function(takedowns, dossier){
  var takedowns = this.takedowns;
  this.dossier = dossierArray;
console.log(dossierArray);
}
/* Tracking Object: *//*
var trackerSleuth = function (arenaLeft, arenaRight){
  this.arenaLeft = document.getElementById('arena-left');
  this.arenaRight = document.getElementById('arena-right');
  var selectContestant = this.selectContestant;
}
/* Random selector prototype method *//*
Array.prototype.selectContestant = function(dossierArray){
  return this[Math.floor(Math.random() * this.length)]
var leftContender = dossierArray.selectContestant();
var elLeftContender = document.getElementById('left-contender')
  elLeftContender.removeAttribute("src, ''");
  elLeftContender.setAttribute('src', this.leftContender);

var rightContender = dossierArray.selectContestant();
var elRightContender = document.getElementById('right-contender');
  elRightContender.removeAttribute("src, ''");
  elRightContender.setAttribute('src', this.rightContender);
  }
  console.log(dossierArray.length);
})();
*/
