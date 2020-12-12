var nationalities = ["Afghan", "Albanian", "Algerian", "American", "Andorran", 
                     "Angolan",	"Anguillan",	"Citizen of Antigua and Barbuda",
                     "Argentine",	"Armenian",	"Australian",	"Austrian",
                     "Azerbaijani", "Bahamian", "Bahraini", "Bangladeshi",
                     "Barbadian", "Belgian", "Belizean", "Beninese",
                     "Bermudian"];

var nonEmptyInputs = ["lastName", "birthDate", "idNumber", "picture"];

var nonEmptySelects = ["gender", "nationality"];

$(document).ready(function() {
  initialize();
  createIdCard();
  validateUserInputs();
  resetForm();
  
  
  $('.input').on('input', function()
  {
    if($(this).val().length != 0)
    {
      $(this).removeClass("is-invalid");
    }
  });

  $(".select").on('change', function() {
    if ($(this).val().length != 0){
      $(this).removeClass("is-invalid");
    }
  });
});



function initialize() {
  createNationalityOptions();
}

function createNationalityOptions() {
  for(var nationality of nationalities) 
  {
    $('#nationality').append($('<option>', {
      text: nationality
  }));
  }
}

function validateUserInputs()
{
  $("#btn-create-id-card").click(function(){

    checkEmptyInputs();

    if (!$(".is-invalid")[0])
    {
      $("#firstNameConfirmation").text($("#firstName").val());
      $("#lastNameConfirmation").text($("#lastName").val());
      $("#birthDateConfirmation").text($("#birthDate").val());
      $("#genderConfirmation").text($("#gender option:selected").val());
      $("#nationalityConfirmation").text($("#nationality option:selected").val());
      $("#idNumberConfirmation").text($("#idNumber").val());

      $('#createIdCardModal').modal('show');
     

    }
  });
}

function checkEmptyInputs()
{
  for(var input of nonEmptyInputs)
  {
    if($("#" + input).val().length == 0)
    {
      $("#" + input).addClass("is-invalid");
    }
    else
    {
      $("#" + input).removeClass("is-invalid");
    }
  }

    for(var select of nonEmptySelects)
    {
      if($("#" + select + " option:selected").val().length == 0)
      {
        $("#" + select).addClass("is-invalid");
      }
      else
      {
        $("#" + select).removeClass("is-invalid");
      }
    }
}

function resetForm()
{
  $("#clear-form-confimed").click(function(){
    $('.is-invalid').removeClass('is-invalid');
    $("#idCard-form").trigger("reset");
    $('#clearFormModal').modal('toggle');
  });
}

function createIdCard() {
  $("#create-id-card-confimed").click(function(){
    console.log("card has been created");
    $("#givenFirstName").text($("#firstName").val());
    $("#givenLastName").text($("#lastName").val());
    $("#givenBirthDate").text($("#birthDate").val());
    $("#givenGender").text($("#gender option:selected").val());
    $("#givenNationality").text($("#nationality option:selected").val());
    $("#givenIdNumber").text($("#idNumber").val());
  });
}

function foo(){
  console.log("test log");
}
