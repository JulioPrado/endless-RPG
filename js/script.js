
const custoAtributos = 100;
/*O valor que gera o custo para upar um atr. */
const multipliVitalidade = 11;
/* Valor que multiplica a Vitalidade para gerar os Pontos de Vida  */

  var jogador = {
                'nome':undefined,
                'classe':undefined,
                'nivel':1,
                'ouro':200,
                'agilidade':1,
                'dano':1,
                'defesa':1,
                'vitalidade':1,
                'pv':undefined,

                'arma':undefined,
                'armadura':undefined,
                'elmo':undefined,
                'escudo':undefined,
                'bota':undefined,

                'estoqueItens':[],
                'estoqueAliados':[],

                'encantamento':'Nenhum',
                'aliado1':undefined,
                'aliado2':undefined
                };

function iniciaApp(){

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
  +"        </div>"
  +"        <div class='col'>"
  +"          Dano:"
  +"          <br>"
  +          jogador.dano+" <button onclick="+"uparAtributo('dano')"+" type='button' class='btn btn-light'>✚</button>"
  +"        </div>"
  +"      </div>"

  +"      <div class='row'>"
  +"        <div class='col'>"
  +"          Defesa:"
  +"          <br>"
  +          jogador.defesa+"          <button onclick="+"uparAtributo('defesa')"+" type='button' class='btn btn-light'>✚</button>"
  +"        </div>"
  +"        <div class='col'>"
  +"          Vitalidade:"
  +"          <br>"
  +          jogador.vitalidade+"<button onclick="+"uparAtributo('vitalidade')"+" type='button' class='btn btn-light'>✚</button>"
  +"        </div>"
  +"      </div>"

  +"      <div class='row'>"
  +"        <div class='col-12'>"
  +"          Pontos de Vida: "
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