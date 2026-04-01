document.addEventListener("DOMContentLoaded", () => {

  const intro = document.getElementById("intro");
  const enterBtn = document.getElementById("enter");
  const card = document.getElementById("card");

  const yesBtn = document.getElementById("yes");
  const noBtn = document.getElementById("no");

  const noPopup = document.getElementById("noPopup");
  const backBtn = document.getElementById("back");

  const song = document.getElementById("song");
  const ambient = document.getElementById("ambient");
  const heartbeat = document.getElementById("heartbeat");
  const countdownEl = document.getElementById("countdown");

  // AUDIO LEVELS
  song.volume = 0;
  ambient.volume = 0.25;
  heartbeat.volume = 0.25;

  /* INTRO FLOW */
  enterBtn.addEventListener("click", () => {
    heartbeat.play();

    intro.innerHTML = `
      <h1>Preparing something...</h1>
      <p>Please wait.</p>
      <p>Don't get scared queen...</p>
    `;

    setTimeout(() => {
      heartbeat.pause();
      heartbeat.currentTime = 0;

      intro.style.display = "none";
      card.classList.remove("hidden");
      ambient.play();
    }, 1500);
  });

  /* NO BUTTON RUNS */
 noBtn.style.transition = "transform 0.6s ease";

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

  /* NO BUTTON CLICK */
  noBtn.addEventListener("click", () => {
    noPopup.classList.remove("hidden");
  });

  backBtn.addEventListener("click", () => {
    noPopup.classList.add("hidden");
  });

  /* YES BUTTON */
  yesBtn.addEventListener("click", () => {
    ambient.pause();
    ambient.currentTime = 0;

    song.play();

    let vol = 0;
    const fade = setInterval(() => {
      if (vol < 0.6) {
        vol += 0.02;
        song.volume = vol;
      } else {
        clearInterval(fade);
      }
    }, 200);

    card.innerHTML = `
      <h1>YAYYY 💕</h1>
      <p>
        Sorry it took me so long to make this, I wanted it to be different and special made just for you.
      </p>
      <p>
        
      </p>
      <p>
        Happy Valentine’s Day, Nadelee 🌹<br>
        I’m so lucky to love you.
      </p>
      <img class="seal-gif" src="seal.gif" alt="Clapping seal">
    `;
  });

  /* ROSES */
  function createRose() {
    const rose = document.createElement("div");
    rose.classList.add("rose");
    rose.innerHTML = "🌹";
    rose.style.left = Math.random() * 100 + "vw";
    rose.style.animationDuration = Math.random() * 3 + 5 + "s";
    document.body.appendChild(rose);

    setTimeout(() => rose.remove(), 8000);
  }

  setInterval(createRose, 400);

  /* COUNTDOWN */
  const valentines = new Date("February 14, 2027").getTime();
  setInterval(() => {
    const now = new Date().getTime();
    const diff = valentines - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    countdownEl.innerHTML = `⏳ ${days} (damn thats a long time) days until Valentine’s Day`;
  }, 1000);

});
