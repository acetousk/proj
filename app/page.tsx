import Image from "next/image";
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ModeToggle";
import { TypographyDemo } from "@/components/TypographyDemo";

export default function Home() {
  return (
      // https://medium.com/@erikritter/css-snippets-add-a-texture-overlay-to-an-entire-webpage-b0bfdfd02c45
      <div>
          <div className="absolute inset-0 z-0">
              <div id="parchment">
              <ModeToggle/>
              <TypographyDemo/>
              <svg>
                  <filter id="wavy2">
                      <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="1"></feTurbulence>
                      <feDisplacementMap in="SourceGraphic" scale="20"/>
                  </filter>
              </svg>
              </div>
          </div>
      </div>
      //   <div className="absolute inset-0 bg-blue-200 z-10">Background Layer
      //
      //     <div className="absolute inset-0 bg-green-200 z-20 p-8 m-8">Middle Layer</div>
      //     <div className="absolute inset-0 bg-red-200 z-30 p-8 m-12">
    // </div>
  );
}
