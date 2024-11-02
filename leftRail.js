export function leftRail() {
  const containerArt = document.querySelector(".left-rail");
  const html = `
      <div>
        <h1>Paperfox</h1>
        <h2>Art by Nathalie Garfinkle</h2>
      </div>
      <div>
        <h3>About</h3>
        <p>
          A lifetime creative, Nathalie Garfinkle sticks to painting the things
          she loves. This leads her across the map of wildlife to fantasy
          creatures, figures to landscapes, and most definitely some pet
          portraits. Her illustrative style draws inspiration from animation and
          the Japanese woodblock printing tradition, especially the Shin Hanga
          movement of the early 20th century. While she occasionally dabbles in
          printmaking, both linocut and woodblock, the vast majority of her work
          is in watercolor and ink. Most of her art boasts bold line art and
          dynamic colors, but that’s no limiting factor. For Nathalie, the core of
          her art is the joy of making, so she’s yet to settle down on just one
          style.
        </p>
        <p>
        If she's not working on some art or adding something new to her
        <a href="https://paperfox.github.io/tarot/">Tarot App</a>, you'll likely find her playing
      with her dog, or out in her garden.
        </p>
      </div>
      <ul class="social-links">
        <li class="m-3">
          <a
            href="https://www.instagram.com/paperfoxmakesart/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://paperfox.github.io/images/instagramlogo.svg"
              alt="Instagram"
              class="invert"
            />
          </a>
        </li>
        <li class="m-3">
          <a href="https://cara.app/paperfox" target="_blank" rel="noreferrer">
            <img
              src="https://paperfox.github.io/images/cara-app-logo-circle-White.svg"
              alt="Cara"
            />
          </a>
        </li>
        <li class="m-3">
          <a
            href="https://www.natickartassociation.org/nathalie-garfinkle"
            target="_blank"
            rel="noreferrer"
          >
            <img src="NAA_Logo_Final_C2.png" alt="Natick Art Association" />
          </a>
        </li>
        <li class="m-3">
          <a
            href="https://github.com/paperfox"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://paperfox.github.io/images/github-mark.svg"
              alt="GitHub"
              class="invert"
            />
          </a>
        </li>
        <li class="m-3">
          <a
            href="https://www.linkedin.com/in/nathaliegarfinkle/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://paperfox.github.io/images/linkedinlogo.svg"
              alt="LinkedIn"
            />
          </a>
        </li>
      </ul>
  `;

  containerArt.insertAdjacentHTML("afterbegin", html);
}
