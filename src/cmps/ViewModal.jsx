// Assuming you're using a Bootstrap modal, you can add a function on modal hide event that will revert the URL back to what it was. Something like this:

// var stored_variable_of_previous_url;

// $('#modal').on("hide.bs.modal", function (e) {
//    history.replaceState(null, null, stored_variable_of_previous_url);
// });
// The replaceState method above switches out the URL in the address bar with no assets being requested and the window remaining on the same page. This is because replaceState does not manipulate the browser's history, it simply replaces the current URL in the address bar.

// You would then add something like this to your function that creates/opens the modal:

// stored_variable_of_previous_url = window.location.href;