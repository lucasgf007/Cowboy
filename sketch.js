// *************3º unidade*************
// link do jogo p5 editor: https://editor.p5js.org/farki16/sketches/vwHPunBe0
// link do colabeduc: http://www.colabeduc.org/projeto/show/333
// link do video explicativo: https://youtu.be/RJN-SwWzgcQ

// -------- declarando todas as img -----------
// link para resolução do có1digo (2 unidade) 1° video
//    https://youtu.be/MyVTwOD73Mc
let img;
let img2;
let areia;
let cactus1;
let cactus2;
let andando1;
let zumbi;
let humano;
let tiro1;
let setas;
let space;
let foto;
//-------------variáveis-----------------------
var y_boneco = 305; //adicionei essa variavel para marcar a posição y do boneco e assim poder variar
var y_tiro = 340;//adicionei essa variavel para marcar a posição da bala e ela não ficar fazerndo o mesmo trajedo to boneco, ous eja, onde ele atirar ela seguirá reto
var sobe = false;//adicionei essa variavel para marcar quandofor para subir e quando não for, para ter um controle de pulo e tal..
var y = 0
var z = 0, j = 0, f = 120, h = 0

var yy = 0, ff = 0
var vel = 5, vel2 = 4

var k = 100
var l = 70

var atirou = false;

var velocidade = 5, velocidade1 = 5, velocidade2 = 4, velocidade3 = 5

var tela = 0
var opcao = 1
let x = 100
var x_tiro = x;
var y_tiro = y;

// lobby
var fase = 0

function preload() {
  img = loadImage('img-menu.png');
  img2 = loadImage('Cowboy01.png')
  areia = loadImage('areia.png')
  cactus1 = loadImage('Cactus (1).png')
  cactus2 = loadImage('Cactus (3).png')
  andando1 = loadImage('andando1.png')
  zumbi = loadImage('zumbi.png')
  humano = loadImage('humano.png')
  tiro1 = loadImage('tiro.png')
  setas = loadImage('setas(teclado).png')
  space = loadImage('espaço.png')
  foto = loadImage('foto.jpeg')
}

function setup() {
  createCanvas(480, 480);
  background(176,224,230);
  
}

function draw() {
//   -------- chamando functions -----------
  if(tela == 0){
    menu()
  } else if(tela == 1){
    fase1()
  } else if(tela == 2){
    instrucoes()
  } else if(tela == 3){
    creditos()
  } else if(tela == 4){
    fase2()
  } else if(tela == 5){
    gameover()
  } else if(tela == 6){
    lobby()
  } else if(tela == 7){
    fase3()
  }
  
  
  

}

function menu() { 
  background(176,224,230);
  image(img, 0,-100)
  //   Red, Green, Blue
//   0 a 225
//   ('#ffgbcc')

  
//   ---------------MENU----------------
  
  fill(245,255,250)
  rect(k, l, 230, 45)
  
  fill(50)
  textSize(32)
  text('JOGAR', 150, 100)
  text('INSTRUÇÕES', 110, 180)
  text('CRÉDITOS', 130, 260)
  

//   objeto(x, y, largura, altura)
// fundo de tela do menu
  
  fill(255,215,0);
  ellipse(image(img2, yy, y),y, y, 30, 30);
  y = y + velocidade
  yy = yy + vel
  if(y > 450){
    velocidade = -5
  } if(y < 0){
    velocidade = 5
  }
  
  if(yy > 450){
    vel = -5
  } if(yy < 0){
    vel = 5
  }
  
  ellipse(image(img2, 150, j),150, j, 30, 30);
  j = j + velocidade1
  
  if(j > 450){
    velocidade1 = -5
  } if(j < 0){
    velocidade1 = 5
  }
  
  ellipse(image(img2, ff, f),ff, f, 30, 30);
  f = f + velocidade2
  ff = ff + vel2
  
  if(f > 450){
    velocidade2 = -5
  } if(f < 0){
    velocidade2 = 5
  }
  if(ff > 450){
    vel2 = -5
  } if(ff < 0){
    vel2 = 5
  }
  
  ellipse(image(img2, 340, z),340, z, 30 , 30);
  z = z + velocidade3
  
  if(z > 450){
    velocidade3 = -5
  } if(z < 0){
    velocidade3 = 5
  }
}
// -------------fim do menu -------------

