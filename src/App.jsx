import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="bg-orange-500 text-white p-4 w-full">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <svg
                className="w-10 h-10 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z" />
              </svg>
              <span className="text-2xl font-bold">FitLife</span>
            </div>
            <div className="block lg:hidden">
              <button
                onClick={toggleMenu}
                className="focus:outline-none text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
            <nav className={`lg:block ${isOpen ? "block" : "hidden"} lg:flex`}>
              <ul className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
                <li>
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/input" className="hover:underline">
                    BMI Calculator
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="flex-grow mx-auto relative w-full">
          <div className="relative w-full h-full">
            <img
              src="https://plus.unsplash.com/premium_photo-1672576784416-0ec1ad75a061?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zml0bmVzcyUyMHdvbWFufGVufDB8fDB8fHww"
              alt="Fitness model with dumbbell"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 p-10 bg-black bg-opacity-50 text-white min-h-screen flex flex-col justify-center">
              <h1 className="text-9xl font-bold mb-4">Nene GYM Ja Jadeee</h1>
              <p className="text-gray-300 text-xl container">
                Calculate your Body Mass Index (BMI) to understand your fitness
                level. Use our BMI calculator to find out if you are
                underweight, normal weight, overweight, or obese. Stay healthy
                and fit with personalized fitness plans.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
