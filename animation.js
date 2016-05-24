/*
$(function(){
    
  var $bill = $(".bill");
  $bill.animate({ left : "+=0px" },1000, function loopBoat() {  
      $bill.animate({ 'top' : '45px'}, 500)
        .animate({ 'top' : '55px'}, 500, loopBoat);
    });
  });
*/

/*
$("#right").click(function(e) {
    $(".bill").animate({left: "+=50px"}, 300);
});

$("#left").click(function(e) {
    $(".bill").animate({left: "-=50px"}, 300);
});
*/

/*
var angle = 0;
setInterval(function(){
      angle+=4;
     $("#earth").rotate(angle);
},50);
*/

(function() {
    
    var $bill = $(".bill");
    var $p1 = $("#p1");
    var $p2 = $("#p2");
    var $re = $("#form");
    
    $p1.css({ 'opacity' : 0 });
    $p2.css({ 'opacity' : 0 });
    $re.css({ 'opacity' : 0 });
    
    $bill.animate({"left" : "+=0px"}, 500, function() {
        loopBoat();
        rotate();
        $.when($p1.delay(2000).animate({'opacity' : 1}, 800)).then(function() {
            return $.when($p2.animate({'opacity' : 1}, 800));
        }).then(function() {
			return $.when($re.animate({'opacity' : 1}, 1000));
		}).then(function() {return 0;});
    });
    
    function loopBoat() {
		$bill.animate({ left : "+=0px" },0, function loopBoat() {  
      $bill.animate({ 'top' : '45px'}, 500)
        .animate({ 'top' : '55px'}, 500, loopBoat);
	});
    }
    
    function rotate() {
        var $earth = $("#earth");
        var angle = 0;
        setInterval(function(){
              angle+=4;
             $earth.rotate(angle);
        },50);
    }
    
})();