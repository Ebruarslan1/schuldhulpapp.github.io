$("button").click(gather)
$(document).ready(centerme);
$(window).resize(centerme);

function gather() {
  income = document.getElementById("inkomen").value;
  income = income.replace(/\D/g,'');
  rent = document.getElementById("huur").value;
  rent = rent.replace(/\D/g,'');
  utilities = document.getElementById("gas&electra").value;
  utilities = utilities.replace(/\D/g,'');
  food = document.getElementById("water").value;
  food = food.replace(/\D/g,'');
  insurance = document.getElementById("zorgverzekering").value;
  insurance = insurance.replace(/\D/g,'');
  result = income - rent - utilities - food - insurance;
  savings = (income * 0.20);
  $(".results-data").empty();
  $(".emoji").empty();
  if (result === 0) {
    $(".results-data").append('<p class="text-danger convert-emoji"> You didn\'t enter anything. Try again ya filthy animal.</p>');
    $(".emoji").append('<i class="frown">&nbsp;</i>');
  }
  else if (result < 0) {
    $(".results-data").append('<p class="text-danger"> After your expenses you have $' + result + ' left in your budget. You might want to try and reduce your spending this month.</p>');
    $(".emoji").append('<i class="tear">&nbsp;</i>');
  }
    else {
      $(".results-data").append(
      '<p class="text-sucess"> After your expenses you have $' + result + ' left in your budget.</p>','<p class="text-sucess">But you should save at least $' + savings + '.</p>');
      $(".emoji").append('<i class="happy">&nbsp;</i>');
  }
}

function centerme() {
boiheight = $(".center-meh-boi").height();
middle = boiheight / 2;
$(".center-meh-boi").css("margin-top","-" + middle + "px");
console.log(boiheight);
}

