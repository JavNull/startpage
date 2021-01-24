$('#search-input').keyup(function(){
  if($(this).val() == ''){
    $('#search-input').hide();
    $('#clock').show();
  }
  
});
