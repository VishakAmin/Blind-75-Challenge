// create stack
// travel through string
// if opening then push
// else if  closing
//    we need to pop and check with stack
// return false

// if stack is empty will retuen true

function isBalancedBrackets(str) {
  let stack = [];
  let pair = { ")": "(", "}": "{", "]": "[" };

  for (let char of str) {
    if (["{", "(", "["].includes(char)) {
      stack.push(char);
    } else if (["}", ")", "]"].includes(char)) {
      if (stack.length === 0 || stack.pop() !== pair[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

function checkBrackets() {
  const input = document.getElementById("bracketInput").value.trim();
  const result = isBalancedBrackets(input);
  const resultEl = document.getElementById("result");

  if (result) {
    resultEl.textContent = "✅ Balanced!";
    resultEl.style.color = "green";
  } else {
    resultEl.textContent = "❌ Not balanced.";
    resultEl.style.color = "red";
  }
}

document.getElementById("checkBtn").addEventListener("click", checkBrackets);
