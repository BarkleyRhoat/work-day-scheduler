// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {


 
});

var currentHour = dayjs().hour();

// looping through blocks to see if they match up to current hour 
$('.time-block').each(function() {
    var blockHour = parseInt($(this).attr('id').split('-')[1]);
    if (blockHour < currentHour) {
        $(this).removeClass('present future').addClass('past');
    } else if (blockHour === currentHour) {
        $(this).removeClass('past future').addClass('present');
    } else {
        $(this).removeClass('past present').addClass('future');
    }
});

//applying past, present and future class to the time blocks. 
var currentHour = dayjs().hour();

$(".time-block").each(function() {
    var blockHour = parseInt($(this).attr("id").replace("hour-", ""));
    if (blockHour < currentHour) {
        $(this).addClass("past");
    } else if (blockHour === currentHour) {
        $(this).addClass("present");
    } else {
        $(this).addClass("future");
    }
});

// event listener for the save button on right side of page
  $(".saveBtn").on("click", function() {
    var userInput = $(this).siblings(".description").val();
    var timeBlockId = $(this).parent().attr("id");
    
    localStorage.setItem(timeBlockId, userInput);
  });


function loadSavedData() {
  $(".time-block").each(function() {
    var timeBlockId = $(this).attr("id");
    var savedData = localStorage.getItem(timeBlockId);
    if (savedData) {
      $(this).find(".description").val(savedData);
    }
  });
  console.log()
}

for (let i = 9; i <= 17; i++) {
  const textarea = $(`#hour-${i} textarea`);
  const savedInput = localStorage.getItem(`hour-${i}`);

  if (savedInput) {
    // Set the value of the textarea to the saved input
    textarea.val(savedInput);
  }
}


// Save input to localStorage when save is clicked
$(".saveBtn").on("click", function () {

var textArea = $(this).siblings("textarea");
var userInput = textArea.val();

var hour = $(this).parent().attr("id");


localStorage.setItem(hour, userInput);
});

// calling function to load saved data 
loadSavedData();

 // code to display the current date in the header of the page.
$(function updateDate(){
  var dateDisplay = $("#currentDay");
  var currentDate = new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var formattedDate = currentDate.toLocaleDateString(undefined, options);
  dateDisplay.text(formattedDate);
})
updateDate();
