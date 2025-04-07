function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "b4697434f3a4b96oc63c0bff5tca4166";
  let prompt = `User instructions are: Generate a recipe about ${instructionsInput.value}`;
  let context =
    "You are a quick dessert recipes chef. Your mission is to generate a maximun of 5 ingredients that takes less than an hour to prepare recipe in basic html. Include title of the recipe. Include ingredients and instructions. Sign the recipe with 'Shecodes AI quick chef' inside a <strong> element at the end of the recipe and NOT at the beginning. Leave a blank line between the recipe and the signature. Make sure you follow the user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#recipe");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="Generating"> 👩🏼‍🍳 Generating a quick recipe for ${instructionsInput.value} ⏳</div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let poemFormElement = document.querySelector("#recipe-generator-form");
poemFormElement.addEventListener("submit", generateRecipe);
