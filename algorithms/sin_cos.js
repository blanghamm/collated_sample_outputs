class SinCos {
  // function to change initial x co-ordinate of the line
  x1(t) {
    return (
      Math.sin(t / 200) * 125 + Math.sin(t / 20) * 125 + Math.sin(t / 30) * 125
    );
  }
  // function to change initial y co-ordinate of the line
  y1(t) {
    return (
      Math.cos(t / 10) * -125 + Math.cos(t / 20) * 125 + Math.cos(t / 30) * 125
    );
  }
  // function to change final x co-ordinate of the line
  x2(t) {
    return (
      Math.sin(t / 15) * 125 + Math.sin(t / 25) * 125 + Math.sin(t / 35) * 125
    );
  }
  // function to change final y co-ordinate of the line
  y2(t) {
    return (
      Math.cos(t / 15) * 125 + Math.cos(t / 25) * 125 + Math.cos(t / 35) * 125
    );
  }
}