// ------------------fase 1------------------
function fase1() {
//   -----------cenário-----------
  
  image(img, 0, 0)
  image(areia, 0, 360)
  image(areia, 128, 360)
  image(areia, 256, 360)
  image(areia, 384, 360)
  image(cactus1, 150, 250)
  image(cactus2, 400, 265)
  fill(200)
  text('Fase 1', 180, 30)
  
  
// ----------  jogo ----------------
//   --------- movimento do boneco ------------------
  //------------disparo-------------
  
  if (atirou == false){
    if (keyIsDown(32)){
    atirou = true;
    x_tiro = x;
      y_tiro = y_boneco+35;
  }
  }
  if(atirou == true){
    if(x_tiro<480){
      image(tiro1,x_tiro+16, y_tiro, 30, 10);
      x_tiro+=8;
    }else{
      x_tiro = x; //posição atual do boneco
      atirou = false;
    }
  }
  // ------------salto---------
  if(sobe == false){//se subir for falso, ou seja ainda não subiu
    if(y_boneco<305){//verifica a posição do boneco e ver se ele ta na posição certa (FAZ ELE DESCER)
      y_boneco +=4;//se estiver acima da posição certa então ele tem que descer
    }
    if(y_boneco == 305){//verifica se o boneco está no chao
      if(keyIsDown(UP_ARROW)){//se tiver então pode pular, então verifica se o jogador apertou para pular (seta ara cima)
        sobe = true;//se apertou então pode, então sobe vira verdadeiro
      }
    }
    
  }
  if(sobe == true){
    if(y_boneco>220){//e o boneco estando a menos do limite so salto dele
      y_boneco -=4;//então ele sobre ate o limite, que é 220
    }else{
      sobe = false;//após subir ate o limite, sobe fica falso, jogando ele pra o parametro false dnv fzd ele descer 
    }
  }
  
  
  // -----------movimento------------- 
  if(keyIsDown(LEFT_ARROW)){
    
    x -= 3;
    if(keyIsDown(LEFT_ARROW)){
      image(andando1,x,y_boneco)
    } else {
      image(img2, x, y_boneco)
    }
    
  }else{

  if (keyIsDown(RIGHT_ARROW)) {
    
    x += 3;
    if(keyIsDown(RIGHT_ARROW)){
      image(andando1,x,y_boneco)
    } else {
      image(img2, x, y_boneco)
    }
  }else{
      ellipse(image(img2, x, y_boneco),x,y_boneco);
  }
}
//   ----------colisão---------
//   tiro zumbi
  if(dist(yy + 7,y + 9, x_tiro + 5, y_tiro + 5) <= 9 + 5 ){
    tela = 4
    
//     resposta certa 
  }
//   tiro humano
  if(dist(ff + 9,f + 9, x_tiro + 5, y_tiro + 5) <= 9 + 5 ){
    
    tela = 5
  }
  
  
//   -----zumbi-----
  
  ellipse(image(zumbi, yy, y),yy, y, 30, 30);
  y = y + velocidade
  yy = yy + vel
  if(y > 450){
    velocidade = -2
  } if(y < 0){
    velocidade = 2
  }
  
  if(yy > 450){
    vel = -3
  } if(yy < 0){
    vel = 3
  }
//   ----humano----
  ellipse(image(humano, ff, f),ff, f, 30, 30);
  f = f + velocidade2
  ff = ff + vel2
  
  if(f > 450){
    velocidade2 = -4
  } if(f < 0){
    velocidade2 = 4
  }
  if(ff > 450){
    vel2 = -5
  } if(ff < 0){
    vel2 = 5
  }
  
  
//   -----conta ------
  textSize(20)
  text('acerte o resultado:', 0, 400)
  text('32 + 45', 0, 430)
  text('77 (acerte um zumbi)', 290, 400)
  text('74 (acerte um humano)', 280, 430)
  
//   --------------fim da fase 1---------------
}

