import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [toggleValue, setToggleValue] = useState(1);

  useEffect(() => {
    const html = document.querySelector("html");

    switch (toggleValue) {
      case "1":
        html.dataset.theme = "";
        break;
      case "2":
        html.dataset.theme = "light";
        break;
      case "3":
        html.dataset.theme = "neon";
    }
  }, [toggleValue]);

  return (
    <div>
      <div className="mb-0.5 flex items-center justify-between px-2 text-sm font-medium">
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
      <label htmlFor="theme" className="sr-only">
        Theme Toggle
      </label>
      <input
        type="range"
        min="1"
        max="3"
        name="theme"
        value={toggleValue}
        onChange={(e) => setToggleValue(e.target.value)}
        id="theme"
        className="peer bg-keypad-background [&::-moz-range-thumb]:bg-equal-key [&::-webkit-slider-thumb]:bg-equal-key h-6 w-17 cursor-pointer appearance-none rounded-full p-1 accent-blue-500 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md"
      />
    </div>
  );
}
