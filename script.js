let prm = new Promise((res, rej) => {
    setTimeout(() => {
        res();
    }, 3000);
});

prm
.then(function () {
    console.log("Hey");
})
.catch(function () {
    console.log("hello");
})