"use client";

import { CheckCircle } from "lucide-react";
import { Button } from "../ui/button";

const pricingPlans = [
    {
        name: "Basic",
        price: "$9",
        duration: "month",
        features: ["100 Chat Interactions", "Basic AI Features", "Email Support", "Limited integrations"]
    },
    {
        name: "Pro",
        price: "$29",
        duration: "month",
        features: ["Unlimited Chat Interactions", "Advanced AI Features", "Priority Support", "API Access"]
    },
    {
        name: "Enterprise",
        price: "Contact Us",
        duration: "custom",
        features: ["Custom Solutions", "Dedicated Support", "Scalable Infrastructure", "Custom Integrations"]
    }
]

export function Pricing() {
    return (
        <section className="py-16 px-4 md:px-0 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
                    Choose Your Plan
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    { pricingPlans.map((plan, index) => (
                        <div className="bg-[#fff] rounded-lg border-2 border-[#155dfc] p-6 text-center" key={index}>
                            <h3 className="text-2xl font-semibold text-[#1e2939] mb-4">{plan.name}</h3>
                            <div className="text-4xl font-bold text-[#193cb8] mb-4">
                                {plan.price}/<span className="text-xl text-[#99a1af]">{plan.duration}</span>
                            </div>
                            <ul className="space-y-2 text-[#4a5565] mb-6">
                                {plan.features.map((feature, i) => (
                                    <li className="flex items-center gap-2 mb-2" key={i}>
                                        <CheckCircle className="w-5 h-5 flex-grow-0 flex-shrink-0 text-[#2D72CB]" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Button className="mt-6 relative bottom-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full cursor-pointer">
                                Get Started
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}