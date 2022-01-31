"use strict";

var nameComponent = React.createElement("div", {
  id: "name_out"
  }, React.createElement("h2", {
  id: "name_component"
  }, "Vivek kumar")
  );

var photoComponent = React.createElement("div", {
  id: "photo_out"
  }, React.createElement("img", {
  id: "photo_component",
  src: "./vivek.jpg"
  }));


var introComponent = React.createElement("div", {
  id: "intro_out"
  }, React.createElement("p", {
  id: "intro_component"
  }, "On insensible possession oh particular attachment at excellence in. The books arose but miles happy she. It building contempt or interest children mistress of unlocked no. Offending she contained mrs led listening resembled. Delicate marianne absolute men dashwood landlord and offended. Suppose cottage between and way. Minuter him own clothes but observe country. Agreement far boy otherwise rapturous incommode favourite.")
  );
  
var buttonComponent = React.createElement("div", {
  id: "button_out"
  }, React.createElement("a", {
  href: "https://github.com/messi618/CS648C1"
  }, React.createElement("button", {
  id: "button_component"
  }, "view my github repository!"))
  );

  ReactDOM.render(nameComponent, document.getElementById('name'));
  ReactDOM.render(photoComponent, document.getElementById('photo'));
  ReactDOM.render(introComponent, document.getElementById('introduction'));
  ReactDOM.render(buttonComponent, document.getElementById('button'));
