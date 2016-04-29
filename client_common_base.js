// Generated by LiveScript 1.4.0
(function(){
  var getUrlParameters, once_available, once_extension_installed, is_extension_installed, getFieldsFromExtension, getFieldsFromExtensionUncached, start_spinner, end_spinner, get_num_days_with_browsing, get_eligibility, out$ = typeof exports != 'undefined' && exports || this;
  out$.getUrlParameters = getUrlParameters = function(){
    var url, hash, map, parts;
    url = window.location.href;
    hash = url.lastIndexOf('#');
    if (hash !== -1) {
      url = url.slice(0, hash);
    }
    map = {};
    parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value){
      return map[key] = decodeURIComponent(value).split('+').join(' ');
    });
    return map;
  };
  out$.once_available = once_available = function(selector, callback){
    var current_result;
    current_result = document.querySelectorAll(selector);
    if (current_result.length > 0) {
      return callback(current_result);
    } else {
      return setTimeout(function(){
        return once_available(selector, callback);
      }, 100);
    }
  };
  out$.once_extension_installed = once_extension_installed = function(callback){
    return is_extension_installed(function(is_installed){
      if (is_installed) {
        return callback();
      } else {
        return setTimeout(function(){
          return once_extension_installed(callback);
        }, 1000);
      }
    });
  };
  out$.is_extension_installed = is_extension_installed = function(callback){
    return sendExtension('is_extension_installed', {}, function(response){
      return callback(response === true);
    });
  };
  out$.getFieldsFromExtension = getFieldsFromExtension = function(fields_list, callback){
    return once_extension_installed(function(){
      return sendExtension('requestfields', {
        fieldnames: fields_list,
        pagename: 'something'
      }, function(response){
        return callback(response);
      });
    });
  };
  out$.getFieldsFromExtensionUncached = getFieldsFromExtensionUncached = function(fields_list, callback){
    return once_extension_installed(function(){
      return sendExtension('requestfields_uncached', {
        fieldnames: fields_list,
        pagename: 'something'
      }, function(response){
        return callback(response);
      });
    });
  };
  out$.start_spinner = start_spinner = function(){
    if ($('#spinoverlay').length === 0) {
      $('<div id="spinoverlay" style="width: 100vw; height: 100vh; position: fixed; top: 0px; left: 0px; pointer-events: none"></div>').appendTo('body');
    }
    return $('#spinoverlay').spin({
      scale: 5.0
    });
  };
  out$.end_spinner = end_spinner = function(){
    return $('#spinoverlay').spin(false);
  };
  out$.get_num_days_with_browsing = get_num_days_with_browsing = function(callback){
    return getFieldsFromExtensionUncached(['chrome_history_num_days_with_browsing'], function(data){
      return callback(data.chrome_history_num_days_with_browsing);
    });
  };
  out$.get_eligibility = get_eligibility = function(callback){
    return get_num_days_with_browsing(function(num_days_with_browsing){
      return callback(num_days_with_browsing > 20);
    });
  };
}).call(this);
