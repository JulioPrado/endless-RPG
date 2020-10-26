
const custoAtributos = 100;
/*O valor que gera o custo para upar um atr. */
const multipliVitalidade = 11;
/* Valor que multiplica a Vitalidade para gerar os Pontos de Vida  */
const adicionalAtaqueGeral = 3;
/* limite do valor aleatório que será somado em qualquer ataque */
const multipliChanceAtaqEsq = 0.3;
const multipliChanceEfeito = 0.4;

var jogador = 
{
  'nome':undefined,
  'classe':undefined,
  'nivel':1,
  'ouro':20000,
  'agilidade':1,
  'chanceAtaqEsq':null,
  'dano':1,
  'danoEfetivo':1.01,
  'defesa':1,
  'defesaEfetiva':1.01,
  'inteligencia':1,
  'chanceEfeito':0.4,
  'vitalidade':1,
  'pv':11,
  'estado':null,

  'arma':undefined,
  /* nome, tipo, dano, ataqueEspecial() */
  'armadura':undefined,
  /* nome, bonus, defesaEspecial()  */
  'elmo':undefined,
   /* nome, bonus, defesaEspecial()  */
  'escudo':undefined,
   /* nome, bonus, defesaEspecial()  */
  'bota':undefined,
   /* nome, bonus, defesaEspecial()  */

  'estoqueItens':[],
  'estoqueAliados':[],

  'encantamento':'Nenhum',
  'aliado1':undefined,
  'aliado2':undefined
  };

function inimigo(nome,tipo,nivel,agilidade,chanceAtaqEsq,danoEfetivo,defesaEfetiva,chanceEfeito){
  this.nome=nome;
  this.tipo=tipo;
  this.nivel=nivel;
  this.agilidade=agilidade;
  this.chanceAtaqEsq=chanceAtaqEsq;
  this.danoEfetivo=danoEfetivo;
  this.defesaEfetiva=defesaEfetiva;
  this.chanceEfeito=chanceEfeito;
  this.pv=pv;
  this.estado=null;
}

function iniciaApp(){

}

function informa(mensagem){
  el=document.getElementById('barraTopo');

  $ (el).append(
    "<div class='position-absolute w-100 my-3 float-right alert alert-success alert-dismissible'> "
    +"<strong>Aviso</strong>: "+mensagem
    +"<button class='close' type='button' data-dismiss='alert'>"
    +    "×"
    +"</button>"
    +"</div>"
    );
}

function escondeDiv(id){
 let botaoEsconde= document.getElementById("esconde"+id);
 let botaoExibe= document.getElementById("exibe"+id);
 let el=document.getElementById(id);

 el.style.display="none";
 botaoEsconde.style.display="none";
 botaoExibe.style.display="inline";

}

function exibeDiv(id){
 let botaoEsconde= document.getElementById("esconde"+id);
 let botaoExibe= document.getElementById("exibe"+id);
 let el=document.getElementById(id);

 el.style.display="block";
 botaoEsconde.style.display="inline";
 botaoExibe.style.display="none";
}

function atualizaBarraTopo(){
  let el=document.getElementById('barraTopo');

  el.innerHTML= "<span style='float:left;'>"+jogador.classe+" "+jogador.nome+
  "</span><span style='text-center'> Nv:"+jogador.nivel+
  "</span> <span style='text-align:right;float:right'> Ouro: "+jogador.ouro.toFixed(2) +"</span>"

}

