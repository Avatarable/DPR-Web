// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.


let phoneField = document.querySelector("#PhoneNumber");

phoneField.addEventListener('input', (e) => {
    //return event.charCode != 8 && event.charCode == 0 || (event.charCode >= 48 && event.charCode <= 57);

    if (e.shiftKey === true) {
        if (e.which == 9) {
            return true;
        }
        return false;
    }
    if (e.which > 57) {
        return false;
    }
    if (e.which == 32) {
        return false;
    }
    return true;
})

$(".alert-success").fadeTo(1000, 500).slideUp(500, function () {
    $(".alert-success").slideUp(500);
});
