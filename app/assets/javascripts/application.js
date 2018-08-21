// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require carousel.js
//= require tabs.js
//= require jquery3
//= require_tree .

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

    $('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

});