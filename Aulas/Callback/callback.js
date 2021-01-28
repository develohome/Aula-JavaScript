
function exibir(id, callbackTrue, callbackFalse){
    if(id){
        callbackTrue();
    }else{
        callbackFalse();
    }
}
var callbackTrue = function(){
    console.log("localização concluida com sucesso !!");
} 
var callbackFalse = function() {
    console.log("Não localizado");
}

exibir(false, callbackTrue, callbackFalse);