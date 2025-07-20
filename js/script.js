const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const div4 = document.getElementById('div4');
const div5 = document.getElementById('div5');
const div6 = document.getElementById('div6');
const div7 = document.getElementById('div7');
const div8 = document.getElementById('div8');
const div9 = document.getElementById('div9');

function ramdom(){
    let colors = ['red','blue','black','yellow','green','darkcyan']
    
    
    return colors[ram];
}
function alternarCor() {
    div1.style.backgroundColor = ramdom(); 
    div2.style.backgroundColor = ramdom();
    div3.style.backgroundColor = ramdom();
    div4.style.backgroundColor = ramdom();
    div5.style.backgroundColor = ramdom();
    div6.style.backgroundColor = ramdom();
    div7.style.backgroundColor = ramdom();
    div8.style.backgroundColor = ramdom();
    div9.style.backgroundColor = ramdom();
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