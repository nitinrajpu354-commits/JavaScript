function afterDelay(time, cb) {
    setTimeout(cb, time);
}

afterDelay(2000, function() {
    console.log("Hello World!");
});