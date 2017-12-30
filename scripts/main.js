var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/me.jpg') {
      myImage.setAttribute ('src','images/kartik.jpg');
    } else {
      myImage.setAttribute ('src','images/me.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hi '+ myName + ' ! Kartik is cool';

}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hi '+ storedName + ' ! Kartik is cool';
}
myButton.onclick = function() {
  setUserName();
}