// var i = 2;

var i = 2;

   
	//window.localStorage.setItem("level", JSON.stringify(level));
	//var i = JSON.parse(window.localStorage.getItem("level"));
	
	console.log(i);

var map = [
[
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
	[1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
	[1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
	[1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
	[1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
	[1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
	[1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
	[1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
	[1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
	[1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 2, 2, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 1],
	[1, 0, 2, 2, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
],
[
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
],
[  //1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1],
	[1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1],
	[1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
	[1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1],
	[1, 0, 0, 0, 0, 1, 0, 0, 3, 3, 3, 0, 1, 1, 0, 0, 1],
	[1, 0, 0, 0, 0, 1, 0, 0, 3, 3, 3, 0, 1, 1, 0, 0, 1],
	[1, 0, 0, 0, 0, 1, 0, 0, 3, 3, 3, 0, 1, 1, 0, 0, 1],
	[1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]
];

const log = [];
var OBJECT_TYPE = {
	SKY: 0,
	WALL: 1,
	KEY: 2,
	DOOR: 3,
	TELEPORT: 4
}

function positionCor(posY, posX, i)
	{
		
		console.log(i);
		var level = map[i];
		var pos;
		
		posX = (posX / 10) / 2;
		posY = (posY / 10) / 2;

		posX = Math.floor(posX);
		posY = Math.floor(posY);

		console.log(posX, posY);
		
		for (let row = 0; row < level.length; row++) {
			for (let column = 0; column < level[row].length; column++)
			{
				pos = level[posX][posY];
			}
		}
		switch (pos) {
            case 0:
              pos = OBJECT_TYPE.SKY;
              break;
            case 1:
              pos = OBJECT_TYPE.WALL;
              break;
            case 2:
              pos = OBJECT_TYPE.KEY;
              break;
            case 3:
              pos = OBJECT_TYPE.DOOR;
              break;
			  case 4:
			  pos = OBJECT_TYPE.TELEPORT;
			  break;
          }
		  console.log(pos);
		return pos;
	}

	var isFound = true;

	function teleport(posX, posY, i)
	{
		var level = map[i];
		var pos;
		for (let row = 0; row < level.length; row++) {
			for (let column = 0; column < level[row].length; column++)
			{
				if (isFound) {
				if (level[row][column] == 4)
				{
					pos = [row, column];
					isFound = false;
				}
			}
		}
	}
		posY = (pos[0] * 2) * 10;
		posX = (pos[1] * 2) * 10;

		return [posX+20, posY+20];
	}
	var hasKey = false;
	
function animate()
	{	
		var step = 20;
		var elem = this.rocket;
		var action = log.shift();
		console.log(action);

			  if (!action) {
				clearTimeout(timer);
				return;
			}
			
		var posX = document.getElementById('rocket').offsetLeft;
		var posY = document.getElementById('rocket').offsetTop;

		console.log(posX, posY);
		var object = positionCor(posX, posY, i);
		

				 if (action[0] == 'moveForward')
				    {
						//var object = positionCor(posX+step, posY, i);
						if (object != OBJECT_TYPE.WALL)
						{
							posX = posX + step;
							elem.style.left = posX + 'px';
						}

					}
					else if (action[0] == 'moveDown') 
					{
						//var object = positionCor(posX, posY+step, i);
						if (object != OBJECT_TYPE.WALL)
					{
						posY = posY + step;
						elem.style.top = posY + 'px';
					}
				   }
					else if (action[0] == 'moveBack')
					{
						if (object != OBJECT_TYPE.WALL)
						{
							posX = posX - step;
							elem.style.left = posX + 'px';
						}						
					}
					else if (action[0] == 'moveUp')
					{
						if (object != OBJECT_TYPE.WALL)
						{
							posY = posY - step;
							elem.style.top = posY + 'px';	
						}
					}

				if (object == OBJECT_TYPE.KEY)
				{
					playAudio('minigame');
					if (i == 0)
					{
						puzzle();
					}
					else if(i == 1)
					{
						memory_Cards();
					}
					hasKey = true;
				}

				else if (object == OBJECT_TYPE.TELEPORT)
				{
					var position = teleport(posX, posY, i);
					elem.style.display = "none";
					elem.style.left = position[0] + 'px';
					elem.style.top = position[1] + 'px';
					elem.style.display = "block";
				}

				else if (object == OBJECT_TYPE.DOOR){
				
				if (hasKey == true)
				{
					finish();
				}
				else 
				{
						alert('You need a key to open the gate.');
					reset();
					
				}	
				}
					var timer = setTimeout(animate, 100);
					}

	function movingBotFwd ()
	{
		log.push(['moveForward']);	
	}
	 function movingBotDown()
	{
			log.push(['moveDown']);
	}
	function movingBotBack()
	{
		log.push(['moveBack']);
	}
	function movingBotUp()
	{
		log.push(['moveUp']);
	}
			
	 function reset()
	{
		location.reload();
	};
	
	function playAudio(elem) {
		var audio = document.getElementById(elem);
		audio.play();
	};

	 function memory_Cards()
	{
		alert("Remember the position of the cards");
		document.getElementById('memory').style.display = "block";
	//	document.getElementById('rocket').style.display = "none";

		setTimeout(function() 
	   {
		document.getElementById('memory').style.display = "none";
		document.getElementById('rocket').style.display = "none"; 
		document.getElementById('memCovered').style.display = "block";
		
	}, 2000);
	};

	 function mem_puzzle(number1, number2)
	{
		let mark = 0;
		if ((number1 == 2 || number1 == 4) && (number2 == 4 || number2 == 2))
		{

			document.getElementById('mem2').style.display = "block";
			document.getElementById('mem5').style.display = "block";
			playAudio('taskwin');
			mark++;
			
		}
		if ((number1 == 1 || number1 == 5) && (number2 == 5 || number2 == 1))
		{
			
			console.log('yeah');
			document.getElementById('mem1').style.display = "block";
			document.getElementById('mem4').style.display = "block";
			playAudio('taskwin');
			
			mark++;
		}
		if ((number1 == 3 || number1 == 6) && (number2 == 6 || number2 == 3))
		{
			document.getElementById('mem3').style.display = "block";
			document.getElementById('mem6').style.display = "block";
			playAudio('taskwin');
			mark++;
		}
		
		if (mark == 0)
		{
			console.log(mark);
			playAudio('miniwin');
			document.getElementById('rocket').style.display = "block";
			document.getElementById('mem1').style.display = "none";
			document.getElementById('mem2').style.display = "none";
			document.getElementById('mem3').style.display = "none";
			document.getElementById('mem4').style.display = "none";
			document.getElementById('mem5').style.display = "none";
			document.getElementById('mem6').style.display = "none";
			document.getElementById('memCovered').style.display = "none";
		}
	};


function puzzle()
			{
			document.getElementById('rocket').style.display = "block";
			document.getElementById('p1').style.display = "block";
			setTimeout(function() 
		   {
			document.getElementById('rocket').style.display = "none"; 
			document.getElementById('p1').style.display = "none";
			document.getElementById('p11').style.display = " block";
			document.getElementById('p12').style.display = " block";
			document.getElementById('p13').style.display = " block";
			document.getElementById('p14').style.display = " block";
		}, 1000);
			};

	var count = 0;
    var check = false;

	function rotate_puzzle(dropdown_picture, angle){

		if(dropdown_picture.trim() == "picture1")
		{
			document.getElementById('p11').style.transform = "rotate("+angle+"deg)";
			
			if(angle == 270)
			{
				count++;
			}
			success();
		
		}
		else if(dropdown_picture.trim() == "picture2")
		{
			console.log("picture2");
			document.getElementById('p12').style.transform = "rotate("+angle+"deg)";

			if(angle == 90)
			{
				count++;
			}
			success();
			
		}

		else if(dropdown_picture.trim() == "picture3")
		{
			console.log("picture3");
			document.getElementById('p13').style.transform = "rotate("+angle+"deg)";

			if(angle == 180)
			{
				count++;
			}
			success();
		}

		function success()
		{
            
			if (count == 3)
			{
				playAudio('miniwin');
				check = true;
				document.getElementById('p11').style.display = " none";
				document.getElementById('p12').style.display = " none";
				document.getElementById('p13').style.display = " none";
				document.getElementById('p14').style.display = " none";
				document.getElementById('rocket').style.display = "block";

                let posX = document.getElementById('rocket').offsetLeft;
	
				timer = setInterval(function () {
                    
							posX++;
							document.getElementById('rocket').style.left = posX + "px";
							if (posX == 190) 
							{
							 clearInterval(timer);
                             finish();
							}
						  }, 10);	  					
			}
		}; 
	};

    function finish(){

        var posX = document.getElementById('rocket').offsetLeft;
        var posY = document.getElementById('rocket').offsetTop;

		{
			{
				playAudio('win');
				confirm("Congratulations! You have completed level" + i + "!");
		      	window.location.href = "level" + i + ".html";
				  i++;
				  window.location.search
			}

		}
	};


    function compare_Bot(opt, value)
    {
		if (opt.trim() == "lesser" && (value == 20 || value == 40 || value == 60))
        {
			return true;
        }
		return false;
    };
	

	function if_elseBlock(loopVar, ifFuntion, Elsefunction)
	{
		let x = loopVar;
		while (x < loopVar+1)
		{
			ifFuntion();
			x-=20;


		}
		while (x < loopVar+1)
		{
			Elsefunction();
			x-20;
		}
	}