$('#search-input').keyup(function(){
  if($(this).val() == ''){
    $('#search-input').hide();
    $('#clock').show();

  }
  
});

// Detecting if it's an url

$(document).ready(function(){
  $('#search-input').keypress(function(e){
    if(e.which == 13){
      e.preventDefault();
      abc = document.getElementById('search-input').value;
      if (abc.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)) {
        // It means URL
        window.open(`https://${abc}`, "_self", false);
    } else {
        window.open(`https://google.com/search?as_q=${abc}`, "_self", false);
      }
    }
  });
});

// clearing textarea
$("textarea").blur(function() {
  $(this).val("");
});
