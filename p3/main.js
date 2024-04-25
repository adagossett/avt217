$(document).ready(function(){
    $("#ketchup").click(function(){
        if ($('#ketchup').hasClass('new')) {
           
            $('#ketchup').removeClass('new');
        } else {
            
            $('#ketchup').addClass('new');
        }
    });
});
