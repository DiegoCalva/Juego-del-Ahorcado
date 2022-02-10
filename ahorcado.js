var botJug= document.querySelector("#btnPlay");
var lista=['JAZZ','MUERCIELAGO','CONSTITUCIONAL','LEON','LINCE'];
var game=false;
var palabra="";
var canvas = document.getElementById('ahorcado');
var aux2=50;
var aux3=0;
var win=0;
var tries=['1','2','3','4','5','6','7','8','9'];
botJug.addEventListener("click",function(event)
{
	event.preventDefault();
	game=true;
	aux2=50;
	palabra = lista[Math.floor(Math.random()*(lista.length))];
	
	
	//canvas------------------------------------------------------
	canvas.width=canvas.width;
  if (canvas.getContext) 
  {
    var ctx = canvas.getContext('2d');
ctx.beginPath();
    ctx.moveTo(50, 500); ctx.lineTo(10, 550); ctx.lineTo(90, 550); ctx.fill();
  
	//Palabra----------------------------------------------------
	var aux=1;
	while(aux<=palabra.length)
	{
		ctx.moveTo(40*aux-10, 100);ctx.lineTo(40*aux+15, 100);ctx.stroke();
		aux++;
	}
  }

});

//recibir datos del teclado------------------------------------------
window.onload = function() 
{document.onkeypress = muestraInformacion;}

function muestraInformacion(elEvento) 
{
	 if(game==true)
	 {
  var evento = window.event || elEvento;
  var mensaje = String.fromCharCode(evento.charCode);

		validar(mensaje);
	 }
}

//validar datos--------------------------------------------------------
function validar(tecla)
{
	var aux=1;
	const regxs = {"valid":  /[A-Z0-9 ]+$/}
	var ctx = canvas.getContext('2d');
	var done=false;
	var done2=false;
	ctx.font="bold italic 15px arial";
	if (regxs.valid.test(tecla))  
	{
		if (canvas.getContext) 
		{
			while(aux<=palabra.length)
			{
				if(palabra.charAt(aux-1)==tecla)
				{
					ctx.fillText(tecla,40*aux,90); 
					done=true;
					win++;
					if(win==palabra.length)
					{
						game=false;
						ctx.fillText("GANASTE, FELICIDADES!!",200,270); 
						win=0;
					}
				}
			aux++;
			}
			aux=0;
			if(done==false)
				{
					while(aux<9)
					{
						if(tecla==tries[aux])
						{
							done2=true;
						}
						aux++;
					}
					if(aux3==8)
					{
						ctx.fillText("FIN DEL JUEGO",200,270); 
						game=false;
					}	
					if (done2==false)
					{
						ctx.fillText(tecla,aux2,220); 
						aux2=aux2+50;
						console.log(tries[aux3]);
						tries[aux3]=tecla;
						tries;
						
						switch(aux3)
						{
							case 0:
							ctx.beginPath();ctx.moveTo(50, 500);ctx.lineTo(50, 300);ctx.stroke();
							break;
							case 1:
							ctx.lineTo(150, 300);ctx.stroke();
							break;
							case 2:
							ctx.lineTo(150, 350);ctx.stroke();
							break;
							case 3:
							ctx.beginPath();	
							ctx.arc(150,370,20,0,(Math.PI/180)*360,true);ctx.fill();
							break;
							case 4:
							ctx.moveTo(150, 390);ctx.lineTo(150, 450);ctx.stroke();
							break;
							case 5:
							ctx.moveTo(150, 400);ctx.lineTo(180, 420);ctx.stroke();
							break;
							case 6:
							ctx.moveTo(150, 400);ctx.lineTo(120, 420);ctx.stroke();
							break;
							case 7:
							ctx.moveTo(150, 450);ctx.lineTo(120, 470);ctx.stroke();
							break;
							case 8:
							ctx.moveTo(150, 450);ctx.lineTo(180, 470);ctx.stroke();
							break;
							default:
							break;
						}
						
						aux3++;
					}
				done2=false;
				}
		}
	} else console.log("no");
	  aux=0;
}