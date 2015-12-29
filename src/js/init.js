(function($){
  $(function(){
    $('.button-collapse').sideNav();

    $('input[role=prices]')
      .on('click', function() {
        $(this).val('')
      })
      .autocomplete({
        lookup: prices,
        lookupLimit: 8,
        showNoSuggestionNotice: true,
        onSelect: function (suggestion) {
            console.log(suggestion)
            $('[role=price__k]').text(suggestion.data['Kaizoku Prices'] || '~');
            $('[role=price__p]').text(suggestion.data['Plenty Prices'] || '~');
        },
        formatResult: function(suggestion, currentValue) {
          return suggestion.value + '<span class="secondary-content"><span class="red-text lighten-1">' + suggestion.data['Kaizoku Prices'] + '</span> <span class="cyan-text">' + suggestion.data['Plenty Prices'] + '</span></span>';
        },
        onInvalidateSelection: function() {
          $('[role=price__k]').fadeOut(200, function() {
            $(this).html('&nbsp;').fadeIn();
          });
          $('[role=price__p]').fadeOut(200, function() {
            $(this).html('&nbsp;').fadeIn();
          });
        }
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-46624647-1', 'auto');
ga('send', 'pageview');
