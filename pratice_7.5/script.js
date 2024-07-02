

     const mealName = document.getElementById("mealName").value;
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
    
          const resultsDiv = document.querySelector(".card_s");
          resultsDiv.innerHTML = "";
          if (data.meals && data.meals.length > 0) {
            data.meals.forEach((meal) => {
              resultsDiv.innerHTML += `
                <div onclick="singleProduct('${meal.strMeal}')" class="card">
                  <img id="img1" src="${meal.strMealThumb}" alt="${meal.strMeal}">
                  <div class="card_texts">
                    <h2>${meal.strMeal}</h2>
                  </div>
                </div>
              `;
            });
          } else{
            resultsDiv.textContent = alert("Search Not Found");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          const resultsDiv = document.querySelector(".card_s");
          resultsDiv.textContent = "An error occurred while searching for meals.";
        });
    const searchMeal = () => {
      const mealName = document.getElementById("mealName").value;
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
                
          const resultsDiv = document.querySelector(".card_s");
          resultsDiv.innerHTML = "";
          if (data.meals && data.meals.length > 0) {
            data.meals.forEach((meal) => {
              resultsDiv.innerHTML += `
                <div onclick="singleProduct('${meal.strMeal}')" class="card">
                  <img id="img2" src="${meal.strMealThumb}" alt="${meal.strMeal}">
                  <div class="card_texts">
                    <h2>${meal.strMeal}</h2>
                  </div>
                </div>
              `;
            }); 
          } else {
            resultsDiv.textContent = alert("Search Not Found");

          }

        });
    };

    const singleProduct = (strMeal) => {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`)
        .then(res => res.json())
        .then(data => {
          if (data.meals && data.meals.length > 0) {
            const meal = data.meals[0];
            document.getElementById("item_details").innerHTML = `
              <img id='img2' src="${meal.strMealThumb}" alt="${meal.strMeal}"> 
              <h2>${meal.strMeal}</h2>
            
             

              <ul>
                ${Object.keys(meal)
                  .filter(key => key.startsWith('strIngredient') && meal[key])
                  .map(key =>
                   `<li>${meal[key]}</li>`)
                  .join('')}
              </ul>
            `;
          } else {
            document.getElementById("item_details").textContent = alert("Not found");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          document.getElementById("item_details").textContent = "An error occurred while fetching meal details.";
        });
    };
