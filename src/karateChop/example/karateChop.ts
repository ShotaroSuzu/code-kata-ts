const chop = (point: number, target: number[]): number => {
  if (target.length < 1) {
    return -1;
  }
  if (target.length === 1) {
    if (point === target[0]) {
      return 0;
    }
    return -1;
  }

  const targetIndex = Math.trunc(target.length / 2);
  if (point === target[targetIndex]) {
    return targetIndex;
  }
  if (point < target[targetIndex]) {
    return chop(point, target.slice(0, targetIndex));
  }
  const tmp = chop(point, target.slice(targetIndex + 1));
  if (tmp === -1) {
    return -1;
  }
  return tmp + targetIndex + 1;
};

export default chop;
