"use client";

// import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import chatbotAnimation from "@/assets/chatbot-animation.json";
import dynamic from "next/dynamic"; // Allows us to laod client-only components without breaking SSR

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Hero() {
    // const router = useRouter();

    return (
        <section className="bg-gradient-to-r from-[#dbeafe] to-[#bedbff] py-5 px-4 md:px-0">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#163cb8] mb-4">
                        Unlock Instant Answers with Your AI Chat Assistant
                    </h1>
                    <p className="text-lg text-gray-700 mb-8">
                        Experience smarter conversations and boost productivity with our AI-powered chat app.
                    </p>
                    <Button
                      className="bg-[#155dfc] hover:bg-[#1447e6] text-white text-lg font-bold py-6 px-9 rounded-full transition cursor-pointer"
                      
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