// -------------------fase 2-----------------
function fase2(){
  //   -----------cenário-----------
  
  image(img, 0, 0)
  image(areia, 0, 360)
  image(areia, 128, 360)
  image(areia, 256, 360)
  image(areia, 384, 360)
  image(cactus1, 150, 250)
  image(cactus2, 400, 265)
  fill(200)
  text('Fase 2', 180, 30)
  
  
// ----------  jogo ----------------
//   --------- movimento do boneco ------------------
  //------------disparo-------------
  
  if (atirou == false){
    if (keyIsDown(32)){
    atirou = true;
    x_tiro = x;
      y_tiro = y_boneco+35;
  }
  }
  if(atirou == true){
    if(x_tiro<480){
      image(tiro1,x_tiro+16, y_tiro, 30, 10);
      x_tiro+=8;
    }else{
      x_tiro = x; //posição atual do boneco
      atirou = false;
    }
  }
  // ------------salto---------
  if(sobe == false){//se subir for falso, ou seja ainda não subiu
    if(y_boneco<305){//verifica a posição do boneco e ver se ele ta na posição certa (FAZ ELE DESCER)
      y_boneco +=4;//se estiver acima da posição certa então ele tem que descer
    }
    if(y_boneco == 305){//verifica se o boneco está no chao
      if(keyIsDown(UP_ARROW)){//se tiver então pode pular, então verifica se o jogador apertou para pular (seta ara cima)
        sobe = true;//se apertou então pode, então sobe vira verdadeiro
      }
    }
    
  }
  if(sobe == true){
    if(y_boneco>220){//e o boneco estando a menos do limite so salto dele
      y_boneco -=4;//então ele sobre ate o limite, que é 220
    }else{
      sobe = false;//após subir ate o limite, sobe fica falso, jogando ele pra o parametro false dnv fzd ele descer 
    }
  }
  
  
  // -----------movimento------------- 
  if(keyIsDown(LEFT_ARROW)){
    
    x -= 3;
    if(keyIsDown(LEFT_ARROW)){
      image(andando1,x,y_boneco)
    } else {
      image(img2, x, y_boneco)
    }
    
  }else{

  if (keyIsDown(RIGHT_ARROW)) {
    
    x += 3;
    if(keyIsDown(RIGHT_ARROW)){
      image(andando1,x,y_boneco)
    } else {
      image(img2, x, y_boneco)
    }
  }else{
      ellipse(image(img2, x, y_boneco),x,y_boneco);
  }
}
//   ----------colisão---------
//   tiro zumbi
  if(dist(yy + 7,y + 9, x_tiro + 5, y_tiro + 5) <= 9 + 5 ){
    tela = 5
  }
//   tiro humano
  if(dist(ff + 9,f + 9, x_tiro + 5, y_tiro + 5) <= 9 + 5 ){
//     resposta certa (lobby tela = 6)
    
    tela = 7
    
  }
  
  
//   -----zumbi-----
  
  ellipse(image(zumbi, 280, y),280, y, 30, 30);
  y = y + velocidade
  
  if(y > 450){
    velocidade = -2
  } if(y < 0){
    velocidade = 2
  }
  
  
//   ----humano----
  ellipse(image(humano, ff, f),ff, f, 30, 30);
  f = f + velocidade2
  ff = ff + vel2
  
  if(f > 450){
    velocidade2 = -4
  } if(f < 0){
    velocidade2 = 4
  }
  if(ff > 450){
    vel2 = -5
  } if(ff < 0){
    vel2 = 5
  }
  
  
//   -----conta ------
  textSize(20)
  text('acerte o resultado:', 0, 400)
  text('302 + 145', 0, 430)
  text('447 (acerte um humano)', 290, 400)
  text('448 (acerte um zumbi)', 280, 430)
  
//   --------------fim da fase 1---------------
}

