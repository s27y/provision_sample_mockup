window.onload = function onLoad() {
    var circle1 = new ProgressBar.Circle('#progress1', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut'
    });
    var circle2 = new ProgressBar.Circle('#progress2', {
        color: '#00BFFF',
        duration: 3000,
        easing: 'easeInOut'
    });
    var circle3 = new ProgressBar.Circle('#progress3', {
        color: '#F0E68C',
        duration: 3000,
        easing: 'easeInOut'
    });
    circle1.animate(1);
    circle2.animate(1);
    circle3.animate(1);
};
