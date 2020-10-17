/*
Generates a random quote upon click
*/

$(function() {
  let quote = $('#quote-text');
  getQuote(quote);

  $('#getQuote').click(function(event) {
    event.preventDefault();
    getQuote(quote);
  })
});

function getQuote(quote) {
  let url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"

  $.getJSON(url, function(data) {
      quote.html(data.quoteText);
  });
}
