//Display profile preview
$("#defaultImage").click(function(e) {
  $("#imageProfile").click();
});
  
 function fasterPreview(uploader) {
   if(uploader.files && uploader.files[0]) {
     $('#defaultImage').attr('src', window.URL.createObjectURL(uploader.files[0]));
   }
 }
  
$('#imageProfile').change(function() {
  fasterPreview(this);
}); 