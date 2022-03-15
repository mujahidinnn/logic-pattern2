document.write("LOGIC 2.1 <br><br>");
var n = 9;

for (x = 0; x < n; x++) {
  for (y = 0; y < n; y++) {
    if (x == y) {
      document.write(" ▰ ");
    } else {
      document.write(" ▱ ");
    }
  }
  document.write("<br>");
}

document.write("<br><br>");
//////////

document.write("LOGIC 2.2 <br><br>");
var n = 9;

for (x = 0; x < n; x++) {
  for (y = 0; y < n; y++) {
    if (n - x - 1 == y) {
      document.write(" ▰ ");
    } else {
      document.write(" ▱ ");
    }
  }
  document.write("<br>");
}

document.write("<br><br>");
///////////

document.write("LOGIC 2.3 <br><br>");
var n = 9;

for (x = 0; x < n; x++) {
  for (y = 0; y < n; y++) {
    if (x == y) {
      document.write(" ▰");
    } else if (n - x - 1 == y) {
      document.write(" ▰ ");
    } else {
      document.write(" ▱ ");
    }
  }
  document.write("<br>");
}

document.write("<br><br>");
///////////

document.write("LOGIC 2.4 <br><br>");
var n = 9;

for (x = 0; x < n; x++) {
  for (y = 0; y < n; y++) {
    if (x + 1 > y) {
      document.write(" ▰ ");
    } else {
      document.write(" ▱ ");
    }
  }
  document.write("<br>");
}

document.write("<br><br>");
///////////

document.write("LOGIC 2.5 <br><br>");
var n = 9;

for (x = 0; x < n; x++) {
  for (y = 0; y < n; y++) {
    if (x > n - y - 2) {
      document.write(" ▰");
    } else {
      document.write(" ▱ ");
    }
  }
  document.write("<br>");
}

document.write("<br><br>");
//////////

document.write("LOGIC 2.6 <br><br>");
var n = 9;

for (x = 0; x < n; x++) {
  for (y = 0; y < n; y++) {
    if (x < y) {
      document.write(" ▱ ");
    } else if (x < n - y - 1) {
      document.write(" ▱ ");
    } else {
      document.write(" ▰ ");
    }
  }
  document.write("<br>");
}

document.write("<br><br>");
