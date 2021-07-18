/* nahodenie prepínačov veľkosti textu na stránke */
fonts = document.getElementById("fonts");
string = '<p style="text-align: left;">';
string += "Vyberte si vhodnú veľkosť písma:<br>";
string +=
  '<span style="font-size: 85%; cursor: pointer;" id="dec1">&nbsp;A<sup>-</sup>&nbsp;</span>';
string +=
  '<span style="border-bottom: 1px solid gray; cursor: pointer;" id="normal">&nbsp;Normal&nbsp;</span>';
string +=
  '<span style="font-size: 115%; cursor: pointer;" id="inc1">&nbsp;A<sup>+</sup>&nbsp;</span>';
string +=
  '<span style="font-size: 125%; cursor: pointer;" id="inc2">&nbsp;A<sup>++</sup>&nbsp;</span></p>';
fonts.innerHTML = string;

const fSize =
  parseInt(
    window.getComputedStyle(document.body).getPropertyValue("font-size")
  ) / 16;

/* kontrola tlačidiel na ovládanie veľkosti textu */
font = document.querySelectorAll("#inc1, #inc2, #normal, #dec1");
font.forEach((element) => {
  element.addEventListener("click", function () {
    // click to increase or decrease
    let btn = this; /* daj do premennej btn čo bolo stlačené? */
    font.forEach((e) => {
      e.style.border = "0";
    });
    if (btn.id === "inc1") {
      fontSize = fSize + 0.0625;
      btn.style.borderBottom = "1px solid gray";
    } else if (btn.id === "inc2") {
      fontSize = fSize + 0.125;
      btn.style.borderBottom = "1px solid gray";
    } else if (btn.id === "dec1") {
      fontSize = fSize - 0.0625;
      btn.style.borderBottom = "1px solid gray";
    } else { //už zostáva iba normal...
      fontSize = fSize;
      btn.style.borderBottom = "1px solid gray";
    }
    document.body.style.fontSize = fontSize + "rem"; // set the body font size to the new value
  });
});
