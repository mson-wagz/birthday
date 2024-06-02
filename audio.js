window.onload = function() {
    var audio1 = document.getElementById('audio1');
    var audio2 = document.getElementById('audio2');

    audio1.play();

    audio1.addEventListener('ended', function() {
        audio2.play();
    });
};
