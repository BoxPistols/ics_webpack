"use strict";

{
  function draw() {
    const canvas = document.querySelector("canvas");

    if (typeof canvas.getContext === "undefined") {
      return;
    }

    const ctx = canvas.getContext("2d");

    /*
    ctx.fillStyle = "pink";
    ctx.strokeStyle = "#f00";
    ctx.lineWidth = 8;
    ctx.lineJoin = "round";
    // ctx.lineJoin = "bevel";

    ctx.fillRect(50, 50, 50, 50);
    ctx.strokeRect(50, 50, 50, 50);
*/
    // ctx.rect(50, 50, 50, 50);

    // ctx.ellipse(x, y, rx, ry, rotation, start, end);
    ctx.ellipse(80, 40, 70, 30, 0, 0, 2 * Math.PI);
    ctx.stroke();

    const w = { d: "2", dv: "15" };
    w.tech = "200";
    console.log(w);
  }

  draw();
}
