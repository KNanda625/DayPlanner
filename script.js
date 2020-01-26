// $(document).ready(function() {})

// var nowMoment = moment().format('MMMM Do YYYY, h:mm:ss a');
// var eCurrentDay = document.getElementById('currentDay');
// eCurrentDay.innerHTML = nowMoment;

// var todayDate = moment().format('MMMM Do YYYY, h:mm:ss a')
// $headingDate = $("#currentDay");
// $headingDate.text(todayDate);


$("button").on("click", function() {
    document.getElementById("to-do").innerHTML = localStorage.setItem("");
    document.getElementById("to-do").innerHTML = localStorage.getItem("");
});

// testing to see if button works, it works!
// function notify() {
//     alert( "clicked" );
//   }
//   $( "button" ).on( "click", notify);
    
