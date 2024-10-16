/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const ResultPage = () => {
  const [dietPlan, setDietPlan] = useState(null);
  const [parsedUserData, setParsedUserData] = useState(null);
  const [category, setCategory] = useState('');

  useEffect(() => {
    const userDataFromCookie = Cookies.get('userData');
    const parsedUserData = JSON.parse(userDataFromCookie);
    setParsedUserData(parsedUserData);
    
    // Determine diet plan based on BMI
    const { bmi } = parsedUserData;
    let diet_plan = {};
    
    if (bmi < 18.5) {
      setCategory('Underweight');
      diet_plan = {
        "goals": "Gain weight in a healthy manner.",
        "diet": [
          "Increase caloric intake by 300-500 calories per day.",
          "Focus on nutrient-dense foods.",
          "Include more proteins (lean meats, eggs, dairy), healthy fats (avocado, nuts, olive oil), and complex carbs (whole grains, legumes)."
        ],
        "sample_meals": {
          "Breakfast": "Smoothie with banana, peanut butter, and oats.",
          "Lunch": "Quinoa salad with grilled chicken and avocado.",
          "Dinner": "Salmon with brown rice and steamed vegetables.",
          "Snacks": "Nuts, yogurt, cheese."
        }
      };
    } else if (18.5 <= bmi && bmi < 24.9) {
      setCategory('Normal weight');
      diet_plan = {
        "goals": "Maintain weight or improve overall health.",
        "diet": [
          "Focus on a balanced diet.",
          "Include a variety of fruits, vegetables, whole grains, and lean proteins.",
          "Watch portion sizes to maintain weight."
        ],
        "sample_meals": {
          "Breakfast": "Oatmeal with berries and nuts.",
          "Lunch": "Salad with mixed greens, chickpeas, and vinaigrette.",
          "Dinner": "Grilled chicken with roasted vegetables and quinoa.",
          "Snacks": "Hummus with carrot sticks, fruit."
        }
      };
    } else if (25 <= bmi && bmi < 29.9) {
      setCategory('Overweight');
      diet_plan = {
        "goals": "Gradual weight loss (1-2 pounds per week).",
        "diet": [
          "Decrease caloric intake by 500-750 calories per day.",
          "Focus on whole foods, reduce processed foods.",
          "Increase fiber intake (fruits, vegetables, whole grains) to promote satiety."
        ],
        "sample_meals": {
          "Breakfast": "Greek yogurt with chia seeds and berries.",
          "Lunch": "Vegetable soup with whole-grain bread.",
          "Dinner": "Baked fish with a side of steamed broccoli and sweet potato.",
          "Snacks": "Apple slices with almond butter, cucumber slices."
        }
      };
    } else {
      setCategory('Obesity');
      diet_plan = {
        "goals": "Significant weight loss (1-2 pounds per week) under medical supervision if necessary.",
        "diet": [
          "Consult a healthcare professional or a registered dietitian.",
          "Create a deficit of 500-1000 calories per day.",
          "Focus on whole, unprocessed foods."
        ],
        "sample_meals": {
          "Breakfast": "Smoothie with spinach, protein powder, and a banana.",
          "Lunch": "Grilled chicken with a large salad and a light dressing.",
          "Dinner": "Stir-fried vegetables with tofu and brown rice.",
          "Snacks": "Air-popped popcorn, berries."
        }
      };
    }

    setDietPlan(diet_plan);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Your BMI is {parsedUserData?.bmi}</h1>
      <h2 className="text-2xl font-semibold mb-4">Category: {category}</h2>
      {dietPlan ? (
        <div className="bg-white p-6 rounded shadow-md w-80">
          <h2 className="text-xl font-bold mb-4">Diet Plan</h2>
          <p><strong>Goals:</strong> {dietPlan.goals}</p>
          <h3 className="font-semibold mt-4 mb-2">Diet Recommendations:</h3>
          <ul className="list-disc pl-5">
            {dietPlan.diet.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h3 className="font-semibold mt-4 mb-2">Sample Meals:</h3>
          <ul className="list-disc pl-5">
            {Object.entries(dietPlan.sample_meals).map(([meal, description], index) => (
              <li key={index}><strong>{meal}:</strong> {description}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading diet plan...</p>
      )}
    </div>
  );
};

export default ResultPage;
