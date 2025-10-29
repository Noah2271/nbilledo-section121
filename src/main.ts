// CMPM 121 Smelly Code Activity
document.body.innerHTML = `
    <h1>"CMPM 121 Project"</h1>
    <p>Counter: <span id="counter">0</span></p>
    <button id="increment">Click Me!</button>
    <button id="decrement">Decrement</button>
    <button id="reset">Reset</button>
  `;

// Get button elements from document
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");
const counterButton = document.getElementById("counter");
let count = 0;

// updateCounter() function to mitigate duplicated code via Extract Function
function updateCounter(): void {
  counterButton!.innerHTML! = `${count}`;
  document.title = "Clicked " + count;
  document.body.style.backgroundColor = calculateBackgroundColor();
}

function calculateBackgroundColor(): string {
  return count % 2 ? "pink" : "lightblue";
}

// Add click event to the increment button
incrementButton!.addEventListener("click", () => {
  count++;
  updateCounter();
});

// Add click event to the decrement button
decrementButton!.addEventListener("click", () => {
  count--;
  updateCounter();
});

// Add click event to the reset button
resetButton!.addEventListener("click", () => {
  count = 0;
  updateCounter();
});
