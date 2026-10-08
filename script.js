function throttle(fn, delay) {
  let lastTime = 0;
  return function(evt) {
    const currentTime = Date.now();
    if(currentTime - lastTime >= delay) {
      lastTime = currentTime;
      fn(evt);
    }
  }
}


window.addEventListener("mousemove", throttle(function(evt) {
  console.log(`x: ${evt.clientX}`);
  console.log(`y: ${evt.clientY}`);
}, 2000));