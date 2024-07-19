function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = 0;
  let avg = 0;

  sum = arr.reduce((acc, val) => acc + val);

  avg = sum / arr.length;

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let differenceMaxMin = 0;

  if (arr.length === 0) {
    return 0;
  } else {
    differenceMaxMin = max - min;
  }

  return differenceMaxMin;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let differenceEvenOdd = 0;

  if (arr.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
   if (arr[i] % 2 === 0) {
     sumEvenElement += arr[i];
   } else {
     sumOddElement +=arr[i];
   }

   differenceEvenOdd = sumEvenElement - sumOddElement;

  }

  return differenceEvenOdd;
}


function averageEvenElementsWorker(...arr) {
  let sumEvenElements =  0;
  let countEvenElements = 0;
  let averageEvenElements = 0;

  if (arr.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElements += arr[i];
      countEvenElements++;
    }
  }

  averageEvenElements = sumEvenElements/countEvenElements;

  return averageEvenElements;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}
