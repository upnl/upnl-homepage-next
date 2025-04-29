$(function() {
  $("#presenter").chosen();
  $("#participants").chosen();
  $('.controls textarea').elastic();
});
var order_list = $('#present_orders').val().split(" ");
var presenters = $('#presenters').val().split(" ");

function moveUp(index) {
  if (index > 1) {
    var currentRow = $('tr.row').get(index);
    var removedRow = currentRow.parentNode.removeChild(currentRow);
    var previousRow = $('tr.row').get(index - 1);
    previousRow.parentNode.insertBefore(removedRow, previousRow);
    var temp = presenters[index - 1];
    presenters[index - 1] = presenters[index - 2];
    presenters[index - 2] = temp;
    $('#presenters').val(presenters.join(" "));
    temp = order_list[index - 1];
    order_list[index - 1] = order_list[index - 2];
    order_list[index - 2] = temp;
    $('#present_orders').val(order_list.join(" "));
  }
}

function moveDown(index) {
  if (index < $('tr.row').length - 1) {
    var currentRow = $('tr.row').get(index);
    var removedRow = currentRow.parentNode.removeChild(currentRow);
    if (index < $('tr.row').length - 1) {
      var nextRow = $('tr.row').get(index+1);
      nextRow.parentNode.insertBefore(removedRow, nextRow);
    }
    else
      $('tr.row').get(index).parentNode.appendChild(removedRow);
    var temp = presenters[index - 1];
    presenters[index - 1] = presenters[index];
    presenters[index] = temp;
    $('#presenters').val(presenters.join(" "));
    temp = order_list[index - 1];
    order_list[index - 1] = order_list[index];
    order_list[index] = temp;
    $('#present_orders').val(order_list.join(" "));
  }
}
