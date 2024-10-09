import React from 'react';
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

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

            <div className="relative z-10 min-h-screen flex items-center justify-start">
                <div className="bg-white bg-opacity-15 shadow-md p-4 rounded">
                    <NavigationMenu>
                        <NavigationMenuList className="flex-col gap-4">
                            <Link href="/docs" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>

                                </NavigationMenuLink>
                            </Link>
                            <Link href="/docs" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>

                                </NavigationMenuLink>
                            </Link>
                            <Link href="/docs" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Documentation
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveLayout;