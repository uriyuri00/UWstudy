setInterval(function() {
  $("#currentDay").text(dayjs().format("MMMM DD, YYYY [at] h:mm:ss a"));
}, 1000)

var dailySchedule = JSON.parse(localStorage.getItem("dailySchedule")) || [
  {
    text: "7am",
    val: 7,
    event: "",
  },
  {
    text: "8am",
    val: 8,
    event: "",
  },
  {
    text: "9am",
    val: 9,
    event: "",
  },
];

function saveEvent(event) {
  // find the textbox with the same data-hour attribute as the event.target
  let hour = event.target.getAttribute("data-hour");
  let input = $(`textarea[data-hour="${hour}"]`);

  console.log(input.val());

  // check data-hour attribute on the event.target and use that to
  // loop through the dailySchedule array and compare the dailySchedule[i].val to the data-hour property on the event 
  // to find the entry in the dailySchedule array
  // 
  for(let i = 0; i < dailySchedule.length; i++) {
    if(dailySchedule[i].val == hour) {
      dailySchedule[i].event = input.val();
    }
  }

  console.log(dailySchedule);

  localStorage.setItem("dailySchedule", JSON.stringify(dailySchedule));

}

function renderSchedule() {
  for (let i = 0; i < dailySchedule.length; i++) {
    var row = $("<div>");
    row.addClass("row time-block");

    var label = $("<div>");
    label.addClass("col-2 col-md-1 hour text-center py-3");
    label.text(dailySchedule[i].text);

    var eventText = $("<textarea>");
    eventText.addClass("col-8 col-md-10 description");
    eventText.attr("rows", "3");
    eventText.val(dailySchedule[i].event);
    eventText.attr("data-hour", dailySchedule[i].val);

    var saveBtn = $("<button>");
    saveBtn.addClass("btn saveBtn col-2 col-md-1");
    saveBtn.attr("aria-label", "save");
    saveBtn.attr("data-hour", dailySchedule[i].val);
    // attach a click event listener to the save button
    saveBtn.click(saveEvent);
    
    

    var icon = $("<i>");
    icon.addClass("fas fa-save");
    icon.attr("aria-hidden", "true");
    icon.attr("data-hour", dailySchedule[i].val)

    saveBtn.append(icon);

    row.append(label);
    row.append(eventText);
    row.append(saveBtn);

    if(dayjs().hour() > dailySchedule[i].val) {
      row.addClass("past");
    }else if(dayjs().hour() < dailySchedule[i].val) {
      row.addClass("future");
    }else {
      row.addClass("present");
    }

    $("#schedule").append(row);
  }
}

renderSchedule();


