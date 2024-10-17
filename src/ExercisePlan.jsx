/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { House } from "lucide-react";
import Cookies from "js-cookie";  // You'll need to install this package

const ExercisePlan = () => {
  const [exercisePlan, setExercisePlan] = useState(null);
  const [parsedUserData, setParsedUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock data for recommendations (you can customize this logic)
  const recommendationLogic = (userData) => {
    const { BMI, Age, Gender, Exercise, MealType } = userData;
    
    // Based on the userData, recommend workout, diet, etc.
    let workout, diet, sampleMeals;

    if (BMI > 30) {
      workout = "High-intensity cardio and strength training";
      diet = ["Very low carb diet", "High protein diet"];
      sampleMeals = {
      breakfast: "Egg white omelette with spinach",
      lunch: "Grilled chicken breast with quinoa and steamed broccoli",
      dinner: "Baked salmon with asparagus",
      };
    } else if (BMI > 25) {
      workout = "High-intensity cardio";
      diet = ["Low carb diet", "Protein-rich diet"];
      sampleMeals = {
      breakfast: "Oatmeal with fruits",
      lunch: "Grilled chicken with salad",
      dinner: "Salmon with steamed vegetables",
      };
    } else if (BMI > 18.5) {
      workout = "Moderate workout";
      diet = ["Balanced diet"];
      sampleMeals = {
      breakfast: "Greek yogurt with honey and nuts",
      lunch: "Turkey sandwich with whole grain bread",
      dinner: "Stir-fried tofu with mixed vegetables",
      };
    } else {
      workout = "Light workout and strength training";
      diet = ["High calorie diet", "Protein-rich diet"];
      sampleMeals = {
      breakfast: "Smoothie with banana, peanut butter, and protein powder",
      lunch: "Pasta with chicken and pesto",
      dinner: "Beef stew with potatoes and carrots",
      };
    }

    return {
      Workout: workout,
      diet,
      sample_meals: sampleMeals,
    };
  };

  // Fetch and parse userData from the cookie
  useEffect(() => {
    const cookieData = Cookies.get('userData');  // Assuming userData is stored as a stringified JSON
    if (cookieData) {
      const parsedData = JSON.parse(cookieData);
      setParsedUserData(parsedData);
      const plan = recommendationLogic(parsedData);  // Get recommendations
      setExercisePlan(plan);
    }
    setLoading(false);  // Once the parsing and logic are done
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <Link to="/" className="absolute top-4 left-4">
          <House />
        </Link>
        {loading ? (
          <p>Loading exercise plan...</p>
        ) : exercisePlan ? (
          <div className="bg-white p-6 rounded shadow-md w-80">
            <h2 className="text-xl font-bold mb-4">Work Out</h2>
            <Accordion title="Goals">
              <p>{exercisePlan.Workout}</p>
            </Accordion>
            <Accordion title="Diet Recommendations">
              <ul className="list-disc pl-5">
                {exercisePlan.diet.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Accordion>
            <Accordion title="Sample Meals">
              <ul className="list-disc pl-5">
                {Object.entries(exercisePlan.sample_meals).map(
                  ([meal, description], index) => (
                    <li key={index}>
                      <strong>{meal}:</strong> {description}
                    </li>
                  )
                )}
              </ul>
            </Accordion>
          </div>
        ) : (
          <p>No exercise plan found.</p>
        )}
      </div>
    </div>
  );
};

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="w-full mb-4">
        <button
          className="w-full text-left bg-gray-200 p-2 rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          {title}
        </button>
        {isOpen && <div className="p-2 bg-gray-100 rounded">{children}</div>}
      </div>
    );
  };

export default ExercisePlan;
