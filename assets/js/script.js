// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  //query selectors
  var currentDayEl = document.querySelector("#currentDay");
  var hourEl = document.querySelectorAll(".time-block");
  var saveBtnEl = document.querySelectorAll(".btn");

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  for (var i = 0; i < saveBtnEl.length; i++) {
    saveBtnEl[i].addEventListener("click", function(){
      var event = this.parentElement.children[1].value
      var time = this.parentElement.getAttribute("id")
      localStorage.setItem(time, event)
    })
  }

    // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //


  var currentHour = parseInt(dayjs().format("H"));

  for (var i = 0; i < hourEl.length; i++) {
    var hour = hourEl[i];
    var id = hour.getAttribute("id");
    var time = parseInt(id.split("-")[1])
  
    if (currentHour === time) {
      hour.classList.add("present")
    } else if (currentHour > time) {
      hour.classList.add("past")
    } else {
      hour.classList.add("future")
    }

    var savedEvent = localStorage.getItem(id) ?? ""
    var textArea = hour.children[1]
    textArea.textContent = savedEvent;

  }

  // TODO: Add code to display the current date in the header of the page.

  var dayOfWeek = dayjs().format("dddd, MMMM D");

  currentDayEl.textContent = dayOfWeek;


});
