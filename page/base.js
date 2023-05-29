/** 
 * AGPL 3.0 License
 * https://github.com/akatiggerx04
 * **/

var password_input = document.getElementById("password");
var confirm_password_input = document.getElementById("password-confirm");
var signup_form = document.getElementById("signup-form"); 
let valid_password;

function check_password() {
    var password = password_input.value;
    var confirm_password = confirm_password_input.value;
    if (password!= confirm_password) {
        valid_password = false;
        confirm_password_input.removeAttribute("aria-invalid");
        confirm_password_input.setAttribute("aria-invalid", "true");        
    } else {
        valid_password = true;
        confirm_password_input.removeAttribute("aria-invalid");
        confirm_password_input.setAttribute("aria-invalid", "false");
    }
}

signup_form.addEventListener('submit', (e) => {
    if (!valid_password) {
        e.preventDefault();
    }
});

confirm_password_input.addEventListener("input", check_password);






