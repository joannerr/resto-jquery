$(document).ready(function(){
    var nb_actuel = 0;
    var nb_photo = 2;

    $('img').hide();
    $('img').first().show();

    $('.previous').on('click', function(){
        $('img').hide();

        if ( nb_actuel <=0 ){
            $('img').last().show();
            nb_actuel = 2;
        }
        else{
            nb_actuel -= 1;
            $('img:eq('+nb_actuel+')').show();
        }
    });


    $('.next').on('click', function(){
        $('img').hide();

        if (nb_actuel >= nb_photo){
            nb_actuel = 0;
            $('img').first().show();
        }
        else{
            nb_actuel += 1;
            $('img:eq('+nb_actuel+')').show();
        }
    });

});