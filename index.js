 let [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
    let timer = null;

    function updateDisplay() {
      let h = String(hours).padStart(2, '0');
      let m = String(minutes).padStart(2, '0');
      let s = String(seconds).padStart(2, '0');
      let ms = String(milliseconds).padStart(3, '0'); // always 3 digits
      document.getElementById("display").innerText = `${h}:${m}:${s}:${ms}`;
    }

    function stopwatch() {
      milliseconds += 10; // increase by 10ms

      if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
      }
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }

      updateDisplay();
    }

    function start() {
      if (timer !== null) return;
      timer = setInterval(stopwatch, 10); // every 10ms
    }

    function stop() {
      clearInterval(timer);
      timer = null;
    }

    function reset() {
      stop();
      [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
      updateDisplay();
    }

    updateDisplay();