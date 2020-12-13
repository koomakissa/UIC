// Ann-Sofi's part
var nationalities = ["Afghan", "Albanian", "Algerian", "American", "Andorran", 
                     "Angolan",	"Anguillan",	"Citizen of Antigua and Barbuda",
                     "Argentine",	"Armenian",	"Australian",	"Austrian",
                     "Azerbaijani", "Bahamian", "Bahraini", "Bangladeshi",
                     "Barbadian", "Belgian", "Belizean", "Beninese",
                     "Bermudian"];

var nonEmptyInputs = ["lastName", "birthDate", "idNumber", "pictureInput"];

var nonEmptySelects = ["gender", "nationality"];

var userInformation = {firstName: "", lastName: "", birthDate: "", gender: "", nationality: "", idNumber: "", picture: ""};

$(document).ready(function() {
  initialize();
  validateUserInputs();
  resetForm();
  showIdCard();
  createANewIDCard(); 

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
      userInformation.firstName = $("#firstName").val();
      userInformation.lastName = $("#lastName").val();
      userInformation.birthDate = $("#birthDate").val();
      userInformation.gender = $("#gender option:selected").val();
      userInformation.nationality = $("#nationality option:selected").val();
      userInformation.idNumber = $("#idNumber").val();

      $(".firstNameShown").text(userInformation.firstName);
      $(".lastNameShown").text(userInformation.lastName);
      $(".birthDateShown").text(userInformation.birthDate);
      $(".genderShown").text(userInformation.gender);
      $(".nationalityShown").text(userInformation.nationality);
      $(".idNumberShown").text(userInformation.idNumber);

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

// Eira's part
function showIdCard()
{
  console.log("ready for card creation");
  $("#create-id-card-confirmation-btn").click(function() {
    
    /* kokeilin laittaa showPicturen ja readURLin sisällöt suoraan tähän, mutta ne ei vaan toimi?

    let reader = new FileReader();
    reader.onload = function(e) {
      $("pictureShown").attr('src', e.target.result);
      console.log("eka juttu");
    }
    function readURL(input) {
      if(input.files && input.files[0]) {
        reader.readAsDataURL(input.files[0]);
      }
      console.log("toka juttu");
    }
    $("#pictureInput").change(function(){
      readURL(this);
      console.log("kolmas juttu");
    })

    */
    $("#createIdCardModal").modal('hide');
    $("#idCardForm").hide();
    $("#idCard").show();
    console.log("the button has been clicked and a new card has been created!");
  });
  
}

function createANewIDCard() 
{
  $("#create-new-id-card").click(function() {
    console.log("creation of another card has begun");
    $('.is-invalid').removeClass('is-invalid');
    $("#idCard-form").trigger("reset");
    $("#idCardForm").show();
    $("#idCard").hide();
  });
  
}

// molemmat alla olevat funktiot on tehty tutorialien perusteella ja pitäisi toimia, mutta ei toimi :(
function showPicture()
{
  console.log("kuvan pitäisi alkaa näkyä...");
  $("#pictureInput").change(function(){
    console.log("TADAA JOTAIN TAPAHTUI");
    readURL(this);
    console.log("kuva näkyy??");
  });
  
}


function readURL(i) 
{
  console.log("picture function is running");
  if (i.files && i.files[0]) {
    let reader = new FileReader();
    reader.onload = function(e) {
      //$("#pictureShown").after('<img src="'+e.target.result+'" width="450" height="300"/>');
      $("#pictureShown").attr("src", e.target.result);
    }
    reader.readAsDataURL(i.files[0]);
    console.log("picture is shown");
  }
}