"use client";

import { NextUIProvider } from "@nextui-org/react";

const theme = {
  type: "light",
};

export default function NextUIWrapper({ children }: { children: React.ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
