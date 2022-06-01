//variable for hours in the day
var hours = [9,10,11,12,13,14,15,16,17,18]
//function to differenciate time
hours.forEach(function(hour){
    var colorKey = "past";
    var displayHour = "";
    var momentHour = moment().hours();
    console.log(momentHour);
    //morning vs afternoon hours 
    if (hour < 12) {
        displayHour = hour + " AM"
    } else if (hour === 12){
        displayHour = hour + " PM"
    } else {
        displayHour = hour - 12 + " PM"
    }
    //past vs present
    if (hour === momentHour) {
        colorKey = "present"
    } else if (hour < momentHour){
        colorKey = "past"
    }
    else {
        colorKey = "future"
    }
    //additing hours, text area and save button 
    var rowDiv = $("<div>").addClass("row time-block").attr("id", hour);
    var textDiv = $("<textarea>").addClass("col-8 description " + colorKey).val(localStorage.getItem(hour));
    var hourDiv = $("<div>").addClass("col-2").text(displayHour);
    var saveBtn = $("<button>").addClass("col-2 saveBtn btn btn-primary").text("Save");
    $(".container").append(rowDiv.append(hourDiv,textDiv,saveBtn))
})
//save content in textarea available in localstorage
$(".saveBtn").on("click", function(){
    var activity = $(this).siblings(".description").val().trim();
    var hourKey = $(this).parent().attr("id");
    localStorage.setItem(hourKey,activity)
})