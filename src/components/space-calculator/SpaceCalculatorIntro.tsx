// src/components/space-calculator/SpaceCalculatorIntro.tsx
import Image from "next/image";

export default function SpaceCalculatorIntro() {
  return (
    <section className="py-20 lg:py-28 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">

        {/* Title + Icon */}
        <div className="flex flex-col items-center mb-10">
          <div className="mb-6 w-20 h-20 bg-red-100 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-4xl">Calculator</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
            Office Space Calculator
          </h1>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto space-y-6 text-lg lg:text-xl text-gray-700 leading-relaxed">
          <p>
            Are you looking for guidelines to know how much space would require to conduct your new office? Use our facile office space calculator and find out how much space you would need to accommodate a new office based on your room and people’s requirements. Select the rooms that you want at your office then enter the number of employees your company will have. After that click on the <strong>CALCULATE SPACE ESTIMATE</strong> button and get an idea of how much space you would need with CUBIC. After calculating the space, send us your requirements via mail or contact us at our customer service number. One of our experts will contact with you for a discussion.
          </p>
        </div>
      </div>
    </section>
  );
}