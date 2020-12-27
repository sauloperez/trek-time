const GAP = 1.2;

export function decimalToTime(decimal) {
  if (decimal == null) {
    return "...";
  }

  const mod = decimal % 1,
    minutes = Math.ceil(mod * 60),
    hours = (decimal - mod);

  return hours + "h " + minutes + "min";
}

export function timings(slope, distance) {
  if (slope == null || slope == "" || distance == null || distance == "") {
    return [null, null, null];
  }

  const slope_h = parseInt(slope)/300,
    distance_h = parseInt(distance)/4,
    up_time = upTime(slope_h, distance_h),
    down_time = downTime(up_time),
    total_time = totalTime(up_time, down_time);

  return { up_time, down_time, total_time };
}

function upTime(slope_h, distance_h) {
  return Math.max(slope_h, distance_h) + (0.5 * Math.min(slope_h, distance_h));
}

function downTime(up_time) {
  return up_time * 2/3;
}

function totalTime(up_time, down_time) {
  return ((up_time + down_time) * GAP).toFixed(2);
}
