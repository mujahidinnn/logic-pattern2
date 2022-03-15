document.write("LOGIC 3.1 <br><br>");
var n = 9;

for (x = 0; x < n; x++) {
  for (y = 0; y < n; y++) {
    if (x == y) {
      document.write(x * 2 + 1 + "&nbsp");
    } else {
      document.write(" 🆇 ");
    }
  }
  document.write("<br>");
}

document.write("<br><br>");
//////////

document.write("LOGIC 3.2 <br><br>");
var n = 9;

for (x = 0; x < n; x++) {
  for (y = 0; y < n; y++) {
    if (n - x - 1 == y) {
      document.write(y * 2 + "&nbsp");
    } else {
      document.write(" 🆇 ");
    }
  }
  document.write("<br>");
}

document.write("<br><br>");
//////////

document.write("LOGIC 3.3 <br><br>");
var n = 9;

for (x = 0; x < n; x++) {
  for (y = 0; y < n; y++) {
    if (x == y) {
      document.write(x * 2 + 1 + "&nbsp");
    } else if (n - x - 1 == y) {
      document.write(y * 2 + "&nbsp");
    } else {
      document.write(" 🆇 ");
    }
  }
  document.write("<br>");
}

document.write("<br><br>");
//////////

// document.write("LOGIC 3.4 <br><br>");Menggunakan cara ini juga bisa
// var n = 9;
//
// for (x = 0; x < n; x++) {
// for (y = 0; y < n; y++) {
// if (x == y) {
// document.write(x * 2 + 1 + "&nbsp");
// } else if (
// x + 1 == y ||
// x + 2 == y ||
// x + 3 == y ||
// x + 4 == y ||
// x + 5 == y ||
// x + 6 == y ||
// x + 7 == y ||
// x + 8 == y
// ) {
// document.write(" 🆇 ");
// } else {
// document.write(" 🅰 ");
// }
// }
// document.write("<br>");
// }
// document.write("<br><br>");

document.write("LOGIC 3.4 <br><br>");
var n = 9;

for (x = 0; x < n; x++) {
  for (y = 0; y < n; y++) {
    if (x == y) {
      document.write(x * 2 + 1 + "&nbsp");
    } else if (x > y) {
      document.write(" 🅰 ");
    } else {
      document.write(" 🆇 ");
    }
  }
  document.write("<br>");
}

document.write("<br><br>");
///////////

document.write("LOGIC 3.5 <br><br>");
var n = 9;

for (x = 0; x < n; x++) {
  for (y = 0; y < n; y++) {
    if (x == y) {
      document.write(x * 2 + 1 + "&nbsp");
    } else if (x > y) {
      document.write(" 🅰 ");
    } else {
      document.write(" 🅱 ");
    }
  }
  document.write("<br>");
}

document.write("<br><br>");
//////////

document.write("LOGIC 3.6 <br><br>");
var n = 9;
var s = "";

for (var x = 0; x < n; x++) {
  for (var y = 0; y < n; y++) {
    if (x == y) {
      s += `${x * 2 + 1} &nbsp`;
    } else if (n - y - 1 == x) {
      s += `${y * 2} &nbsp`;
    } else {
      // kiri
      if (n - y - 1 <= x || y >= x) {
        s += "&nbsp";
      } else {
        s += "A";
      }
      // kanan
      if (x >= y || n - x - 1 >= y) {
        s += "&nbsp";
      } else {
        s += " B";
      }
      // bawah
      if (x < y || x < n - y - 1) {
        s += "&nbsp";
      } else {
        s += " - ";
      }
      // atas
      if (x > y || x > n - y - 1) {
        s += "&nbsp";
      } else {
        s += " - ";
      }
    }
  }
  s += "<br>";
}
document.write(s);
