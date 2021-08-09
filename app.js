const s = (p) => {
  let t = 0;

  //global values
  const background_color = "black";
  const stroke_weight = 1.5;

  p.noiseScale = 0.02;

  p.setup = () => {
    p.frameRate(60);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.noStroke();
    btn = p.createButton("save_output");
    btn.mousePressed(saveToFile);
    p.colorMode(p.HSB, 360, 100, 100);
    sc = new SinCos();
  };

  p.draw = () => {
    //output default canvas
    p.background(background_color);
    p.stroke(t, 80, 100);
    p.strokeWeight(stroke_weight);
    p.translate(p.width / 2, p.height / 2);

    // for (let i = 0; i < 100; i++) {
    //   p.line(sc.x1(t + i), sc.y1(t + i), sc.x2(t + i) + 20, sc.y2(t + i) + 20);
    // }

    for (let i = 0; i < 10; i++) {
      let noiseVal = p.noise(sc.x1(t - i) / 1000);
      p.line(sc.x1(t - i), sc.x1(t - i), sc.x2(t * noiseVal), sc.y2(t - i));
    }
    t += 0.15;
  };

  const saveToFile = () => {
    p.saveCanvas("sample_output_color", "png");
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(s);
