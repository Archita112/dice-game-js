//first we need to create a random number and we have to make sure
//that the range of the random number is from 1-6
let myrandomNumber = Math.floor(Math.random() * 6) + 1;
console.log(myrandomNumber);

//now we have to make the random number choose images from 1-6 using setAttribute
let myrandomImage = "dice" + myrandomNumber + ".png";
myrandomImage = "images/" + myrandomImage;
console.log(myrandomImage);

//now we have to select the image from the html and change the source
let myImage = document.querySelectorAll("img")[0];
myImage.setAttribute("src", myrandomImage);

//now we have to repeat the same process for the second image
let myrandomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(myrandomNumber2);

let myrandomImage2 = "dice" + myrandomNumber2 + ".png";
myrandomImage2 = "images/" + myrandomImage2;
console.log(myrandomImage2);

let myImage2 = document.querySelectorAll("img")[1];
myImage2.setAttribute("src", myrandomImage2);

//now we have to create a if else statement to check who wins
//if player 1 wins
if (myrandomNumber > myrandomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}
//if player 2 wins
else if (myrandomNumber < myrandomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}
//if it is a draw
else {
  document.querySelector("h1").innerHTML = "Draw";
}
