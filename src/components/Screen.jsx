import { useCalc } from "../hooks/useCalc";

export function Screen() {
  const { state } = useCalc();

  return (
    <div className="bg-screen-background text-text flex h-24 w-full flex-col items-center rounded-lg px-4 py-2 font-bold tracking-wide">
      <div className="h-8 self-end">
        {state.previousOperand} {state.operation}
      </div>
      <div className="h-full self-end text-[32px]">{state.currentOperand}</div>
    </div>
  );
}
