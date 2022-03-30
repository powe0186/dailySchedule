var currentDay = moment().format('MMMM Do YYYY');
var onScreenDay = $('#currentDay');
var gridContainer = $('#timeGrid')

//Place the current date on the screen.
onScreenDay.text(currentDay);

for (let i = 0; i < 9; i++) {
    //create the row.
    var rowDiv = $('<div>');
    rowDiv.attr("class", "row");

    //create time column
    var timeColumn = $('<div>');
    timeColumn.attr("class", "col-1 hour");
    timeColumn.text(i);
    rowDiv.append(timeColumn);

    //create todo column
    var todoColumn = $('<textArea>');
    todoColumn.attr("class", "form-control form-group col-10 present description");
    rowDiv.append(todoColumn);

    //create save btn column
    var saveBtnColumn = $('<div>');
    saveBtnColumn.attr("class", "col-1 saveBtn");
    rowDiv.append(saveBtnColumn);

    gridContainer.append(rowDiv);


}