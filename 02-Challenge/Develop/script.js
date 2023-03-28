$(function () {
// Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage.
$(".saveBtn").on("click", function () {
// Get the text input value from the sibling textarea
var inputText = $(this).siblings(".description").val().trim();
// Get the time-block id
var timeBlockId = $(this).parent().attr("id");
// Save the inputText with the timeBlockId as the key in localStorage
localStorage.setItem(timeBlockId, inputText);
});

// Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour.
var currentHour = dayjs().hour();
$(".time-block").each(function () {
var hour = parseInt($(this).attr("id").split("-")[1]);
if (hour < currentHour) {
$(this).addClass("past");
} else if (hour === currentHour) {
$(this).addClass("present");
} else {
$(this).addClass("future");
}
});

// Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements.
$(".description").each(function () {
var timeBlockId = $(this).parent().attr("id");
var savedText = localStorage.getItem(timeBlockId);
if (savedText !== null) {
$(this).val(savedText);
}
});

// Add code to display the current date in the header of the page.
$("#currentDay").text(dayjs().format("dddd, MMMM D"));
});