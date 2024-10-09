import React from 'react';

const ResponsiveLayout = () => {
    return (
        <div className="relative min-h-screen">
            <div className="fixed inset-0 z-0">
                <img
                    src="https://images.pexels.com/photos/1022692/pexels-photo-1022692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative z-10 min-h-screen flex flex-col">
                <header className="h-16 bg-white bg-opacity-95 shadow-md">
                    <div className="container mx-auto h-full flex items-center px-4">
                        <h1 className="text-xl font-bold">Your Header</h1>
                    </div>
                </header>

            </div>
        </div>
    );
};

export default ResponsiveLayout;