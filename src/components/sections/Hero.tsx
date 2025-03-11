"use client";

// import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import Lottie from "lottie-react"
import chatbotAnimation from "@/assets/chatbot-animation.json";

export default function Hero() {
    // const router = useRouter();

    return (
        <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-5 px-4 md:px-0">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
                        Unlock Instant Answers with Your AI Chat Assistant
                    </h1>
                    <p className="text-lg text-gray-700 mb-8">
                        Experience smarter conversations and boost productivity with our AI-powered chat app.
                    </p>
                    <Button
                      className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-6 px-9 rounded-full transition cursor-pointer"
                      
                    >
                        Try it Free
                    </Button>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    {/*<Image src="" alt="" className="max-w-full rounded-lg shadow-lg" />*/}
                    <Lottie animationData={chatbotAnimation} loop={true} />
                </div>
            </div>
        </section>
    );
};