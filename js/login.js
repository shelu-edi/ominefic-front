var client_login = document.getElementById('client-wrapper');
var referral_login = document.getElementById('referral-wrapper');

function clientLogin() {
    client_login.style.visibility = 'visible';
    client_login.style.animation = 'fadeIn 4s'
    referral_login.style.visibility = 'hidden';
};

function referralLogin() {
    referral_login.style.visibility = 'visible';
    client_login.style.visibility = 'hidden';
}