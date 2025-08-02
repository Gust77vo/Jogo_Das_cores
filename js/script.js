const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const div4 = document.getElementById('div4');
const div5 = document.getElementById('div5');
const div6 = document.getElementById('div6');
const div7 = document.getElementById('div7');
const div8 = document.getElementById('div8');
const div9 = document.getElementById('div9');
const inicia = document.getElementById('inicia');

let pontos = 0;
let ramdomize = ' ';
const corEscolha = document.getElementById('escolha');
let tempo = 0;
let rodada = 0;

function ram(listaColors){
    for(let i = listaColors.length -1;i>0;i--){
        const j = Math.floor(Math.random() * (i+1));
        [listaColors[i],listaColors[j]] = [listaColors[j],listaColors[i]];
    }
    return listaColors;
}
function alternarCor() {
    let colors = ['red','blue','black','yellow','green','darkcyan','red','black','blue'];
    let cor = ram(colors);
    
    if(rodada != 0){ 

        div1.style.backgroundColor = cor[0]; 
        div2.style.backgroundColor = cor[1];
        div3.style.backgroundColor = cor[2];
        div4.style.backgroundColor = cor[3];
        div5.style.backgroundColor = cor[4];
        div6.style.backgroundColor = cor[5];
        div7.style.backgroundColor = cor[6];
        div8.style.backgroundColor = cor[7];
        div9.style.backgroundColor = cor[8]; 

        const colors2 = ['red', 'blue', 'black', 'yellow', 'green', 'darkcyan'];
        ramdomize = colors2[Math.floor(Math.random() * colors2.length)];
        corEscolha.style.backgroundColor = ramdomize;

    }
}

function escolha() {
    for (let i = 1; i <= 9; i++) {
        const divElement = document.getElementById('div' + i);
        if (divElement) {
            divElement.onclick = function() {
                const corAtual = divElement.style.backgroundColor;
                if (corAtual.toLowerCase() == ramdomize.toLowerCase() && rodada != 0) {
                    pontos += 100;
                }
                document.getElementById('pontuacao').innerHTML = pontos;
                alternarCor();
            };
        }
    }

}
function temporizador(){
    const intervalo = setInterval(() => {
        tempo++; 
        document.getElementById('tempo').innerHTML = tempo;
        rodada = 1;

        if (tempo >= 10) {
            window.alert("acabou o tempo você fez ." + pontos);
            rodada = 0;
            tempo = 0;
            pontos = 0;
            document.getElementById('pontuacao').innerHTML = pontos;
            document.getElementById('tempo').innerHTML = tempo;
            for (let i = 1; i <= 9; i++) {
                const divElement = document.getElementById('div' + i);
                if(divElement){
                    divElement.style.backgroundColor = 'black'; 
                }
            }
            clearInterval(intervalo);
        }
    }, 1000);
}
inicia.addEventListener('click', function() {
    if( rodada == 0){
        alternarCor();
        temporizador()
        escolha();
        
    }
}); 






