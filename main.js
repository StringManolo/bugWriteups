import ff from "./ff.js";

/* import ff from "https://fastframework.ga/ff.js"; */

ff.activateShortcuts();

  ff.customTags = {
	myMenu:`<section><article id="mainMenu"><a href="#home">HOME</a>
<a href="#writeups">WRITEUPS</a>
<a href="#updates">UPDATES</a>
<a href="#about">ABOUT</a></article></section>`
};

const home = `<h1>General</h1>`;

const writeups = `<div id="writeupsContainer">
<h1>Writeups!</h1>
Enjoy my discovers!
<a class="xssLink" href="#writeups/xss">XSS</a>
<a href="#writeups/csrf">CSRF</a>
</div>`;

const updates = `<h1>Updates!</h1>
Last changes!`;

const about = `<h1>About!</h1>
Know about <a href="#stringmanolo">String Manolo</a>.`;

const menuXss = `<h2>XSS</h2>
<a class="xssLink" href="#writeups/xss/xss1">3 x 1!</a>
<br />
<a class="xssLink" href="#writeups/xss/w3schoolsxss1">Stored XSS - W3schools</a>
<br />
<a class="xssLink" href="#writeups/xss/intigriti/november">Clickjacking XSS</a>`;

const menuCsrf = `<h2>CSRF</h2>
<a class="csrfLink" href="#writeups/csrf/w3schoolscsrf1">Logout CSRF - W3schools</a>`;

const four04 = `<a href="#landing">Landing Page</a>
<a href="javascript:history.go(-1)">Back</a>`;

const personalInfo = `<div id="aboutPhoto" class="center"><h6>Web Developer</h6>
<img src="./resources/yo.png" alt="personal photo">
<h4>String Manolo</h4></div>
<p class="halfCenter"><span class="br">I am a self taught Cyber Security Enthusiast and a Software Developer.</span><span class="br">Born in Galicia - Spain.</span><span class="br">Currently focused on personal projects to improve my skills while searching for my first job.</span><span class="br">I love to fix security bugs and make secure and fast performance software,</span><span class="br">My favourite task is analice javascript code and security of small websites.</span></p>`;

const landingPage = `<section id="landingPage">
<header></header>
<h1>Learn Security</h1>
<p>Get updates from String Manolo Security Research to help you protect software from new and popular threats.</p>
<ul>
<li>Security Bugs</li>
<li>Research</li>
<li>Pappers</li>
<li>Tutorials</li>
<li>Tools</li>
<li>Development</li>
</ul>
</section>`;