// --------------------fase 3---------------
function fase3() {
//   -----------cenário-----------
  
  image(img, 0, 0)
  image(areia, 0, 360)
  image(areia, 128, 360)
  image(areia, 256, 360)
  image(areia, 384, 360)
  image(cactus1, 150, 250)
  image(cactus2, 400, 265)
  fill(200)
  text('Fase 3', 180, 30)
  
  
// ----------  jogo ----------------
//   --------- movimento do boneco ------------------
  //------------disparo-------------
  
  if (atirou == false){
    if (keyIsDown(32)){
    atirou = true;
    x_tiro = x;
      y_tiro = y_boneco+35;
  }
  }
  if(atirou == true){
    if(x_tiro<480){
      image(tiro1,x_tiro+16, y_tiro, 30, 10);
      x_tiro+=8;
    }else{
      x_tiro = x; //posição atual do boneco
      atirou = false;
    }
  }
  // ------------salto---------
  if(sobe == false){//se subir for falso, ou seja ainda não subiu
    if(y_boneco<305){//verifica a posição do boneco e ver se ele ta na posição certa (FAZ ELE DESCER)
      y_boneco +=4;//se estiver acima da posição certa então ele tem que descer
    }
    if(y_boneco == 305){//verifica se o boneco está no chao
      if(keyIsDown(UP_ARROW)){//se tiver então pode pular, então verifica se o jogador apertou para pular (seta ara cima)
        sobe = true;//se apertou então pode, então sobe vira verdadeiro
      }
    }
    
  }
  if(sobe == true){
    if(y_boneco>220){//e o boneco estando a menos do limite so salto dele
      y_boneco -=4;//então ele sobre ate o limite, que é 220
    }else{
      sobe = false;//após subir ate o limite, sobe fica falso, jogando ele pra o parametro false dnv fzd ele descer 
    }
  }
  
  
  // -----------movimento------------- 
  if(keyIsDown(LEFT_ARROW)){
    
    x -= 3;
    if(keyIsDown(LEFT_ARROW)){
      image(andando1,x,y_boneco)
    } else {
      image(img2, x, y_boneco)
    }
    
  }else{

  if (keyIsDown(RIGHT_ARROW)) {
    
    x += 3;
    if(keyIsDown(RIGHT_ARROW)){
      image(andando1,x,y_boneco)
    } else {
      image(img2, x, y_boneco)
    }
  }else{
      ellipse(image(img2, x, y_boneco),x,y_boneco);
  }
}
//   ----------colisão---------
//   tiro zumbi
  if(dist(yy + 7,y + 9, x_tiro + 5, y_tiro + 5) <= 9 + 5 ){
    tela = 6
//     (resp certa)
  }
//   tiro humano
  if(dist(ff + 9,f + 9, x_tiro + 5, y_tiro + 5) <= 9 + 5 ){
    
    tela = 5
  }
  
  
//   -----zumbi-----
  
  ellipse(image(zumbi, yy, y),yy, y, 30, 30);
  y = y + velocidade
  yy = yy + vel
  if(y > 450){
    velocidade = -2
  } if(y < 0){
    velocidade = 2
  }
  
  if(yy > 450){
    vel = -3
  } if(yy < 0){
    vel = 3
  }
//   ----humano----
  ellipse(image(humano, ff, f),ff, f, 30, 30);
  f = f + velocidade2
  
  
  if(f > 450){
    velocidade2 = -4
  } if(f < 0){
    velocidade2 = 4
  }
  
  
  
//   -----conta ------
  textSize(20)
  text('acerte o resultado:', 0, 400)
  text('547 + 729', 0, 430)
  text('1.276 (acerte um zumbi)', 290, 400)
  text('1.271 (acerte um humano)', 280, 430)
  
//   --------------fim da fase 1---------------
}

// ---------- tela de game over -------
function gameover(){
  
  fill(45)
  text('GAME OVER', 170, 180)
  text('Para voltar ao menu inicial aperte a tecla "ESC"', 60, 300)
  
  
  if(keyIsDown(ESCAPE)){
    tela = 0
  }
}

// ------- lobby -------
function lobby(){
  
  fill(45)
  text('PARA PASSAR DE FASE APERTE A TECLA ENTER', 5, 180)
  text('Para voltar ao menu inicial aperte a tecla "ESC"', 30,300)
  
  
  if(keyIsDown(ESCAPE)){
    tela = 0
  } else if(keyIsDown(ENTER)){
    tela = 4
  }
  
  
}

function instrucoes() {
  fill(10)
  background(176,224,230)
  image(img, 0,-100)
  image(setas, 50, 100, 120, 80)
  image(space, 187, 30)
  textSize(32)
  text('Instruções', 140, 30)
  textSize(15)
  text('Movimentar o Cowboy', 30, 180)
  text('Tiro', 300, 180)
  textSize(18)
  text('OBEJTIVO DO JOGO: Responder as questões apresentadas no lado inferior esquerdo da tela, e atribuir as respostas colocadas no canto inferior direita, em seguida atire no obejto correspondente com a resposta escolhida.', 100, 270, 300, 200)
}

function creditos() {
  fill(10)
  background(176,224,230)
  image(img, 0,-100)
  textSize(32)
  text('Créditos', 150, 30)
  textSize(18)
  text('Escola de Ciência e Tecnologia (UFRN)', 90, 170)
  text('Aluno: Lucas Gabriel Ferreira da Silva', 90, 198)
  text('© Todos os direitos reservados ', 120, 460)
  image(foto, 180, 250, 120, 150)
  
}

function keyPressed() {
  if(key == "ArrowUp" && l > 100){
    textSize(5)
    color(225)
    l = l - 80
    opcao = opcao - 1
  }
  if(key == "ArrowDown" && l < 230){
    textSize(5)
    color(225)
    l = l + 80
    opcao = opcao + 1
  }
  if(key == "Enter"){
    tela = opcao
  }
  if(key == "Escape"){
    tela = 0
  }
}