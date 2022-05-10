
function save_options() {
    var refreshInterval = document.getElementById('refreshInterval').value;
    var ONOFF = document.getElementById('ONOFF').checked;
    chrome.storage.sync.set({
        refreshInterval: refreshInterval,
        ONOFF: ONOFF
    }, function() {
      var status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    });
  }
  

  function restore_options() {

    chrome.storage.sync.get({
        ONOFF: true,
        refreshInterval: 10000
    }, function(items) {
      document.getElementById('refreshInterval').value = items.refreshInterval;
      document.getElementById('ONOFF').checked = items.ONOFF;
    });
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
      save_options);