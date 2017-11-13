// lis of DOM UI elements which will receive attribute settings from metadata values
const progressbar = document.getElementById('progressbar');
const divtext = document.getElementById('divtext');

// insert API call here and fill metadata values with response data
// var percentagefalse = response.data.precentagefalse;
const percentagefalse = '80%';
const percentagetrue = '0%';

// this is where the settings for the DOM UI are stored.
// DOM settings like style, display, etc.
const metadata = function (width, showstatus) {

    // begin triggers for css transition
    //
    // change width value which 
    progressbar.style.width = width;

    // toggle progressbarcontainer's click status using true/false
    show = showstatus;

    // change text color 
    showstatus == false ? divtext.style.color = '#ffffff' : divtext.style.color = '#153687';
    //
    // end triggers for css transition
}
