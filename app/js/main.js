const colours = [
  "red",
  "aliceblue",
    "#0ff",
    "#3b444b",
    "#f4c2c2",
    "#b5a642",
    "#e3dac9",
    "#126180"
];

var activeColour = colours[0];

const palette_cell = "<div class=\"col flex-grow-1 align-self-stretch palette-cell\" style=\"background-color: {{bg}}\" data-bg='{{bg}}'></div>";
const pixel =  '<div class="paint-cell align-self-stretch"></div>';

const row = '<div class="row">';

colours.forEach(((value, index, array) => {
    $(".palette").append(palette_cell.replace(/\{\{bg\}\}/g, value));
}));

for (x = 0; x < 12; x++){
    str = '<div class="row">';
    for (y=0; y< 12; y++){
        str += "<div class='col paint-cell'></div>";
    }
    str += "</div>";
    $(".canvas").append(str);
}

$(".canvas").find(".paint-cell").each(function (i, e) {
    var width = $(this).width();

    console.log(width);
    $(this).height(width);
    console.log($(this).height());
});

$(document.body).on("click", ".paint-cell", function(e) {
    var t = $(this);
    t.css("background-color", activeColour);
});

$(document.body).on("click", ".palette-cell", function(e) {
    activeColour = $(this).data("bg");
    console.log(activeColour);

    $(".palette").find(".palette-cell").each(function(i, e){
        $(this).removeClass("selected");
        $(this).html("");
    });
    $(this).addClass("selected");
    $(this).html('<i class="fas fa-crosshairs"></i>');
});