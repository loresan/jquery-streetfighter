$(document).ready(function(){
     //starts the intro logo+game directions
     LogoIntro();
     playCool();
     gameStart();

	
});


function gameStart(){
	$('.ryu').mouseenter(function(){
	$('.ryu-still').hide();
    $('.ryu-ready').show();
	});

    $('.ryu').mouseleave(function(){
	$('.ryu-still').show();
    $('.ryu-ready').hide();
	});

	$('.ryu').mousedown(function(){
	 playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate(
    	{'left': '1020px'},500,
    	function(){
    		$(this).hide();
    		$(this).css("left","520px");
    	}

    	);
	});


	$('.ryu').mouseup(function(){
	$('.ryu-throwing').hide();
	$('.ryu-ready').show();

	});

}

function playCool(){
	
    $("body").keydown(function(e){
		if (e.which == 88) {
		//starts playing music
		$("#theme").trigger('pause');
		$("#sound_cool").trigger('play');
		$('.ryu-still').hide();
	    $('.ryu-ready').hide();
	    $('.ryu-cool').show();
       }
	});

    $("body").keyup(function(){
    //pause playing and go back to time 0
	$("#sound_cool").trigger('pause');
	$("#sound_cool").prop("currentTime",0);
    $('.ryu-still').show();
    $('.ryu-cool').hide();
	});

}

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}


function LogoIntro() {
  $("#theme").trigger('play');
  $('#logo').fadeIn(3500, function() {
    $(this).fadeOut(1000, function() {
      $('.how_to_first').fadeIn(1500, function() {
       $('.how_to_second').fadeIn(1000, function(){
       $('.mini_logo').fadeIn(800);
            });
          })
        })
    })
}

