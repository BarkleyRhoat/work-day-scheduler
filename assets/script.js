// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
 
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

// calling function to load saved data 
loadSavedData();

 // code to display the current date in the header of the page.
function updateDate() {
  var dateDisplay = document.getElementById("currentDay");
  var currentDate = new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var formattedDate = currentDate.toLocaleDateString(undefined, options);
  dateDisplay.textContent =  formattedDate;
}
updateDate();