function atualizaPersonagem(){
  let el=document.getElementById('personagem');

  jogador.chanceAtaqEsq=jogador.agilidade*0.3;
  jogador.chanceEfeito=jogador.inteligencia*0.4;
  jogador.pv=jogador.vitalidade*multipliVitalidade;

  el.innerHTML=(""
  +"<h2>PERSONAGEM</h2>"

  +"    <div class='container'>"
        
  +"      <div class='row'>"
  +"        <div class='col'>"
  +          jogador.classe
  +"          <br>"
  +"          <button onclick='escolheClasse();' class='btn btn-sm btn-outline-info'>trocar</button>"
  +"        </div>"
  +"        <div class='col'>"
  +"          Encantamento:<br>"
  +          jogador.encantamento
  +"       </div>"
  +"      </div>"
  +"     <div class='row'>"
  +"        <div class='col'>"
  +"          Agilidade:"
  +"          <br>"
  +          jogador.agilidade+" <button onclick="+"uparAtributo('agilidade')"+" type='button' class='btn btn-light'>✚</button>"
  +"        <br>"+ jogador.chanceAtaqEsq.toFixed(1) +"% de chance Ataques adicionais e esquiva"
  +"        </div>"
  +"        <div class='col'>"
  +"          Inteligência:"
  +"          <br>"
  +          jogador.inteligencia+" <button onclick="+"uparAtributo('inteligencia')"+" type='button' class='btn btn-light'>✚</button>"
  +"        <br>"+ jogador.chanceEfeito.toFixed(1) +"% de chance de efeitos especiais ataque mágico"
  +"        </div>"
  +"      </div>"

  +"      <div class='row'>"
  +"        <div class='col'>"
  +"          Defesa:"
  +"          <br>"
  +          jogador.defesa+"          <button onclick="+"uparAtributo('defesa')"+" type='button' class='btn btn-light'>✚</button>"
  +"        <br>"+ jogador.defesaEfetiva +" defesa efetiva"
  +"        </div>"
  +"        <div class='col'>"
  +"          Dano:"
  +"          <br>"
  +          jogador.dano+"<button onclick="+"uparAtributo('dano')"+" type='button' class='btn btn-light'>✚</button>"
  +"        <br>"+ jogador.danoEfetivo +" dano efetivo"
  +"        </div>"
  +"      </div>"

  +"      <div class='row'>"
  +"       <div class='col'>"
  +"          Vitalidade:"
  +"          <br>"
  +          jogador.vitalidade+"<button onclick="+"uparAtributo('vitalidade')"+" type='button' class='btn btn-light'>✚</button>"
  +"        </div>"
  +"        <div class='col'>"
  +"          Pontos de Vida: <br> "
  +          jogador.pv
  +"        </div>"
  +"      </div>"

  +"      <div class='row'>"
  +"        <div class='col'>"
  +          jogador.aliado1
  +"        </div>"
  +"        <div class='col'>"
    +        jogador.aliado2
      +"    </div>"
      +"  </div>"
      +"</div>"
    +"")
}

function escolheClasse(){
  let classe=prompt("Escolha uma classe:\n[ 1 ] Guerreiro\n[ 2 ] Arqueiro\n[ 3 ] Mago\n\nFique tranquilo, você poderá trocar mais tarde.");
  switch(classe){
    case '1':
      jogador.classe='Guerreiro';
      break;
    case '2':
      jogador.classe='Arqueiro';
      break;
    case '3':
      jogador.classe='Mago';
      break;
    default:
      escolheClasse();
      break;
  }
  atualizaBarraTopo();
  atualizaPersonagem();
}

function novoJogo(){
  jogador.nome=prompt("Digite o nome do seu personagem:");
  if (jogador.nome==''){
    let random = Math.random()*10000;
    
    jogador.nome="Jogador"+random.toFixed();
  }
  escolheClasse();
  


document.getElementById('iniciado').style.display="block";

atualizaBarraTopo();
atualizaPersonagem();
}

function uparAtributo(atributo){
  let custo = jogador[atributo]*custoAtributos;
  if(jogador.ouro<custo){
    alert('você não tem ouro suficiente.\nOuro necessário:'+custo);
    }else{
      if (confirm('Isso irá gastar: '+custo+' do seu ouro. Confirmar?')) {
        jogador.ouro=jogador.ouro-custo;
        jogador[atributo]++;
        atualizaBarraTopo();
      }
    }
  atualizaPersonagem();
}

function carregaJogo(){

}

/* Arena
/*------------------------------------------------- */
var venceu = null;

function verificarEstado(pessoa){
 if (pessoa.estado != normal) {
  /* switch com os efeitos de cada estado*/
  verificarVida(pessoa.vida);
  }
}

function verificarVida(pessoa){
  if (pessoa.vida <=0){
    if (pessoa==jogador) {
      venceu=false;
      //break;
    }else{
      venceu=true;
      //break;
    }
  }
}

function verificarOrdemAtaques(combat1, combat2){
if(combat1.agilidade>combat2.agilidade){
   return ('jogadorComeça');
   }else{
        return ('inimigoComeça');
        };
}

function randomAte(max){
  console.log(Math.floor(Math.random() * max + 1));
  /* assim fica de 1 até o max, se tirar o +1 fica de 0 até o max-1 */
}

function randomEntre(min,max){
   console.log(Math.floor(Math.random() * (max-min+1)+min));
}

function realizarAtaque(atacante, alvo){
  

}

/* *** Inicio do combate *** */
function iniciarBatalha(){
  let ambosVivos=true;
  let turno=1;

  if (verificarOrdemAtaques(jogador,inimigo)=='jogadorComeça'){
   do{

    verificarEstado(jogador);
    verificarEstado(inimigo);
   
    realizarAtaque(jogador, inimigo);
    realizarAtaque(inimigo, jogador);
   
   turno++;
   } while (ambosVivos);
  }else{ /* Se inimigo tiver mais agilidade  */
     do{
      verificarEstado(inimigo);
      verificarEstado(jogador);
      
      realizarAtaque(inimigo, jogador); 
      realizarAtaque(jogador, inimigo);
     
     turno++;
     }while(ambosVivos);
    }
} /* fim function iniciarBatalha  */

function testeArena(){
  console.log(document.getElementById('opcVerbose').checked);
  console.log(document.getElementById('selectArena').value);

}

