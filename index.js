(onload = tillbirthdayphil()), // Loaded onside;
  tillbirthdaymama(),
  tillbirthdaypapa(),
  tillsommerferien(),
  tillFPETarbeit(),
  tilldeutscharbeit();

//
// daten berechnung
//

function tillbirthdayphil() {
  const targetDate = new Date("2025-06-12T00:00:00"); // bis zum datum
  const currentDate = new Date(); // jetziges datum
  const difference =
    (targetDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24); // tage bis datum berechnen
  document.getElementById("dataphil").textContent =
    Math.round(difference) + " Days"; // ausgabe von datum
}

function tillbirthdaymama() {
  const targetDate = new Date("2024-09-26T00:00:00"); // bis zum datum
  const currentDate = new Date(); // jetziges datum
  const difference =
    (targetDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24); // tage bis datum berechnen
  document.getElementById("datamama").textContent =
    Math.round(difference) + " Days"; // ausgabe von datum
}

function tillbirthdaypapa() {
  const targetDate = new Date("2024-10-07T00:00:00"); // bis zum datum
  const currentDate = new Date(); // jetziges datum
  const difference =
    (targetDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24); // tage bis datum berechnen
  document.getElementById("datapapa").textContent =
    Math.round(difference) + " Days"; // ausgabe von datum
}

function tillsommerferien() {
  const targetDate = new Date("2024-12-23T00:00:00");
  const currentDate = new Date();
  const difference =
    (targetDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24);
  document.getElementById("dataferien").textContent =
    Math.round(difference) + " Days";
}



//
// Theme switch code
//

var isDarkTheme = false; // setzt dark theme auf untogglet

function themeswitch() {
  // funktion
  if (!isDarkTheme) {
    // setzt dunkles theme
    var bodyElements = document.getElementsByTagName("h1");
    for (var i = 0; i < bodyElements.length; i++) {
      bodyElements[i].style.color = "white";
    }
    document.body.style.backgroundColor = "black";
    document.getElementsByClassName("wrapper")[0].style.backgroundColor =
      "#0e0f13";
    isDarkTheme = true;
  } else {
    // setzt light theme
    var bodyElements = document.getElementsByTagName("h1");
    for (var i = 0; i < bodyElements.length; i++) {
      bodyElements[i].style.color = "black";
    }
    document.body.style.backgroundColor = "white";
    document.getElementsByClassName("wrapper")[0].style.backgroundColor =
      "Lightgrey";
    isDarkTheme = false;
  }
}


