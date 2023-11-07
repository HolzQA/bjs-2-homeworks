function getArrayParams(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const temp = arr.reduce((a, i) => a + i, 0) / arr.length;
  const avg = +temp.toFixed(2);

  return { 
    min: min, 
    max: max, 
    avg: avg 
  };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr.reduce((a, i) => a + i, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElements = 0;
  let sumOddElements = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElements += arr[i];
    } else {
      sumOddElements += arr[i];
    }
  }

  return sumEvenElements - sumOddElements;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElements = 0;
  let countEvenElements = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElements += arr[i];
      countEvenElements ++;
    }
  }

  if (countEvenElements === 0) {
    return 0;
  }

  return sumEvenElements / countEvenElements;
}

function makeWork (arrOfArr, func) {
  if (arrOfArr.length === 0) {
    return 0;
  }

  maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    if (maxWorkerResult < func(...arrOfArr[i])) {
      maxWorkerResult = func(...arrOfArr[i]);
    }
  }

  return maxWorkerResult;
}