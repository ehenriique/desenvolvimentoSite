//// troca icon por imagem da home ////

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

    if(login == "admin@admin.com" && senha == "admin"){
        alert('Sucesso');
        
    }else{
        alert('Usuario ou senha incorretos');
    }

}

////////////////////////////


//// pagina de cadastro do site com jquery////


$(document).ready(function(){
   
    $('.step').hide();
    $('.step').first().show();

   
    var passoexibido = function(){
        var index = parseInt($(".step:visible").index());
        if(index == 0){
         
            $("#prev").prop('disabled',true);
        }else if(index == (parseInt($(".step").length)-1)){
          
            $("#next").prop('disabled',true);
        }else{
            $("#next").prop('disabled',false);            
            $("#prev").prop('disabled',false);
        }
        $("#passo").html(index + 1);

    };
    
    passoexibido();

    $("#next").click(function(){
        $(".step:visible").hide().next().show();
        passoexibido();
    });

    $("#prev").click(function(){
        $(".step:visible").hide().prev().show();
        passoexibido();
    });

 });


////////////////////////