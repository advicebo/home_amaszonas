$(document).on('ready',function(){

    $('#mailer').click(function(){
        openDialog();
    });
	

   

	  
});

 function openDialog() {
    Avgrund.show( "#default-popup" );
}
function closeDialog() {
    Avgrund.hide();
 }