/* eslint-disable react/prop-types */
import { useState } from "react";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

const InputPage = () => {
  const  push  = useNavigate();
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");

  const calculateBMI = (weight, height) => {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    return bmi.toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bmi = calculateBMI(weight, height);
    const userData = { age, weight, height, gender, bmi };
    Cookies.set('userData', JSON.stringify(userData), { expires: 7 });
    console.log(userData);
    push('/result');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">BMI Calculator</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          >
            <option value="">Select</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Calculate BMI
        </button>
      </form>
    </div>
  );
};

export default InputPage;
