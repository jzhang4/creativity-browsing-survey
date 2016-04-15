

document.addEventListener 'DOMContentLoaded', ->
  console.log 'domcontent loaded'
  #getFieldsFromExtension ['chrome_history_pages', 'chrome_history_visits'], (data) ->
  getFieldsFromExtension ['chrome_history_pages'], (data) ->
    console.log 'got fields from extension'
    console.log data
  #getWorkSitesVisitedInPast24Hours (work_sites_visited) ->
  #  document.querySelector('#rawdata').innerText = JSON.stringify(work_sites_visited)

