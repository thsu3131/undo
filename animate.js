function animate({duration, draw, timing, timingType}) {
    let start = performance.now();
    requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;
        let progress = timing(timingType(timeFraction));
        draw(progress);
        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
}

function linear(timeFraction) {
    return timeFraction;
}

function quad(timeFraction) {
    return Math.pow(timeFraction, 2);
}

function power3(timeFractoin) {
    return Math.pow(timeFraction, 3);
}

function power4(timeFraction) {
    return Math.pow(timeFraction, 4);
}

function power6(timeFraction) {
    return Math.pow(timeFraction, 6);
}

function OnePointFiveBack(timeFraction) {
    var x = 1.5;
    return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x);
}

function TwoBack(timeFraction){
    var x = 2;
    return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x);
}

function bounce(timeFraction) {
    for(let a = 0, b = 1, result; 1; a+=b, b/=2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
            return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) +  Math.pow(b, 2);
        }
    }
}