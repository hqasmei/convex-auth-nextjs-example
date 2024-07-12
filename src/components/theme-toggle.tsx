'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const icon = resolvedTheme === 'light' ? <MoonIcon size={18} /> : <SunIcon size={18} />;
  return (
    <button
      className=""
      onClick={() => {
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
      }}
    >
      {icon}
    </button>
  );
}
