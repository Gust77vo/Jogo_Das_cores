const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const div4 = document.getElementById('div4');
const div5 = document.getElementById('div5');
const div6 = document.getElementById('div6');
const div7 = document.getElementById('div7');
const div8 = document.getElementById('div8');
const div9 = document.getElementById('div9');
const corEscolha = document.getElementById('escolha');

function ramdom(listaColors){
    for(let i = listaColors.length -1;i>0;i--){
        const j = Math.floor(Math.random() * (i+1));
        [listaColors[i],listaColors[j]] = [listaColors[j],listaColors[i]];
    }
    return listaColors;
}

function alternarCor() {
    let colors = ['red','blue','black','yellow','green','darkcyan','red','blue','black','yellow','green','darkcyan'];
    let cor = ramdom(colors)
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
    alternarCor();

}
div1.onclick = function(){
    escolha();
}
div2.onclick = function(){
    escolha();
}
div3.onclick = function(){
    escolha();
}
div4.onclick = function(){
    escolha();
}
div5.onclick = function(){
    escolha();
}
div6.onclick = function(){
    escolha();
}
div7.onclick = function(){
    escolha();
}
div8.onclick = function(){
    escolha();
}
div9.onclick = function(){
    escolha();
}