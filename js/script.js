const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const div4 = document.getElementById('div4');
const div5 = document.getElementById('div5');
const div6 = document.getElementById('div6');
const div7 = document.getElementById('div7');
const div8 = document.getElementById('div8');
const div9 = document.getElementById('div9');

const pontuacao = document.getElementById('pontuacao');
const corEscolha = document.getElementById('escolha');

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
    
    div1.style.backgroundColor = cor[0]; 
    div2.style.backgroundColor = cor[1];
    div3.style.backgroundColor = cor[2];
    div4.style.backgroundColor = cor[3];
    div5.style.backgroundColor = cor[4];
    div6.style.backgroundColor = cor[5];
    div7.style.backgroundColor = cor[6];
    div8.style.backgroundColor = cor[7];
    div9.style.backgroundColor = cor[8];
}
function escolha(){
    colors = ['red','blue','black','yellow','green','darkcyan'];
    let pontuacao;
    
    for (let i = 1; i <= 9; i++) {
        const divElement = document.getElementById('div' + i);
        if (divElement) {
            divElement.onclick = function() {
                corEscolha.style.backgroundColor = colors[Math.round(Math.random()*6)];
                if(corEscolha == divElement){
                    pontuacao+=100;
                }
                alternarCor();
                
            };
        }
    }
}
escolha();