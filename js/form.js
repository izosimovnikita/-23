function alert(content, afterFunction) {
    $('<div class="alertm_overlay"></div>').appendTo('body');
    $('<div class="alertm_all"><a href="#" onclick="alert_close(' + afterFunction + '); return false" class="alertm_close">x</a><div class="alertm_wrapper">' + '<div class=\'alertm_h1\'>Заявка успешно отправлена.</div>' + content + '</div><div class="alertm_but" onclick="alert_close(' + afterFunction + '); return false">OK</div></div>').appendTo('body');
    $(".alertm_overlay, .alertm_all").fadeIn("slow");
    $('.alertm_all').css('margin-top', (-1) * ($('.alertm_all').height()) + 'px');
}

function alert_close(afterFunctionClose) {
    $(".alertm_overlay, .alertm_all").remove();
    document.getElementById("popupForm").style.display = 'none';
    afterFunctionClose;
}

$(document).ready(function() {
    
	$("form").submit(function() {
        
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			alert('Ожидайте, совсем скоро Вам перезвонят.', '');
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;
        
	});

});