function trocarImage01() {
    document.getElementById("img01").src="/img/monitor.jpg";
} 

$("trocarImage02").attr("src","/img/iconmonitor.jpg");

function trocarImage02() {
    document.getElementById("img02").src="/img/nintendo.jpg";
}

function trocarImage03() {
    document.getElementById("img03").src="/img/pcgamer.jpg";
}
    





////// pagina de login validação ////
function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){
        alert('Sucesso');
        
    }else{
        alert('Usuario ou senha incorretos');
    }

}


