var circuts = [".purple-circuit", ".orange-circuit", ".blue-circuit"];
var directions = [".north", ".south", ".east", ".west"];
var activatins = ["assets/submarine.svg", "assets/button-finger.svg", "assets/radar-sweep.svg"];
var acts = [".stealth", ".weapons", ".radar"];
$('.icons').each(function(){
	$(this).click(function(){
		$(this).addClass('tint');
		checkRepairs();
		checkDamage();
		checkActivations();
	});
});

function checkRepairs(){
	for(var i = 0; i < circuts.length; i++) {
		if($(circuts[i] + ".tint").length === 4) {
			$(circuts[i]).each(function(){
				$(this).removeClass('tint');
			});
			alert('Self-Repair: ' + circuts[i]);
		}
	}
}

function checkDamage(){
	//check sectors
	for(var i = 0; i < directions.length; i++) {
		if($(directions[i] + " img.tint").length === 6) {
			alert('DAMAGE!!! Sector:' + directions[i]);
			$('.tint').each(function(){
				$(this).removeClass('tint');
			});
		}
	}
	//check nuclear
	if($('[src="assets/nuclear.svg"].tint').length === 6){
		alert('NUCLEAR DAMAGE!!!');
		$('.tint').each(function(){
			$(this).removeClass('tint');
		});
	}
}

function checkActivations(){
	for(var i = 0; i < activatins.length; i++) {
		if($('[src="' + activatins[i] + '"].tint').length > 0) {
			$(acts[i]).removeClass('hidden');
		} else {
			$(acts[i]).addClass('hidden');
		}
	}
}

$('#surface').click(function(){
	alert('Captain, Please announce your sector');
	for(var i = 0; i<4; i++){
		var alfa = prompt("Each person must type in the alphabet(if you mess up, your whole team has to start over):", 4 - i + " more times");	
		if(alfa !== "abcdefghijklmnopqrstuvwxyz"){
			i = -1;
		}
	}
	alert('DIVE DIVE DIVE!!! Breakdowns Reset, Captain may erase route!')
	$('.tint').each(function(){
		$(this).removeClass('tint');
	});
});
