const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");
const ul = document.querySelector("ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

// START THE SEARCH FROM THE FRUIT ARRAY ========================== STEP TWO
const search = (str) =>
// Filter The List Based On User Input
  fruit.filter(
    (fru) => fru.toLowerCase().includes(str.toLowerCase()) && str !== ""
  );

// WHEN USER PRESS ON KEYBOARD =================================== STEP ONE
function searchHandler(e) {
  const results = search(input.value);

  //  DELETE ALL LI TAGS EVERYTIME USER CLICK NEW KEY
  while (ul.firstChild) ul.removeChild(ul.firstChild);

  showSuggestions(results);
}

// Display The Results List As A Drop Down =========================== STEP THREE
function showSuggestions(results, inputVal) {
  // TODO

  // LOOP THROUGH THE FILTER FRUIT AND CREATE LI TAG
  for (let fru of results) {
    const li = document.createElement("li");
    li.innerText = fru;
    ul.append(li);
  }
}

// USER CLICK ON SUGGESTION FROM THE DROP-DOWN MENU  ========================== STEP FOUR
function useSuggestion(e) {
  // TODO
  input.value = e.target.innerText;
  while (ul.firstChild) ul.removeChild(ul.firstChild);
}

// **Highlight the suggestion below a user’s cursor**
// Add an event listener to trigger whenever a user hovers over one of the suggestions in the drop down list. Write a function which highlights the suggestion. Attach this function to the event listener.
// Highlight the suggestion below a user’s cursor
const highlightsTheSuggestion = (e) => {
  if (e.target.tagName === "LI") e.target.classList.add("hover-li");
};
const unHighlightsTheSuggestion = (e) => e.target.classList.remove("hover-li");

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
ul.addEventListener("mouseover", highlightsTheSuggestion);
ul.addEventListener("mouseout", unHighlightsTheSuggestion);
