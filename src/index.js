module.exports = function getZerosCount(number, base) {
  // your implementation
  const massimple = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109,
    113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251];
  const simplebase = [];
  let a = 0;
  i = 0;
  while (i < massimple.length) {
    if (massimple[i] <= base) {
      let znmim = parseInt(base / massimple[i]);
      let znmax = base / massimple[i];
      if (znmim === znmax) {
        const simplebase1 = [];
        simplebase1[0] = massimple[i];
        simplebase1[1] = 1;
        let flag = false;
        for (var j = 0; j < simplebase.length; j++) {
          if (simplebase[j][0] === massimple[i]) {
            flag = true;
            simplebase[j][1] = simplebase[j][1] + 1;
            break;
          }
        }
        if (flag === false)
          simplebase.push(simplebase1);
        a++;
        base = znmim;
        i = 0;
      }
      else
        i++;
    }
    else break;
  }
  // console.log(simplebase);
  let masnumber = [];
  for (var j = 0; j < simplebase.length; j++) {
    let znelem = Number(simplebase[j][0]);
    let znelem1 = Number(simplebase[j][0]);
    let znach = Number(simplebase[j][1]);
    // console.log(proba + "  " + znach);
    sum = 0;
    while (znelem <= number) {
      sum = sum + parseInt(number / znelem);
      i++;
      znelem = znelem * znelem1;
    }
    masnumber.push((parseInt(sum / znach)));
  }
  let min = masnumber[0];
  for (let i = 0; i < masnumber.length; i++) {
    if (min > masnumber[i]) min = masnumber[i];
  }
  console.log("minimum: " + min);
  return min;
}

const factorial = (n, max) => {
  if (n === max)
    return 1;
  else {
    return n * factorial((n - 1), max);
  }
}