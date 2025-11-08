import React, { useState } from "react";
import { Range } from "react-range";

export default function PriceRange() {
  const STEP = 10;
  const MIN = 0;
  const MAX = 1000;

  const [values, setValues] = useState([100, 600]);

  return (
    <div className="w-[300px] mx-auto mt-6">
      <h2 className="text-gray-700 font-semibold mb-2 text-center">
        Price Range: ${values[0]} - ${values[1]}
      </h2>

      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={setValues}
        renderTrack={({ props, children }) => {
          const [min, max] = values;
          const leftPercent = ((min - MIN) / (MAX - MIN)) * 100;
          const rightPercent = ((max - MIN) / (MAX - MIN)) * 100;

          return (
            <div
              {...props}
              className="h-2 w-[15vw] rounded-full"
              style={{
                background: `linear-gradient(
                  to right,
                  black ${leftPercent}%,
                  #B3001B ${rightPercent}%,
                  #ddd ${rightPercent}%
                )`,
              }}
            >
              {children}
            </div>
          );
        }}
        renderThumb={({ props }) => (
          <div
            {...props}
            className="w-4 h-4 bg-[#B3001B] rounded-full shadow-md cursor-pointer focus:outline-none"
          />
        )}
      />
    </div>
  );
}
