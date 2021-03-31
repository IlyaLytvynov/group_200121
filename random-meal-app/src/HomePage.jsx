import React from 'react';

export class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      mealTitle: '-----',
      mealThumb: '',
      greetPhrase: 'Random meal for today!',
      youtubeLink: '',
      ingredients: [],
    };
  }

  fetchRandomMEal() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then((data) => {
        const meal = data.meals[0];
        console.log(meal);

        this.setState({
          mealTitle: meal.strMeal,
          mealThumb: meal.strMealThumb,
          ingredients: this.formatIngrediantesAndMeasures(meal),
          instructions: meal.strInstructions,
        });
      });
  }
  componentDidMount() {
    this.fetchRandomMEal();
  }

  formatIngrediantesAndMeasures(mealObject) {
    const ingredientsKey = 'strIngredient';
    const measureKey = 'strMeasure';
    const ingreentsAndMeasures = [];
    for (let i = 1; i <= 20; i++) {
      const key1 = ingredientsKey + i;
      const key2 = measureKey + i;
      if (!mealObject[key1] || !mealObject[key2]) continue;
      const ingredientsAndMeasure = `${mealObject[key1]} ${mealObject[key2]}`;
      ingreentsAndMeasures.push(ingredientsAndMeasure);
    }

    return ingreentsAndMeasures;
  }

  render() {
    console.log(this.state.ingredients);
    const ingredientsList = [];

    for (let ing of this.state.ingredients) {
      const el = <li>{ing}</li>;
      ingredientsList.push(el);
    }
    console.log(ingredientsList);
    return (
      <div>
        <button
          onClick={() => {
            this.fetchRandomMEal();
          }}
        >
          GET NEW RANDOM!!
        </button>
        <h1>{this.state.greetPhrase}</h1>
        <h2>{this.state.mealTitle}</h2>
        <img style={{ width: '450px' }} src={this.state.mealThumb} alt='' />
        <a href={this.state.youtubeLink}>YOU TUBE</a>
        {ingredientsList}
        <p>{this.state.instructions}</p>
      </div>
    );
  }
}
