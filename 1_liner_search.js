const array = [1, 4, 3, 6, 4, 2, 11, 8, 5, 9, 10]

function linerSearch(array, item) {

  for (let i = 0; i < array.length; i++) {

    if(array[i] === item) {
      return i;
    }
  }
  return null;
}

console.log(linerSearch(array, 11));