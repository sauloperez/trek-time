export function decimalToTime(decimal) {
  const mod = decimal % 1,
    minutes = Math.ceil(mod * 60),
    hours = (decimal - mod);

  return hours + "h " + minutes + "min";
}

export function totalTime(slope, distance) {
  if (slope == null || distance == null) {
    return;
  }

  const slope_h = parseInt(slope)/300,
    distance_h = parseInt(distance)/4,
    up_time = Math.max(slope_h, distance_h) + (0.5 * Math.min(slope_h, distance_h)),
    down_time = up_time * 2/3;

  return ((up_time + down_time) * 1.2).toFixed(2);
}
