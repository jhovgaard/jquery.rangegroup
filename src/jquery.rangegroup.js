// Licensed under the MIT license (https://raw.githubusercontent.com/jhovgaard/jquery.rangegroup/master/LICENSE)

$(document).on('input', 'input[range-group]', function() {
  selectedRange = $(this);
  var group = selectedRange.attr('range-group');
  var max = selectedRange.attr('range-group-max-sum');
  var total = 0;

  var ranges = $('input[range-group=' + group + ']');

  ranges.each(function(i, item) {
    console.log(item, $(item).val())
    total += parseInt($(item).val());
  });

  var left = max - total;

  if(left < 0) {
    var half = Math.ceil(left / 2);

    ranges.each(function(i, item) {
      $item = $(item);
      if ($item.attr('id') == selectedRange.attr('id')) {
        return true;
      };
      var newValue = parseInt($item.val()) + half;
      $item.val(newValue);
    });
  }
});