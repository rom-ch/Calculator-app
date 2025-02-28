export function Key({ value, type, size, onClick }) {
  const keyBase = "cursor-pointer rounded-md p-1 font-bold";

  const keyType = {
    number:
      "bg-key active:bg-key-active text-text-key text-[32px] shadow-[1px_4px_0_var(--color-key-shadow)]",
    sign: "bg-key active:bg-key-active text-text-key text-[32px] shadow-[1px_4px_0_var(--color-key-shadow)]",
    special:
      "bg-special-key active:bg-special-key-active text-text-special-key text-xl shadow-[1px_4px_0_var(--color-special-key-shadow)]",
    equal:
      "bg-equal-key active:bg-equal-key-active text-text-equal-key text-xl p-4 shadow-[1px_4px_0_var(--color-equal-key-shadow)]",
  };

  const keySize = {
    sm: "col-span-1",
    lg: "col-span-2",
  };

  return (
    <button
      className={`${keyBase} ${keySize[size]} ${keyType[type]}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
