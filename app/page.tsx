import dynamic from 'next/dynamic';

// Dynamically import RiveVehiclesDemo with SSR disabled
const RiveVehiclesDemo = dynamic(() => import('@/components/RiveVehiclesDemo'), { ssr: false });

export default function Home() {
  return (
      <div>
          <RiveVehiclesDemo/>
      </div>
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    //
    //     <div className="flex flex-col w-full justify-center items-center">
    //     </div>
    //
    //   </main>
    //   <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    //   </footer>
    // </div>
  );
}
