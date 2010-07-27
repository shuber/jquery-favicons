/* http://github.com/shuber/jquery-favicons */
jQuery.fn.favicons = function(config) {
  var config = jQuery.extend({
    apply: function(element, url) { element.addClass(config.class_name).css('background-image', 'url(' + url + ')'); },
    class_name: 'favicon',
    missing_url: null,
    url: function(domain) { return 'http://www.google.com/s2/favicons?domain=' + domain; }
  }, config);

  return this.each(function() {
    var element = jQuery(this);

    var matches = element.attr('href').match(/^\w+:\/\/([^\/]+).*/);
    var domain = matches && matches.length ? matches.pop() : document.domain;

    var url = config.url(domain);
    var missing_url = config.missing_url;
    if (typeof missing_url == 'function') missing_url = missing_url(domain);

    var favicon = new Image();
    favicon.onload = function() { config.apply(element, url); };
    if (missing_url) favicon.onerror = function() { config.apply(element, missing_url); };

    favicon.src = url;
  });
}