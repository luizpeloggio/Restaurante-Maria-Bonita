$(document).ready(function(){

    function changeLanguage(){
        $('#language-selector').on("change", function(){
        var idioma = $(this).val();
        console.log("O idioma selecionado foi: "+idioma);

        if(idioma === "Inglês"){
            window.location.href = "versaoIngles.html";
            
        }else{
            window.location.href = "index.html";
        }

    });
    }changeLanguage();
    
    function passQuote(){
        let count = 0;
        let $depoimentos = $(".depoimentos .container .depoimentos");
        let total = $depoimentos.length;

        $depoimentos.hide().eq(0).show();


        $("#setaAnt").on('click', function(){
            console.log("oi");
            count--;
            if(count < 0){
                count = total - 1;
            }
            $depoimentos.hide().eq(count).show();

        });

        $("#setaProx").on('click', function(){
            count++;
            if(count == total){
                count = 0;
            }
            $depoimentos.hide().eq(count).show();
        });


    }passQuote();
});