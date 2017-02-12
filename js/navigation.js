//Save Direction of Animate
var Direction = {"drum" : 0, "bass" : 1, "piano" : 2, "settings" : 3}; 
var stack = [];

$(document).ready(function () {
	$('img').click(function () {
		switch(event.target.id){
            case "drum":
                $('#wrapper').animate({top:'-70%'}, 300);
                $('#menu').animate({top:'-70%'}, 600);

                $('#iframe-drum').css('visibility', 'visible');
                $('#iframe-drum').animate({top:'0%'}, 300), $('#iframe-drum').focus();

                stack.push(Direction.drum);
                break;
            case "bass":
                $('#wrapper').animate({left:'-100%'}, 450);
                $('#menu').animate({left:'-100%'}, 900);

                $('#kart').css('visibility', 'visible');
                $('#kart').animate({left:'0%'}, 450), $('#kart').focus(); 

                stack.push(Direction.bass);
                break;
            case "piano":
                $('#wrapper').animate({right:'-100%'}, 450);
                $('#menu').animate({right:'-100%'}, 900);

                $('#maple').css('visibility', 'visible');
                $('#maple').animate({left:'0%'}, 450), $('#maple').focus();

                stack.push(Direction.piano);
                break;
            case "settings":
                $('#wrapper').animate({bottom:'-70%'}, 300);
                $('#menu').animate({bottom:'-70%'}, 600);

                $('#fifa').css('visibility', 'visible');
                $('#fifa').animate({top:'0%'}, 300), $('#fifa').focus();

                stack.push(Direction.settings);
                break;
            default:
                break;
        }
        $('#back').css('visibility', 'visible');
	});

    $('#back').click(function(){
        switch(stack.pop()){
            case Direction.drum:
                $('#wrapper').animate({top:'0%'}, 300);
                $('#menu').animate({top:'40%'}, 600);

                $('#iframe-drum').animate({top:'-150%'}, 300, function(){
                    $('#back').css('visibility', 'hidden');
                    $('#iframe-drum').css('visibility', 'hidden');
                });
                break;
            case Direction.bass:
                $('#wrapper').animate({left:'0%'}, 450);
                $('#menu').animate({left:'45%'}, 900);

                $('#kart').animate({left:'-150%'}, 300, function(){
                    $('#back').css('visibility', 'hidden');
                    $('#kart').css('visibility', 'hidden');
                })
                break;
            case Direction.piano:
                $('#wrapper').animate({right:'0%'}, 450);
                $('#menu').animate({right:'45%'}, 900);

                $('#maple').animate({left:'150%'}, 300, function(){
                    $('#back').css('visibility', 'hidden');
                    $('#maple').css('visibility', 'hidden');
                })
                break;
            case Direction.settings:
                $('#wrapper').animate({bottom:'0%'}, 300);
                $('#menu').animate({bottom:'40%'}, 600);

                $('#fifa').animate({top:'150%'}, 300, function(){
                    $('#back').css('visibility', 'hidden');
                    $('#fifa').css('visibility', 'hidden');
                })
                break;
            default:
                break;  
        }
    });
});

//UFO Animation
$(document).ready(function(){
    moveImg('#ufo');
});

function makeNewPosition(){
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];       
}

function moveImg(ID){
    var newq = makeNewPosition();
    $(ID).animate({ top: newq[0], left: newq[1] }, 15000, function(){
        setTimeout(moveImg(ID), 2000);
    });
};