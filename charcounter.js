(function(window, document, undefined){

  var CharCounter = function(options){
    var _fieldToWatch = document.getElementById(options.fieldToWatch),
        _counterDisplay = document.getElementById(options.counterDisplay),
        _count = 0;

    function updateCount(event){
      var currentLength = _fieldToWatch.value.length;

      _counterDisplay.innerHTML = currentLength;
    }

    _fieldToWatch.addEventListener('keyup', updateCount, false)
  }

  // expose CharCounter to the world
  window.CharCounter = CharCounter

})(window, document)
