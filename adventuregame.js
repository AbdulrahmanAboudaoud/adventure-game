var title = document.getElementById('title');
var text = document.getElementById('p1');
var background = document.getElementById('div1');
var buttonsBackGround = document.getElementById('div3');
var mainDiv = document.getElementById('mainDiv');
var img = document.getElementById('div2');
var restart = document.getElementById('restartButton');
var btn1 = document.getElementById('button1');
var btn2 = document.getElementById('button2');
var btn3 = document.getElementById('button3');
var btn4 = document.getElementById('button4');
var chickKey = false;
/*
btn1.style.display = "none";
btn3.style.display = "none";
*/
/*
var i = 0;
var txt = 'You have broken into AL-KHWARIZMI house (One of the most famous mathematicians in the world) trying to steal his theory from his basement and after entering, all doors were suddenly closed . The only way out is to go throug all rooms . you will be facing different rooms , each room has a tricky math question and each room has 2 doors (you need to choose the one having the correct answer using the buttons below ) answer carefully otherwise you may die or stuck here for ever !!  Tip : keep your eyes open because some roomes has things you need to pick up and use at one of the next stages .':
var speed = 50;
function typeWriter(){
	if(i< txt.length){
		text.innerHTML += txt.charAt(i);
		i++
		setTimeout(typeWriter,speed);
	}
}
*/




var typeWriterInterval;
var counter = 0;
function typeWriter(txt){
	if(counter< txt.length){
		text.innerHTML += txt.charAt(counter);
		counter++;
	}
}

function cleanUp(){
	text.innerText = "";
	counter=0;
	clearInterval(typeWriterInterval);
}






function gamestart() {
	cleanUp();
    var txt =  "You have broken into AL-KHWARIZMI house (One of the most famous mathematicians in the world) trying to steal his theory from his basement and after entering, all doors were suddenly closed . The only way out is to go throug all rooms . you will be facing different rooms , each room has a tricky math question and each room has 2 doors (you need to choose the one having the correct answer using the buttons below ) answer carefully otherwise you may die or stuck here for ever !!  Tip : keep your eyes open because one of the rooms has a key you need to pick up and use at the end to get the theory .";
	typeWriterInterval = setInterval(function(){typeWriter(txt)},50);
     
    btn4.style.display = "none"; 
	btn1.style.display = "none";
	btn2.style.display = "inline-block";
	btn3.style.display = "none";
    btn2.style.backgroundColor = "white";
    buttonsBackGround.style.backgroundColor = "#DC143C";
    img.style.display = "none";
    img.style.width = "350px";
    img.style.left = "450px";
    btn2.onclick = stage1;
    restart.style.display = "none";

}

gamestart();

function key1(){
  btn4.style.display = "none"; 	
  chickKey = true;
  alert('you have picked up a very valuable key , keep it save because you need to use it later !');
}

function gameend(){
	img.style.width = "139px";
	img.style.backgroundImage = "url('images/alkhawarizmi.jpg')";
	img.style.left = "565px";
	btn1.style.display = "none";
	btn3.style.display = "none";
	restart.style.display = "block";
	cleanUp();
	var txt = "unfortunately your brain is not developed enough to be able to take Al-Khawarizmi theory ! \r you can try again by pressing on restart button on the left side of your screen .";
    typeWriterInterval = setInterval(function(){typeWriter(txt)},50);
}




 function stage1(){
   btn2.style.display = "none";
   btn1.style.display = "inline-block";
   btn3.style.display = "inline-block";
   img.style.backgroundImage = "url('images/lvl1.png')";
   img.style.display = "block";
   btn1.style.right = "30px";
   btn1.style.backgroundColor = "#DC143C";
   btn1.innerText = "Door1";
   btn1.style.width = "75px";
   cleanUp();
   var txt = "What Number Should Replace the Question Mark?\rThink of a situation in everyday life where these numbers appear.\r Door 1 = 6\r Door 2 = R";
   typeWriterInterval = setInterval(function(){typeWriter(txt)},50);
   btn1.onclick = gameend;
   btn3.onclick = stage2;
}
   



 function stage2(){
     
   img.style.backgroundImage = "url('images/lvl2.png')";
   img.style.display = "block";
   cleanUp();
   var txt = "That is correct ! It's a gear stick so the correct answer here was R. \r Now to the next question (good luck !) \r What is the weight of the fox ? \r Door 1 = 20kg\r Door 2 = 10kg";
   typeWriterInterval = setInterval(function(){typeWriter(txt)},50);
   btn3.onclick = gameend;
   btn1.onclick = stage3;
  
}


 function stage3(){
     
   img.style.backgroundImage = "url('images/lvl3.png')";
   img.style.display = "block";
   cleanUp();
   var txt = "That is correct ! If two bears are 120kg, one bear is 60kg.A bear and a rabbit are 70kg \r If the bear is 60kg alone, then the rabbit is 10kg.Since the bear and the rabbit are 70kg,\r the weight remaining for the fox is 20kg. Now to the next question (which number should be next ?) \r Door 1 = 128\r Door 2 = 256kg";
   typeWriterInterval = setInterval(function(){typeWriter(txt)},50);
   btn1.onclick = gameend;
   btn3.onclick = stage4;
}

