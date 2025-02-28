import { useCalc } from "../hooks/useCalc";
import { Key } from "./Key";

const keys = [
  { value: "7", type: "number", size: "sm" },
  { value: "8", type: "number", size: "sm" },
  { value: "9", type: "number", size: "sm" },
  { value: "DEL", type: "special", size: "sm" },
  { value: "4", type: "number", size: "sm" },
  { value: "5", type: "number", size: "sm" },
  { value: "6", type: "number", size: "sm" },
  { value: "+", type: "sign", size: "sm" },
  { value: "1", type: "number", size: "sm" },
  { value: "2", type: "number", size: "sm" },
  { value: "3", type: "number", size: "sm" },
  { value: "-", type: "sign", size: "sm" },
  { value: ".", type: "number", size: "sm" },
  { value: "0", type: "number", size: "sm" },
  { value: "/", type: "sign", size: "sm" },
  { value: "x", type: "sign", size: "sm" },
  { value: "RESET", type: "special", size: "lg" },
  { value: "=", type: "equal", size: "lg" },
];

export function Keypad() {
  const { addDigit, deleteDigit, reset, chooseOperation, result } = useCalc();

  function handleClickKey(btn) {
    if (btn.type === "number") addDigit(btn.value);
    if (btn.value === "DEL") deleteDigit();
    if (btn.value === "RESET") reset();
    if (btn.type === "sign") chooseOperation(btn.value);
    if (btn.type === "equal") result();
  }

  return (
    <div className="bg-keypad-background grid w-full grid-cols-4 gap-4 rounded-lg p-6">
      {keys.map((btn) => (
        <Key key={btn.value} {...btn} onClick={() => handleClickKey(btn)} />
      ))}
    </div>
  );
}
