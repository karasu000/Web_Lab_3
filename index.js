function flip(arr, i) {
  let temp,
    start = 0;
  while (start < i) {
    temp = arr[start];
    arr[start] = arr[i];
    arr[i] = temp;
    start++;
    i--;
  }
}
function findMax(arr, n) {
  let mi, i;
  for (mi = 0, i = 0; i < n; ++i) if (arr[i] > arr[mi]) mi = i;

  return mi;
}
function pancakeSort(arr, n) {
  var curr_size = n;
  printArray(arr, findMax(arr, curr_size));
  var bttn_next = document.getElementById("next-step");
  if (bttn_next)
    bttn_next.addEventListener("click", function () {
      if (curr_size > 1) {
        let mi = findMax(arr, curr_size);
        printArray(arr, mi);
        if (mi != curr_size - 1) {
          flip(arr, mi);
          flip(arr, curr_size - 1);
        }
        printArray(arr, curr_size - 1);
        --curr_size;
      }
    });
}

function printArray(arr, el) {
  let app_div = document.getElementById("app");
  app_div.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    if (i == el) {
      app_div.innerHTML += `<span style='color:#a16c30'>${arr[i]}</span>`;
    } else {
      app_div.innerHTML += arr[i];
      app_div.innerHTML += " ";
    }
  }
}
function checkForNan(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === false || Number.isNaN(arr[i])) {
      return true;
    }
  }
}
document.getElementById("submit").addEventListener("click", function () {
  let input = document.getElementById("array-input");
  let array = input.value.split(" ").map(Number);
  if (!checkForNan(array)) {
    pancakeSort(array, array.length);
  } else {
    alert("Знайдено елемент, що не є числом. Перевірте вказані дані");
  }
});
