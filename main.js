function areaOrPerimeter(l, w) {
  if (l === w) {
    return l * w;
  } else {
    return 2 * (l + w);
  }
}

//Best Practice
const areaOrPerimeter = function (l, w) {
  return l == w ? l * w : 2 * (l + w);
};
