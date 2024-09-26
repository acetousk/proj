import Image from "next/image";
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ModeToggle";
import { TypographyDemo } from "@/components/TypographyDemo";

export default function Home() {
  return (
      <div>
          <ModeToggle />
          <TypographyDemo />


      </div>

);
}
