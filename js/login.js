var client_login = document.getElementById('client-wrapper');
var referral_login = document.getElementById('referral-wrapper');

var client_head = document.getElementById('client-head');
var referral_head = document.getElementById('referral-head');

function clientLogin() {
    client_login.style.visibility = 'visible';
    client_login.style.animation = 'fadeIn 4s'
    referral_head.classList.remove('border__bottom')
    client_head.classList.add('border__bottom')
    
    referral_login.style.visibility = 'hidden';
};

function referralLogin() {
    referral_login.style.visibility = 'visible';
    client_head.classList.remove('border__bottom')
    referral_head.classList.add('border__bottom')
    
    client_login.style.visibility = 'hidden';
}