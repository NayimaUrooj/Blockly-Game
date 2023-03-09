

// const rocket = new Image();
// rocket.src = './images/BG.png';

//   var x = 50;
//   var y = 50;

//  function frames(ctx) {
// 	console.log("frames");
// 	ctx.drawImage(rocket, 
// 		x, y,
// 		40, 50,
// 		);
//   }

    

     
    function down_movement()
	{
        
		pos = 40,
		id = setInterval(frame, 10);

		setTimeout(function() {
			clearInterval(id);
		}, 3000);

		function frame() {

            var r = document.getElementById("rocket").getBoundingClientRect();
            var elem = document.getElementById('rocket');

            var left = r.left;
            var top = r.top;

            if (left > 500 )
            {
                if (pos == 300) {
                    playAudio('win');
                    alert("Congratulations, you have completed the level2");
                    clearInterval(id);
                }
                    else{
                        pos++;
                    elem.style.top = pos + 'px';
                    }
            } 
            else
            {
                if (pos == 260) {
                    playAudio('lose');
                    clearInterval(id);
                    document.getElementById('rocket').style.display = "none";
                    document.getElementById('rocket2').style.display = "block";
                    
                }
                    else{
                        pos++;
                    elem.style.top = pos + 'px';
                    }
            }
			
			}
		};

      

       

	
	





   