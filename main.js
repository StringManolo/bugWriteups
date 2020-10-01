import ff from "./ff.js";

/* import ff from "https://fastframework.ga/ff.js"; */

ff.activateShortcuts();

  ff.customTags = {
	myMenu:`<section><article id="mainMenu"><a href="#home">HOME</a>
<a href="#writeups">WRITEUPS</a>
<a href="#updates">UPDATES</a>
<a href="#about">ABOUT</a></article></section>`
};

var home = `<h1>Welcome!</h1>
Welcome to my page`;

var writeups = `<div id="writeupsContainer">
<h1>Writeups!</h1>
Enjoy my discovers!
<a class="xssLink" href="#writeups/xss">XSS</a>
<a href="#writeups/csrf">CSRF</a>
</div>`;

var updates = `<h1>Updates!</h1>
Last changes!`;

var about = `<h1>About!</h1>
This work is made by <a href="#stringmanolo">String Manolo</a>.`;

var menuXss = `<h2>XSS</h2>
<a class="xssLink" href="#writeups/xss/xss1">3 x 1!</a>
<br />
<a class="xssLink" href="#writeups/xss/xss2">Ejemplo de texto</a>`;

var four04 = `<h1>404</h1>
The requested url was not found.`;

ff.routes = {
  route1: {
    name: "home",
    action: function() {
      $("myViews").innerHTML = ff.customTags.myMenu + home;
      $("#nonCenter").innerHTML = "";
    }
  },

  route2: {
    name: "writeups",
    action: function() {
      $("myViews").innerHTML = ff.customTags.myMenu + writeups;
      $("#nonCenter").innerHTML = "";
    }
  },

  route3: {
    name: "updates",
    action: function() {
      $("myViews").innerHTML = ff.customTags.myMenu + updates;
      $("#nonCenter").innerHTML = `<history-logs>route="./logs/dev/"</history-logs>`;
      ff.getCustomTags();
    }
  },

  route4: {
    name: "about",
    action: function() {
      $("myViews").innerHTML = ff.customTags.myMenu + about;
      $("#nonCenter").innerHTML = "";
    }
  },

  route5: {
    name: "stringmanolo",
    action: function() { 
      alert("Github: https://github.com/stringmanolo");
    }
  },

  route6: {
    name: "writeups/xss",
    action: function() {
      $("myViews").innerHTML = ff.customTags.myMenu + writeups;
      /*
      $("#writeupsContainer").innerHTML += menuXss;
      */
      $("#nonCenter").innerHTML = menuXss;
    }
  },

  route7: {
    name: "writeups/xss/xss1",
    action: function() {
      $("myViews").innerHTML = `<xss-1>route="./blogEntries/xss/"</xss-1>`;
      $("#nonCenter").innerHTML = "";
      ff.getCustomTags();
    }
  },

  amount: 7,

  routeDefault: {
    name: "default",
    action: function() {
      $("myViews").innerHTML = ff.customTags.myMenu + four04;
      $("#nonCenter").innerHTML = "";
    }
  }
};

ff.router.start();

ff.mustache.copyright = `<div class="copyright">&copy; ${new Date().getFullYear()}</div>
<style>
.copyright {
  bottom: 10px;
  right: 10px;
  position: fixed;
}
</style>
`;

ff.mustache.date = ""+new Date();

ff.getUnknownTags();
ff.getCustomTags();
ff.getMustacheSintax();
