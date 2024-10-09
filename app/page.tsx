import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

                <div className="flex flex-col w-full justify-center items-center gap-4">
                    <Button><Link href="/v0">v0</Link></Button>
                    <Button><Link href="/v1">v1</Link></Button>
                    <Button><Link href="/v2">v2</Link></Button>
                    <Button><Link href="/v3">v3</Link></Button>
                    <Button><Link href="/v4">v4</Link></Button>
                </div>

            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            </footer>
        </div>
    );
}