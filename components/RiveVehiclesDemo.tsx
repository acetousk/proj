"use client";
import Rive, {useRive} from '@rive-app/react-canvas';

export default function RiveVehiclesDemo() {
    const { rive, RiveComponent } = useRive({
        src: 'https://public.rive.app/community/runtime-files/12310-24184-floaty-loop.riv',
        autoplay: true,
    });

    return (
        <RiveComponent
        />
    );
};