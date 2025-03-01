$(document).ready(function () {
    // Check for saved theme preference or set default to dark
    if (localStorage.getItem('theme') === 'light') {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        $('#theme-toggle-light-icon').removeClass('hidden');
        $('#theme-toggle-dark-icon').addClass('hidden');
    } else {
        // Set dark mode as default
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
        $('#theme-toggle-dark-icon').removeClass('hidden');
        $('#theme-toggle-light-icon').addClass('hidden');
    }

    // Theme toggle functionality
    $('#theme-toggle').on('click', function() {
        if (document.documentElement.classList.contains('dark')) {
            // Switch to light mode
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
            localStorage.setItem('theme', 'light');
            $('#theme-toggle-light-icon').removeClass('hidden');
            $('#theme-toggle-dark-icon').addClass('hidden');
        } else {
            // Switch to dark mode
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            $('#theme-toggle-dark-icon').removeClass('hidden');
            $('#theme-toggle-light-icon').addClass('hidden');
        }
    });

    // Smooth scroll for navigation links
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 500);
        }
    });

    // Add shadow to navigation on scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $('nav').addClass('shadow-md');
        } else {
            $('nav').removeClass('shadow-md');
        }
    });
});

document.getElementById('speaker-icon').addEventListener('click', function () {
    var audio = document.getElementById('audio');
    audio.play();
});