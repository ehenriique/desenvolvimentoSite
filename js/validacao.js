
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
   
