import { HomeSections } from "@/components/sections/home-sections";
import { getRfqMode } from "@/lib/env";

export default function Home() {
  return <HomeSections demoMode={getRfqMode() === "demo"} locale="en" />;
}
