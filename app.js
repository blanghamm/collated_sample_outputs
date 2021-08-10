const s = (p) => {
  //Sin & cos variables
  let t = 0;

  //global class objects initialisation
  sc = new SinCos();
  wh = new widthHeightHelper(p);

  //global values
  const background_color = "black";

  //Helper functions
  const saveToFile = () => {
    // p.saveCanvas("sample_output_color", "png");
    capturer.save();
    capturer.stop();
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  //First sample_output using sin & cos start
  p.setup = () => {
    p.frameRate(60);
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    btn = p.createButton("save_output");
    btn.mousePressed(saveToFile);
    p.colorMode(p.HSB, 360, 100, 100);
  };
  p.draw = () => {
    // if (p.frameCount === 1) {
    //   capturer.start();
    // }
    p.background(background_color);
    p.stroke(t, 80, 100);
    p.strokeWeight(1.5);
    p.noFill();

    //First line drawing
    // for (let i = 0; i < 100; i++) {
    //   p.line(sc.x1(t + i), sc.y1(t + i), sc.x2(t + i) + 20, sc.y2(t + i) + 20);
    // }
    //Second line drawing
    for (let i = 0; i < 10; i++) {
      let noiseVal = p.noise(sc.x1(t - i) / 1000);
      p.line(sc.x1(t - i), sc.x1(t - i), sc.x2(t * noiseVal), sc.y2(t - i));
    }
    t += 0.15;
    // capturer.capture(document.getElementById("defaultCanvas0"));
  };
  //First sample_output using sin & cos end

  // //Second sample_output using chaikins algorithm
  // const makeCircle = (numSteps, radius) => {
  //   const points = [];
  //   const radiansPerStep = (Math.PI * 2) / numSteps;

  //   for (let theta = 0; theta < Math.PI * 2; theta += radiansPerStep) {
  //     const x = 0.5 + radius * Math.cos(theta);
  //     const y = 0.5 + radius * Math.sin(theta);
  //     points.push([x, y]);
  //   }
  //   return points;
  // };

  // const distortPolygon = (polygon) => {
  //   const z = p.frameCount / 100;
  //   return polygon.map((point) => {
  //     const x = point[0];
  //     const y = point[1];
  //     const distance = p.dist(0.5, 0.5, x, y);

  //     const noiseFn = (x, y) => {
  //       const noiseX = (x + 0.31) * distance * 2;
  //       const noiseY = (y - 1.73) * distance * 2;
  //       return p.noise(noiseX, noiseY, z);
  //     };
  //     const theta = noiseFn(x, y) * Math.PI * 3;

  //     const amountToNudge = 0.08 - Math.cos(z) * 0.08;
  //     const newX = x + amountToNudge * Math.cos(theta);
  //     const newY = y + amountToNudge * Math.sin(theta);
  //     return [newX, newY];
  //   });
  // };

  // const chaikin = (arr, num) => {
  //   if (num === 0) return arr;
  //   const l = arr.length;
  //   const smooth = arr
  //     .map((c, i) => {
  //       return [
  //         [
  //           0.75 * c[0] + 0.25 * arr[(i + 1) % l][0],
  //           0.75 * c[1] + 0.25 * arr[(i + 1) % l][1],
  //         ],
  //         [
  //           0.25 * c[0] + 0.75 * arr[(i + 1) % l][0],
  //           0.25 * c[1] + 0.75 * arr[(i + 1) % l][1],
  //         ],
  //       ];
  //     })
  //     .flat();
  //   return num === 1 ? smooth : chaikin(smooth, num - 1);
  // };

  // p.setup = () => {
  //   p.frameRate(60);
  //   p.createCanvas(p.windowWidth, p.windowHeight);
  //   btn = p.createButton("save_output");
  //   btn.mousePressed(saveToFile);
  //   p.colorMode(p.HSB, 360, 100, 100);
  // };
  // p.draw = () => {
  //   if (p.frameCount === 1) {
  //     capturer.start();
  //   }

  //   p.background(background_color);
  //   p.stroke(t, 80, 100);
  //   p.strokeWeight(1.5);
  //   p.noFill();

  //   for (let radius = 0.2; radius < 0.5; radius += 0.009) {
  //     const circle = makeCircle(5, radius);
  //     const distortedCircle = distortPolygon(circle);
  //     const smoothCircle = chaikin(distortedCircle, 4);
  //     p.beginShape();
  //     smoothCircle.forEach((point) => {
  //       p.vertex(wh.w(point[0]), wh.h(point[1]));
  //     });
  //     p.endShape(p.CLOSE);
  //   }
  //   capturer.capture(document.getElementById("defaultCanvas0"));
  // };
  // //Second sample_output using chaikins
};

new p5(s);
