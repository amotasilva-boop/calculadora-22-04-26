let contador=0;
const numero = document.getElementById("numero");
const mais = document.getElementById("Mais");
const menos = document.getElementById("Menos");
const zerar = document.getElementById("Zerar");

mais.addEventListener("click",()=>{
    contador ++;
    atualizar();
});

menos.addEventListener("click",()=>{
    contador --;
    atualizar();
});

zerar.addEventListener("click",()=>{
    contador = 0;
    atualizar();
});

function atualizar(){
    numero.textContent = contador;

    if(contador > 0){
        numero.style.color = "green";
    } else if (contador <0) {
        numero.style.color= "red";
    } else {
        numero.style.color= "black";
    }
}