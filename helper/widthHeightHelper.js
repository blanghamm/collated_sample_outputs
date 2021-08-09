class widthHeightHelper {
  constructor(p) {
    this.p = p;
  }
  w(val) {
    if (val == null) return p.width;
    return this.p.width * val;
  }
  h(val) {
    if (val == null) return p.height;
    return this.p.height * val;
  }
}
