import Image from "next/image";
import { Button } from "@/components/ui/button"
// import LottieGroovyWalk from "@/components/LottieGroovyWalk"
import RiveVehiclesDemo from "@/components/RiveVehiclesDemo"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        {/*for each variant in button, display a button with the variant name in it along with size*/}
        <Button variant="default">Default</Button>
        <Button variant="default" size="sm">Default Small</Button>
        <Button variant="default" size="lg">Default Large</Button>
        <Button variant="default" size="icon">Default Icon</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="destructive" size="sm">Destructive Small</Button>
        <Button variant="destructive" size="lg">Destructive Large</Button>
        <Button variant="destructive" size="icon">Destructive Icon</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="outline" size="sm">Outline Small</Button>
        <Button variant="outline" size="lg">Outline Large</Button>
        <Button variant="outline" size="icon">Outline Icon</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary" size="sm">Secondary Small</Button>
        <Button variant="secondary" size="lg">Secondary Large</Button>
        <Button variant="secondary" size="icon">Secondary Icon</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="ghost" size="sm">Ghost Small</Button>
        <Button variant="ghost" size="lg">Ghost Large</Button>
        <Button variant="ghost" size="icon">Ghost Icon</Button>
        <Button variant="link">Link</Button>
        <Button variant="link" size="sm">Link Small</Button>
        <Button variant="link" size="lg">Link Large</Button>
        <Button variant="link" size="icon"/>


        <div className="flex flex-col w-full justify-center items-center">
          <RiveVehiclesDemo/>
        </div>

        <div className="flex flex-col w-full justify-center items-center">
          {/*<LottieGroovyWalk/>*/}
        </div>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
