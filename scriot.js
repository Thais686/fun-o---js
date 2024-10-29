 function darPartida(){


 }
 function acelerar(){

    
 }
 function diminuirVelocidade(){

    
 }

 function desligarCarro(){

    
 }
 function estadoAtual(){

    
 }

 do{

estado= Number(prompt("Qual o estado do carro? 1- Ligado ou 2- desligado"))
partida=prompt("Voce deseja dar partida? Sim ou Não")

if(ligado){

    estadoAgora= prompt("O carro esta parado ou em movimento?")
}

if(estadoAgora== 'movimento'){


 let menu=prompt(" 1 para acelerar \n 2 para diminuir velocidade \n 3 para desligar o carro \n 4 o estado atual " )



 if(menu==1){

    acelerar()

 }

 else if(menu==2){

    diminuirVelocidade()
 }

 else if(menu==3){

    desligarCarro()
 }

 else if(menu==4){

    estadoAtual()
 }


}
 }while(estado==1)