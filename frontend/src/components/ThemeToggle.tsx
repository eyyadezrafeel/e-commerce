interface ThemeToggleProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

export default function ThemeToggle({ isDark, setIsDark }: ThemeToggleProps) {
  const handleToggle = () => {
    console.log("Toggle clicked! Current isDark:", isDark);
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={handleToggle}
      className="px-2 py-2 rounded-2xl transition-all duration-200"
      style={{
        border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`,
        backgroundColor: isDark ? "#000" : "#fff",
        color: isDark ? "#fff" : "#000"
      }}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
