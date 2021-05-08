let printNumber = (number) => {
  switch (number.toString().length) {
    case 1: {
      return '00' + number;
    }
    case 2: {
      return '0' + number;
    }
    case 3: {
      return number;
    }
    default: {
      return number;
    }
  }
};

let generateNewQueue = (counter, currentQueue) => {
  currentQueue[counter] = 1;
  localStorage.setItem('currentQueue', JSON.stringify(currentQueue));
};

module.exports = (counter) => {
  let currentQueue = JSON.parse(localStorage.getItem('currentQueue'));
  if (currentQueue.hasOwnProperty(counter)) {
    let lastNumber = currentQueue[counter];
    if (lastNumber !== 999) {
      currentQueue[counter] = lastNumber + 1;
      localStorage.setItem('currentQueue', JSON.stringify(currentQueue));
      return printNumber(lastNumber + 1);
    } else {
      generateNewQueue(counter, currentQueue);
      return '001';
    }
    
  } else {
    generateNewQueue(counter, currentQueue);
    return '001';
  }
};
