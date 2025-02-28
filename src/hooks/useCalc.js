import { useContext } from "react";
import { CalculatorContext } from "../contexts/CalculatorContext";

export function useCalc() {
  const context = useContext(CalculatorContext);

  return context;
}
