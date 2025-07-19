const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const div4 = document.getElementById('div4');
const div5 = document.getElementById('div5');
const div6 = document.getElementById('div6');
const div7 = document.getElementById('div7');
const div8 = document.getElementById('div8');
const div9 = document.getElementById('div9');

// Variável para controlar qual cor a div está no momento
let estaAzul = true; 

// Função que muda a cor da div
function alternarCor() {
    if (estaAzul) {
        div1.style.backgroundColor = 'salmon'; // Muda para salmão
        div2.style.backgroundColor = 'red';
        div3.style.backgroundColor = 'blue';
        div4.style.backgroundColor = 'blueviolet';
        div5.style.backgroundColor = 'chartreuse';
        div6.style.backgroundColor = 'yellow';
        div7.style.backgroundColor = 'yellowgreen';
        div8.style.backgroundColor = 'green';
        div9.style.backgroundColor = 'darkcyan';
    } else {
        div1.style.backgroundColor = 'lightblue'; // Volta para azul claro
    }
    estaAzul = !estaAzul; // Inverte o estado da cor
    
}
div1.onclick = function(){
    return alternarCor();
}
div2.onclick = function(){
    return alternarCor();
}
div3.onclick = function(){
    return alternarCor();
}
div4.onclick = function(){
    return alternarCor();
}
div5.onclick = function(){
    return alternarCor();
}
div6.onclick = function(){
    return alternarCor();
}
div7.onclick = function(){
    return alternarCor();
}
div8.onclick = function(){
    return alternarCor();
}
div9.onclick = function(){
    return alternarCor();
}