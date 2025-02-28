import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="text-text flex items-center justify-between">
      <h1 className="text-3xl font-bold">calc</h1>
      <div className="flex items-end gap-8">
        <p className="mb-2 text-sm font-semibold tracking-wide uppercase">
          theme
        </p>
        <ThemeToggle />
      </div>
    </header>
  );
}
