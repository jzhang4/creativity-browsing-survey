display_page = (pagename) ->
  $('.toplevel').hide!
  if pagename?
    $('#' + pagename).show!

get_num_days_with_browsing = (callback) ->
  data <- getFieldsFromExtensionUncached ['chrome_history_num_days_with_browsing']
  callback data.chrome_history_num_days_with_browsing

extension_not_installed = ->
  display_page 'please_install_extension'
  once_extension_installed ->
    extension_is_installed!

not_enough_browsing_history = ->
  display_page 'not_enough_browsing_history'

start_survey = ->
  display_page 'survey'

post_json = (url, data, callback) ->  
  $.ajax {
    type: 'POST'
    url: url
    contentType: 'application/json'
    data: JSON.stringify(data)
    error: (err) ->
      console.log 'had error while posting data'
      console.log err
    complete: ->
      callback?!
  }

post_history_pages_compressed = (history_pages, hid, callback) ->
  post_json '/log_history_pages', {
    data: history_pages
    user: username
    hid
    time: hid
    timeloc: new Date(hid).toString()
  }, callback

post_history_visits_compressed_parts = (history_visits_parts, hid, callback) ->
  num_parts = history_visits_parts.length
  <- async.forEachOfSeries history_visits_parts, (history_visits, idx, donecb) ->
    post_json '/log_history_visits', {
      data: history_visits
      user: username
      hid
      time: hid
      timeloc: new Date(hid).toString()
      idx
      totalparts: num_parts
    }, donecb
  callback?!

post_history = (data, callback) ->
  <- post_history_pages data.chrome_history_pages
  <- post_history_visits data.chrome_history_visits
  callback?!

export submit_survey = ->
  display_page 'submitting_please_wait'
  start_spinner!
  data1 <- getFieldsFromExtensionUncached ['chrome_history_pages_compressed']
  data2 <- getFieldsFromExtensionUncached ['chrome_history_visits_compressed_parts']
  console.log data1
  console.log data2
  hid = Date.now()
  <- post_history_pages_compressed data1.chrome_history_pages_compressed, hid
  <- post_history_visits_compressed_parts data2.chrome_history_visits_compressed_parts, hid
  end_spinner!

extension_is_installed = ->
  num_days_with_browsing <- get_num_days_with_browsing!
  if num_days_with_browsing > 20
    start_survey!
  else
    not_enough_browsing_history!

get_username = ->
  params = getUrlParameters()
  if params.user?
    return params.user
  if params.username?
    return params.username
  return 'guest' + [Math.floor(10*Math.random()) for i from 0 to 10].join('')

$(document).ready ->
  export username = get_username()
  display_page null
  is_installed <- is_extension_installed!
  if is_installed
    extension_is_installed()
  else
    extension_not_installed()
