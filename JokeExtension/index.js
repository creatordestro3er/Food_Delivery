const getFood = async () => {
  try {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await res.json();
    const myfood = document.querySelector("#food");
    food.innerHTML = data.value;
  } catch (error) {}
};

window.addEventListener("load", () => {
  getFood();
});
