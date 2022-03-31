var currentDay = moment().format('MMMM Do YYYY');
var onScreenDay = $('#currentDay');
var gridContainer = $('#timeGrid');
var lastHourMark = moment().startOf('hour').format('HH');

//Place the current date on the screen.
onScreenDay.text(currentDay);

for (let i = 9; i < 17; i++) {
    //create the row.
    var rowDiv = $('<div>');
    rowDiv.attr("class", "row");

    //create time column
    var timeColumn = $('<div>');
    timeColumn.addClass("col-1 hour time-block");
    // Add the time to the column in hh:00 format.
    if (i <= 12) {
        var hourMark = i + ":00";
    } else {
        var hourMark = (i-12) + ":00";
    }
    timeColumn.text("\n" + hourMark);
    rowDiv.append(timeColumn);

    //create todo column
    var todoColumn = $('<textarea>');
    todoColumn.addClass("form-group description col-10");
    todoColumn.attr('type', 'text');
    todoColumn.attr('data-time', i);
    todoColumn.val(retrieveTask(i));

    // Color the textarea based on past, present, or future
    if (i < lastHourMark) {
        todoColumn.addClass('past');
    } else if (i > lastHourMark + 1) {
        todoColumn.addClass('future');
    } else {
        todoColumn.addClass('present');
    }

    rowDiv.append(todoColumn);


    //create save btn column
    var saveBtnColumn = $('<div>');
    saveBtnColumn.addClass("col-1 saveBtn");
    var lockIcon = $('<i>');
    lockIcon.addClass("fas fa-save");
    saveBtnColumn.append(lockIcon);
    rowDiv.append(saveBtnColumn);

    gridContainer.append(rowDiv);


}


//a function to save text content of the text area to localStorage
function saveTask(hour) {
    var task = $(`[data-time="${hour}"]`).val();
    console.log(task);
    localStorage.setItem(`${hour}`, task )
}

function retrieveTask(hour) {
    var task = localStorage[`${hour}`];
    console.log(task);
    return task;
}

gridContainer.on('click', (e) => {
    var targetClass = $(e.target).attr("class");
    if (targetClass === "col-1 saveBtn") {
        var taskToSave = $(e.target).prev().attr("data-time");
        console.log(taskToSave);
        saveTask(taskToSave);
    }
    
});

