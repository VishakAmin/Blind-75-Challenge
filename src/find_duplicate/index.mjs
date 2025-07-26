function hasDuplicate(arr) {
  let hashMap = {};
  for (let i of arr) {
    if (hashMap[i]) return true;
    hashMap[i] = true;
  }
  return false;
}

function checkDuplicates() {
  const input = document.getElementById("inputArray").value;
  const numbers = input.split(",").map((num) => parseInt(num.trim()));
  const result = hasDuplicate(numbers);

  document.getElementById("outputResult").textContent = result
    ? "✅ Duplicate found!"
    : "✅ No duplicates found.";
}
