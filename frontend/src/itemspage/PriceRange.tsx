import { useState } from "react";
import { Range } from "react-range";

interface PriceRangeProps {
  isDark: boolean;
}

export default function PriceRange({ isDark }: PriceRangeProps) {
  const STEP = 10;
  const MIN = 0;
  const MAX = 1000;

  const [values, setValues] = useState([100, 600]);

  return (
    <div className="w-80 mx-auto mt-6">
      <h2 className="font-semibold mb-2 text-center"
        style={{
          color: isDark ? "#fff" : "#000"
        }}>
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
          const bgLeft = isDark ? '#000' : '#fff';
          const accent = isDark ? '#B3001B' : '#7EC8FF';
          const neutral = isDark ? '#333' : '#ddd';

          return (
            <div
              {...props}
              className="h-2 w-[15vw] rounded-full"
              style={{
                background: `linear-gradient(to right, ${bgLeft} ${leftPercent}%, ${accent} ${rightPercent}%, ${neutral} ${rightPercent}%)`
              }}
            >
              {children}
            </div>
          );
        }}
        renderThumb={({ props }) => {
          const accent = isDark ? '#B3001B' : '#7EC8FF';
          return (
            <div
              {...props}
              className="w-4 h-4 rounded-full shadow cursor-pointer outline-none flex justify-center items-center"
              style={{
                ...props.style,
                background: accent
              }}
            />
          );
        }}
      />
    </div>
  );
}
