import React from 'react';
import { Button } from "@/components/ui/button"
import { CircleUserRound, Grid, Zap, Wifi, Search } from "lucide-react"
import Link from "next/link";

const ResponsiveLayout = () => {
    return (
        <div className="relative min-h-screen">
            <div className="fixed inset-0 z-0">
                <img
                    src="https://images.pexels.com/photos/2693212/pexels-photo-2693212.png?cs=srgb&dl=pexels-anniroenkae-2693212.jpg&fm=jpg&w=1920&h=1440"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>
            {/*https://www.epicweb.dev/tips/creating-glassmorphism-effects-with-tailwind-css*/}

            <div className="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-2 shadow-clay-card backdrop-blur-sm pt-2 p-2 rounded-full">
                <Button variant="ghost" size="icon" asChild className="rounded-full">
                    <Link href="/v0" className="text-white hover:text-white hover:shadow-clay-btn hover:bg-white/10">
                        <CircleUserRound className="h-6 w-6"/>
                        <span className="sr-only">User</span>
                    </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild className="rounded-full">
                    <Link href="/v1" className="text-white hover:text-white hover:shadow-clay-btn hover:bg-white/10">
                        <Grid className="h-6 w-6"/>
                        <span className="sr-only">Grid</span>
                    </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild className="rounded-full">
                    <Link href="/v2" className="text-white hover:text-white hover:shadow-clay-btn hover:bg-white/10">
                        <Zap className="h-6 w-6"/>
                        <span className="sr-only">Power</span>
                    </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild className="rounded-full">
                    <Link href="/v3" className="text-white hover:text-white hover:shadow-clay-btn hover:bg-white/10">
                        <Wifi className="h-6 w-6"/>
                        <span className="sr-only">Wifi</span>
                    </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild className="rounded-full">
                    <Link href="/v4" className="text-white hover:text-white hover:shadow-clay-btn hover:bg-white/10">
                        <Search className="h-6 w-6"/>
                        <span className="sr-only">Search</span>
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default ResponsiveLayout;