import {Button} from "@/components/ui/button";
import Link from "next/link";

import {ChevronRight, Loader2} from "lucide-react"
import { Mail } from "lucide-react"

export default function V1() {
    return (
        // <div className="flex flex-col justify-center">
        <div>
            <div className="flex gap-4 flex-col items-center">
                    {/*There are components and I want to display each variant of each component. The components are: Button, RadioGroup, Label, Input, Select, Switch, Toggle, Checkbox, Combobox*/}

                    <Button>Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                    <Button disabled><Loader2 className="mr-2 h-4 w-4 animate-spin" />Please wait</Button>
                    <Button asChild><Link href="/login">Login</Link></Button>

                    <Button size="icon"><ChevronRight className="h-4 w-4" /></Button>
                    <Button size="icon" variant="secondary"><ChevronRight className="h-4 w-4" /></Button>
                    <Button size="icon" variant="destructive"><ChevronRight className="h-4 w-4" /></Button>
                    <Button size="icon" variant="outline"><ChevronRight className="h-4 w-4" /></Button>
                    <Button size="icon" variant="ghost"><ChevronRight className="h-4 w-4" /></Button>
                    <Button size="icon" variant="link"><ChevronRight className="h-4 w-4" /></Button>
                    <Button size="icon" disabled><Loader2 className="mr-2 h-4 w-4 animate-spin" /></Button>
                    <Button size="icon" asChild><Link href="/login"><ChevronRight className="h-4 w-4" /></Link></Button>

                    <Button><Mail className="mr-2 h-4 w-4" /> Primary Login with Email</Button>
                    <Button variant="secondary"><Mail className="mr-2 h-4 w-4" /> Secondary Login with Email</Button>
                    <Button variant="destructive"><Mail className="mr-2 h-4 w-4" /> Destructive Login with Email</Button>
                    <Button variant="outline"><Mail className="mr-2 h-4 w-4" /> Outline Login with Email</Button>
                    <Button variant="ghost"><Mail className="mr-2 h-4 w-4" /> Ghost Login with Email</Button>
                    <Button variant="link"><Mail className="mr-2 h-4 w-4" /> Link Login with Email</Button>
                    <Button disabled><Loader2 className="mr-2 h-4 w-4 animate-spin" /><Mail className="mr-2 h-4 w-4" />Please wait</Button>
                    <Button asChild><Link href="/login"><Mail className="mr-2 h-4 w-4" />Login</Link></Button>



            </div>
        </div>
    );
}
