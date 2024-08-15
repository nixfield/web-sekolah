document.addEventListener('DOMContentLoaded', function() {

    // Menambahkan efek hover pada card
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseover', function() {
            this.classList.add('shadow-lg');
        });

        card.addEventListener('mouseout', function() {
            this.classList.remove('shadow-lg');
        });
    });
});


$(document).ready(function() {
    $('#contactForm').on('submit', function(event) {
        var isValid = true;

        // Validasi Nama
        var name = $('#name');
        if (name.val().trim() === '') {
            name.addClass('is-invalid');
            isValid = false;
        } else {
            name.removeClass('is-invalid');
        }

        // Validasi Email
        var email = $('#email');
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.val().trim())) {
            email.addClass('is-invalid');
            isValid = false;
        } else {
            email.removeClass('is-invalid');
        }

        // Validasi Pesan
        var message = $('#message');
        if (message.val().trim() === '') {
            message.addClass('is-invalid');
            isValid = false;
        } else {
            message.removeClass('is-invalid');
        }

        if (!isValid) {
            event.preventDefault(); // Mencegah pengiriman formulir jika tidak valid
        }
    });
});