ff.routes = {
  route1: {
    name: "home",
    action: () => {
      $("myViews").innerHTML = ff.customTags.myMenu + home;
      $("#nonCenter").innerHTML = `<ul><li><a href="#securityBugs">Security Bugs</a></li>
<li><a href="#research">Research</a></li>
<li><a href="#pappers">Pappers</a></li>
<li><a href="#tutorial">Tutorials</a></li>
<li><a href="#tools">Tools</a></li>
<li><a href="#development">Development</a></li>
<li><a href="#fixes">Fixes</a></li></ul>`;
    }
  },

  route2: {
    name: "writeups",
    action: () => {
      $("myViews").innerHTML = ff.customTags.myMenu + writeups;
      $("#nonCenter").innerHTML = "";
    }
  },

  route3: {
    name: "updates",
    action: () => {
      $("myViews").innerHTML = ff.customTags.myMenu + updates;
      $("#nonCenter").innerHTML = `<history-logs>route="./logs/dev/"</history-logs>`;
      ff.getCustomTags();
    }
  },

  route4: {
    name: "about",
    action: () => {
      $("myViews").innerHTML = ff.customTags.myMenu + about;
      $("#nonCenter").innerHTML = personalInfo;
    }
  },

  route5: {
    name: "stringmanolo",
    action: () => { 
      $("myViews").innerHTML = ff.customTags.myMenu + about;
      $("#nonCenter").innerHTML = `<div id="icons"><a href="#projects"><img class="projectsIcon" src="./resources/projects.png" alt="projects icon"></a>
      <a class="githubLink" href="//github.com/stringmanolo"><img class="githubIcon" src="./resources/github.png" alt="github icon"></a>
      <a href="//twitter.com/xsstringmanolo"><img class="twitterIcon" src="./resources/twitter.png" alt="twitter icon"></a>
      <a href="//foro.elhacker.net/profiles/string_manolo-u595084.html"><img class="elhackernetIcon" src="./resources/elhacker.png" alt="icono elhacker.net"></a><a href="//t.me/stringmanolo"><img class="telegramIcon" src="./resources/telegram.png" alt="telegram icon"></a>
      <a href="mailto:manuelvarelacaldas@gmail.com"><img class="emailIcon" src="./resources/email.png" alt="email icon"></a></div>`+personalInfo;
    }
  },

  route6: {
    name: "writeups/xss",
    action: () => {
      $("myViews").innerHTML = ff.customTags.myMenu + writeups;
      /*
      $("#writeupsContainer").innerHTML += menuXss;
      */
      $("#nonCenter").innerHTML = menuXss;
    }
  },

  route7: {
    name: "writeups/xss/xss1",
    action: () => {
      $("myViews").innerHTML = `<xss-1>route="./blogEntries/xss/"</xss-1>`;
      $("#nonCenter").innerHTML = "";
      ff.getCustomTags();
    }
  },

  route8: {
    name: "writeups/xss/w3schoolsxss1",
    action: () => {
      $("myViews").innerHTML = `<w3schoolsxss-1>route="./blogEntries/xss/"</w3schoolsxss-1>`;
      $("#nonCenter").innerHTML = "";
      ff.getCustomTags();
    }
  },

  route9: {
    name: "writeups/xss/intigriti/november",
    action: () => {
      $("myViews").innerHTML = `<novembe-r>route="./blogEntries/xss/intigriti/"</novembe-r>`;
      $("#nonCenter").innerHTML = "";
      ff.getCustomTags();
    }
  },

  route10: {
    name: "writeups/csrf",
    action: () => {
      $("myViews").innerHTML = ff.customTags.myMenu + writeups;
      $("#nonCenter").innerHTML = menuCsrf;
    }
  },

  route11: {
    name: "writeups/csrf/w3schoolscsrf1",
    action: () => {
      $("myViews").innerHTML = `<w3schoolscsrf-1>route="./blogEntries/csrf/"</w3schoolscsrf-1>`;
      $("#nonCenter").innerHTML = "";
      ff.getCustomTags();    
    }
  },

  route12: {
    name: "projects",
    action: () => {
      $("myViews").innerHTML = ff.customTags.myMenu + about;
      $("#nonCenter").innerHTML = `<div class="aToBlock"><a href="#projects/fastframework">FastFramework</a>
      <a href="#projects/jex">Jex</a></div>
      `;
    }
  },

  route13: {
    name: "projects/fastframework",
    action: () => {
      $("myViews").innerHTML = "";
      $("#nonCenter").innerHTML = `<fast-framework>route="./projects/fastframework/"</fast-framework>

      Actually this webpage is build using fastframework :)`;
     ff.getCustomTags();
    }
  },

  route14: {
    name: "projects/jex",
    action: () => {
      $("myViews").innerHTML = "";
      $("#nonCenter").innerHTML = `<j-ex>route="./projects/jex/"</j-ex>`;
      ff.getCustomTags();
    }
  },

  route15: {
    name: "landing",
    action: () => {
      $("myViews").innerHTML = ff.customTags.myMenu;
      $("#nonCenter").innerHTML = landingPage;
    }
  },

 /* route16: {
    name: "securityBugs",
    action: () =>{
      $("myViews").innerHTML = "";
      $("#nonCenter").innerHTML = `<xss-series>route="./securityBugs/xss/"</xss-series>`;
      ff.getCustomTags();
    }
  },

  amount: 16, */
  amount: 15,

  routeDefault: {
    name: "default",
    action: () => {
      $("myViews").innerHTML = "";
      $("#nonCenter").innerHTML = `<img id="crow" src="./resources/crow.jpg"><div id="four04"><h1>404 PAGE NOT FOUND</h1>The requested resource was not found in this page<div id="crowLinks"><a id="crowLinkLanding" href="#landing">Landing Page</a>
<a id="crowLinkBack" href="javascript:history.go(-1)">Back</a></div>
</div>`;
    }
  }
};

ff.router.start();

ff.mustache.copyright = `<div class="copyright">&copy; ${new Date().getFullYear()}</div>
<style>
.copyright {
  bottom: 2%;
  right: 2%;
  position: fixed;
}
</style>
`;

ff.mustache.date = ""+new Date();

ff.getUnknownTags();
ff.getCustomTags();
ff.getMustacheSintax();

ff.cache.resources = [
"./",
"./logs/dev/historylogs.ff",
"./blogEntries/xss/xss1.ff",
"./blogEntries/xss/w3schoolsxss1.ff",
"./blogEntries/csrf/w3schoolscsrf1.ff",
"./projects/fastframework/fastframework.ff",
"./projects/jex/jex.ff",
"./ff.js",
"./main.js",
"./main.css",
"./index.html",
"./resources/w3schoolspayload.png",
"./resources/w3schoolsxsslanscape.png",
"./resources/w3schoolsxss.png",
"./resources/yo.png",
"./resources/network.jpg",
"./resources/computer.jpg",
"./resources/cybersecurity.jpg",
"./resources/crow.jpg",
"./resources/projects.png",
"./resources/github.png",
"./resources/twitter.png",
"./resources/elhacker.png",
"./resources/telegram.png",
"./resources/email.png"
];
ff.cache.start("./cache.js", 104800000); 
/* 604800000 milliseconds equals 1 week */

