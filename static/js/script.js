$(document).ready(function () {
$('.sidenav').sidenav({
  edge: "right"
});
$('.fixed-action-btn').floatingActionButton();
$('select').formSelect();

// add row

/*  dynamic form fileds with the help of https://bootstrapfriendly.com/blog/dynamically-add-or-remove-form-input-fields-using-jquery/ */

$("#addIngredientRow").click(function () {
  var html = '';
  html += '<div class="row" id="inputIngredientRow">';
    html += '<div class="input-field col s10">';
    html += '<textarea id="ingredients" name="ingredients" class="materialize-textarea"></textarea>';
    html += '<label for="ingredients">Ingredients including amount and unit</label>';
    html += '</div>';
    html += '<div class="col s1">';
    html += '<a class="btn" id="removeIngredient"><i class="fas fa-minus-circle"></i></a>';
    html += '</div>';
  html += '</div>';

  $('#newIngredient').append(html);
  
});

// remove row

$(document).on('click', '#removeIngredient', function () {
  $(this).closest('#inputIngredientRow').remove();

});

$("#addMethodRow").click(function () {
  var html = '';
  html += '<div class="input-field col s10" id="inputMethodRow">';
  html += '<textarea id="method" name="method" class="materialize-textarea"></textarea>';
  html += '<label for="method">Recipe Instructions</label>';
  html += '</div>';
  html += '<div class="col s1">';
  html += '<a class="btn" id="removeMethod"><i class="fas fa-minus-circle"></i></a>';
    html += '</div>';
  html += '</div>';

$('#newMethod').append(html);

});

$(document).on('click', '#removeMethod', function () {
  $(this).closest('#inputMethodRow').remove();

});

});

