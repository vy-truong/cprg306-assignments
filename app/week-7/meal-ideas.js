"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    const fetchMealIdeas = async (ingredient) => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals || [];
    };

    const loadMealIdeas = async () => {
        if (ingredient) {
            const mealIdeas = await fetchMealIdeas(ingredient);
            setMeals(mealIdeas);
        }
    };

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div className="meal-ideas">
            <h2 className="text-2xl font-bold">Meal Ideas</h2>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal} className="meal-item mb-2">
                        <img src={meal.strMealThumb} alt={meal.strMeal} className="w-16 h-16 rounded mr-4" />
                        {meal.strMeal}
                    </li>
                ))}
            </ul>
        </div>
    );
}
