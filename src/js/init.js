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
            $('[role=price__k]').text(suggestion.data['Kaizoku Prices'] || '~');
            $('[role=price__p]').text(suggestion.data['Plenty Prices'] || '~');
        },
        formatResult: function(suggestion, currentValue) {
          return suggestion.value + '<span class="secondary-content"><span class="red-text lighten-1">' + suggestion.data['Plenty Prices'] + '</span> <span class="cyan-text">' + suggestion.data['Kaizoku Prices'] + '</span></span>';
        },
        onInvalidateSelection: function() {
            console.log('hi');
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
