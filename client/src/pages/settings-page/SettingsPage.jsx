import { useTheme } from "@/store/useTheme";
import { THEMES } from "@/components/constants";

function SettingsPage() {
  const theme = useTheme((state) => state.theme);
  const setTheme = useTheme((state) => state.setTheme);

  return (
    <div className="h-screen container mx-auto px-4 pt-20 max-w-5xl">
      <div className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold">Theme</h2>
          <p className="text-sm text-base-content/70">Choose a theme</p>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
          {THEMES.map((t) => (
            <button
              key={t}
              className={`group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors ${
                theme === t ? "bg-base-200" : "hover:bg-base-200/50"
              }`}
              onClick={() => setTheme(t)} // Change theme when clicked
            >
              <div
                className="relative h-8 w-full rounded-md overflow-hidden"
                data-theme={t} // Apply theme to preview
              >
                <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                  <div
                    className="rounded"
                    style={{ backgroundColor: `var(--primary)` }}
                  ></div>
                  <div
                    className="rounded"
                    style={{ backgroundColor: `var(--secondary)` }}
                  ></div>
                  <div
                    className="rounded"
                    style={{ backgroundColor: `var(--accent)` }}
                  ></div>
                  {/* <div
                    className="rounded"
                    style={{ backgroundColor: `var(--neutral)` }}
                  ></div> */}
                </div>
              </div>
              <span className="text-[11px] font-medium truncate w-full text-center">
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
