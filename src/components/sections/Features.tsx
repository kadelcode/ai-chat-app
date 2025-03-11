"use client";

import { Bot, TimerIcon, ChartNoAxesCombinedIcon } from "lucide-react";
import React from "react";
import { ReactNode } from "react";

// Feature interface with 3 properties
interface Feature {
    icon: ReactNode,
    title: string,
    description: string,
}

// An array of `Feature` objects
const features: Feature[] = [
    {
        icon: <Bot className="mx-auto w-10 h-10 text-blue-600" />,
        title: 'Natural Language Processing',
        description: 'Understand your questions like a human, providing accurate and relevant responses.',
    },
    {
        icon: <TimerIcon className="mx-auto w-10 h-10 text-blue-600" />,
        title: '24/7 Availability',
        description: 'Get answers anytime, day or night, whenever you need them.',
    },
    {
        icon: <ChartNoAxesCombinedIcon className="mx-auto w-10 h-10 text-blue-600" />,
        title: 'Seamless Integration',
        description: 'Integrate with your favorite apps and services for a streamlined workflow.',
    }
]

export function Features() {
    return (
        <section className="py-16 px-4 md:px-0 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">Key Features and Benefits</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    { features.map((feature, index) => (
                        <div className="text-center p-6 shadow-md rounded-md" key={index}>
                            {feature.icon}
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};