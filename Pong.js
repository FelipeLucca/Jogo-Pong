//-----------------------------------------variaveis da bolinha----------------------------------
let xBolinha = 300;
let yBolinha = 200;
let diamBolinha = 17;
let raio = diamBolinha/2;
//--------------------------------------velocidade da bolinha------------------------------------
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;
//--------------------------------------variaveis da minha raquete-------------------------------
let xRaquete=5
let yRaquete=150
let comprimentoRaquete=10
let alturaRaquete=90
//--------------------------------------variaveis da raquete do oponente-------------------------
let xraquete=585
let yraquete=150
let comprimentoraquete=10
let alturaraquete=90
let velocidadeyoponente;
let colidiu = false
let chanceDeErrar = 0;
//--------------------------------------placar do jogo-------------------------------------------
let meuspontos=0;
let pontosoponente=0;
//-----------------------------------------sons--------------------------------------------------
let raquetada;
let ponto;
let trilha;
//--------------------------------------largura e altura da tela---------------------------------
width = 600;
height= 400;
//----------------------------------------tamanho do quadro--------------------------------------
function setup() 
{
    createCanvas(600,400);
    trilha.loop()
}
//---------------------------------------- funções-----------------------------------------------
function draw() 
{
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    mostrarRaquete();
    movimentaMinhaRaquete(); 
    verificaColisaoRaquete();
   rect(xRaquete,yRaquete,comprimentoRaquete,alturaRaquete);
    mostrarRaqueteoponente();
    movimentaraqueteoponente();
   verificacolisaoraqueteoponente();
   incluiplacar();
   marcaponto();
   bolinhaNaoFicaPresa();
}
   
function movimentaBolinha()
{
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;   
}  

function mostrarRaquete()
{
  rect(xRaquete,yRaquete,comprimentoRaquete,alturaRaquete)
}

function mostrarRaqueteoponente()
{
  rect(xraquete,yraquete,comprimentoraquete,alturaraquete)
}

function mostraBolinha()
{
  circle (xBolinha,yBolinha,diamBolinha); 
}
  
function verificaColisaoBorda()
{
  if (xBolinha + raio > width || xBolinha - raio <0 )
    {
      velocidadexBolinha *= -1;
    }
  
   if (yBolinha + raio > height || yBolinha - raio <0) 
    {
    velocidadeyBolinha *= -1;
    }
}

function verificaColisaoRaquete() 
{
  if (xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio)
  {
       velocidadexBolinha *= -1;
  }
}

function mostrarRaquete()
{
  rect(xRaquete,yRaquete,comprimentoRaquete,alturaRaquete)
}

function mostraBolinha()
{
  circle (xBolinha,yBolinha,diamBolinha);
}
  
function verificaColisaoRaquete() 
{
    if (xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha +raio >yRaquete)
      {
        velocidadexBolinha *= -1;
        raquetada.play()
      }
}

function movimentaMinhaRaquete()
{
  if (keyIsDown(UP_ARROW))
  {
    yRaquete -=10;
  }
  if (keyIsDown(DOWN_ARROW))
  {
    yRaquete +=10;
  }
  if (keyIsDown(RIGHT_ARROW))
  {
    xRaquete +=10;   
  }

  if (keyIsDown(LEFT_ARROW))
  {
    xRaquete -=10;
  }
}

function movimentaraqueteoponente()
{
  velocidadeyoponente= yBolinha - velocidadeyBolinha - yraquete-comprimentoraquete/2-30;
  yraquete += velocidadeyoponente + chanceDeErrar
  calculaChanceDeErrar()
}

function verificacolisaoraqueteoponente(){
  if (xBolinha + raio > xraquete && 
      yBolinha + raio < yraquete + alturaraquete && 
      yBolinha + raio > yraquete)
  {
    velocidadexBolinha *= -1;
    raquetada.play()
  }  
}

function incluiplacar()
{
  stroke(255)
  textAlign(CENTER);
  textSize(20);
  fill(color(255,140,0));
  rect(150,10,40,20);
  fill(255);
  text(meuspontos, 170,26);
  fill(color(255,140,0));
  rect(430,10,40,20);
  fill(255);
  text(pontosoponente,450,26); 
}

function marcaponto()
{
  if(xBolinha > 590)
    {
  meuspontos+=1;
  ponto.play();
    }
  if (xBolinha <10)
    {
    pontosoponente +=1;
    ponto.play();
    }
}

function preload()
{
  trilha = loadSound ("trilha.mp3");
  raquetada = loadSound ("raquetada.mp3");    
  ponto = loadSound ("ponto.mp3");
}
  
  function bolinhaNaoFicaPresa()
{
    if (xBolinha + raio < 0)
      {
    xBolinha = 300;
      }
}

function calculaChanceDeErrar() 
{
  if (pontosoponente >= meuspontos) 
    {
    chanceDeErrar += 1;
      if (chanceDeErrar >= 39)
        {
          chanceDeErrar = 40;
        }
    } 
  else 
    {
      chanceDeErrar -= 1}
    
      if (chanceDeErrar <= 35)
        {
          chanceDeErrar = 35
        }
    
}