function stage4(){
     
   img.style.backgroundImage = "url('images/lvl4.png')";
   img.style.display = "block";
   cleanUp();
   var txt = "Good job ! 256 was the right answer and if u want to know why (4^1=4 4^2=16 4^3=64 4^4= 256 ) .\r Now to the next question , What number should replace the question mark? \r Door 1 = 23 \r Door 2 = 13 ";
   typeWriterInterval = setInterval(function(){typeWriter(txt)},50);
   btn1.onclick = gameend;
   btn3.onclick = stage5;
}

 function stage5(){
     
   img.style.backgroundImage = "url('images/lvl5.png')";
   img.style.display = "block";
   cleanUp();
   var txt = "well done ! 13 was the right answer (After performing the multiplication, we reach the result by adding the individual numbers that make up the result.\rIf 12x12 = 144, then 1 + 4 + 4 = 9If 23x23 = 529, then 5 + 2 + 9 = 16 \rIf 34x34 = 1156, then 1 + 1 + 5 + 6 = 13) \r And now to the next question !  How many numbers do you see here? \r Door 1 = 5 \r Door 2 = 10";
   typeWriterInterval = setInterval(function(){typeWriter(txt)},50);
   btn1.onclick = gameend;
   btn3.onclick = stage6;
}

function stage6(){
   btn4.style.display = "inline-block";
   img.style.backgroundImage = "url('images/lvl6.png')";
   img.style.display = "block";
   cleanUp();
   var txt = "Great ! 10 was the right answer ( the numbers you can find in this picture are 1,2,3,4,5,6,7,8,9,0) \r And now to the next question !  which number should replace the question mark ? \r Door 1 = 40 \r Door 2 = 32";
   typeWriterInterval = setInterval(function(){typeWriter(txt)},50);
   btn4.onclick = key1;
   btn3.onclick = gameend;
   btn1.onclick = stage7;
   
}

function stage7(){
   btn4.style.display = "none";
   img.style.backgroundImage = "url('images/lvl7.png')";
   img.style.display = "block";
   cleanUp();
   var txt = "Nice job ! 40 was the right answer ( you need to multiply the two numbers + the answer from the one before so 8 + 11 = 19 + 21 = 40) \r Only 2 questions to go ! so be careful \r  Which is heavier? A pound of feathers or a pound of rocks? \r Door 1 = none \r Door 2 = rocks";
   typeWriterInterval = setInterval(function(){typeWriter(txt)},50);
   
   btn3.onclick = gameend;
   btn1.onclick = stage8;
   
}

function stage8(){
   
   img.style.backgroundImage = "url('images/lvl8.png')";
   img.style.display = "block";
   cleanUp();
   var txt = "WoW, good job my friend !! one question left so be careful ! \r None was the right answer (because a pound is pound no matter which material it is !  ) \r Now to the final question !  \r  If 3 cats can catch 3 bunnies in 3 minutes, how long will it take 100 cats to catch 100 bunnies? \r Door 1 = 3 minutes \r Door 2 = 100 minutes ";
   typeWriterInterval = setInterval(function(){typeWriter(txt)},50);
   
   btn3.onclick = gameend;
   btn1.onclick = wellPlayed;
   
}

function wellPlayed (){
  
   img.style.backgroundImage = "url('images/box.jpg')";
   img.style.display = "block";
   cleanUp();
   var txt = " Well done ! 3 minutes was the right answer \r (It will take 3 minutes for 100 cats to catch 100 bunnies. 1 cat can catch 1 bunny in 3 minutes, so 100 catch can catch 100 bunnies in 3 minutes.) \r you have answered all questions correctly and  I think my theory will be finally given for someone who's really worth it \r use the key from stage 6 to unlock the box and claim the theory !  "
   typeWriterInterval = setInterval(function(){typeWriter(txt)},50);
   btn3.style.display = "none";
   btn1.style.display = "block";
   btn1.style.left = "30px";
   btn1.style.backgroundColor = "green";
   btn1.innerText = "use key";
   btn1.style.width = "150px";
   btn1.onclick = openTresure;
}

function openTresure(){
	if (chickKey == true){

		img.style.backgroundImage = "url('images/theory.png')";
  		img.style.display = "block";
   		cleanUp();
  		var txt = " The theory is now yours, make sure to use it wisely ! \r you are now free to go ! save trip home .   "
  		typeWriterInterval = setInterval(function(){typeWriter(txt)},50);
        btn1.style.display = "none";
	}
    else{
        img.style.backgroundImage = "url('images/box.jpg')";
  		img.style.display = "block";
   		cleanUp();
  	    var txt = "unfortunately you did not pick up the key and therefor you cant open the box ! you can try again by pressing the restart button , good luck ! "
   		typeWriterInterval = setInterval(function(){typeWriter(txt)},50);
   		restart.style.display = "inline-block";
   		btn1.style.display = "none";
    }
}

restart.onclick = gamestart;