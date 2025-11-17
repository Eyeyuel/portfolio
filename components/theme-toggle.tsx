"use client";
import { SunMoon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <>
      <Button
        variant={"link"}
        className="scale-150 cursor-pointer"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <SunMoon />
      </Button>
    </>
  );
}
