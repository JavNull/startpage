$('#search-input').keyup(function(){
  if($(this).val() == ''){
    $('#search-input').hide();
    $('#clock').show();
    $("body").css("background-color", "rgb(24, 24, 29)");
  }
  
});

// Detecting if it's an url

$(document).ready(function(){
  $('#search-input').keypress(function(e){
    if(e.which == 13){
      e.preventDefault();
      abc = document.getElementById('search-input').value;
      if (abc.match(/(http|https)?:\/\//g)){
        // for urls with http/https
        window.open(`${abc}`, "_self", false);

      } else if (abc.match(/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/g)) {
        // for ip addresses
        window.open(`http://www.${abc}`, "_self", false);

      } else if (abc.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)) {
        // for urls without http://www or https://www
        window.open(`http://www.${abc}`, "_self", false);

      } else if (abc.match(/y\/.+/g)) {
        // y/ prefix
        abc_without_prefix = abc.replace(/y\//g, '')
        window.open(`https://www.youtube.com/results?search_query=${abc_without_prefix.replace(/ /g, '+')}`, "_self", false);

      } else {
        window.open(`https://google.com/search?as_q=${abc}`, "_self", false);

      }
    }
  });
});

// clearing textarea
$("textarea").blur(function() {
  $("body").css("background-image", "none");
  $("#search-input").val(''); 
  $('#search-input').hide();
  $('#clock').show(); 
});
