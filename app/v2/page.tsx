import {Button} from "@/components/ui/button";
import Link from "next/link";

import {ChevronRight, Loader2} from "lucide-react"
import React from "react";

export default function V2() {
    return (
        // <div className="flex flex-col justify-center">
        // <div className=" bg-background z-20">
        //     <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 z-30">
        //         <div className="flex gap-4 flex-col items-center">
        //             {/*There are components and I want to display each variant of each component. The components are: Button, RadioGroup, Label, Input, Select, Switch, Toggle, Checkbox, Combobox*/}
        //
        //
        //         </div>
        //     </main>
        // </div>
        <div className="">
            {/*Horizontal form that has a time entry description, toggle between play and pause, and a date picker that defaults to today*/}
            <div className="flex flex-col gap-4 items-center">
                <div className="flex gap-4 items-center">
                    <label htmlFor="time-entry-description" className="text-sm font-medium text-muted-foreground">Time Entry Description</label>
                    <input type="text" id="time-entry-description" className="w-full p-2 border border-muted-foreground rounded-md" />
                </div>
                <div className="flex gap-4 items-center">
                    <Button>Play</Button>
                    <Button>Pause</Button>
                </div>
                <div className="flex gap-4 items-center">
                    <label htmlFor="date-picker" className="text-sm font-medium text-muted-foreground">Date</label>
                    <input type="date" id="date-picker" className="p-2 border border-muted-foreground rounded-md" />
                </div>
            </div>
        </div>

)
    ;
}
