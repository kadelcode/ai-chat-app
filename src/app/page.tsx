"use client";

import { Features } from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )

  /*return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Welcome to AI-Powered Chat App 🤖
      </h1>
      <p className="text-lg mb-6 text-center">
        Chat in real-time, get AI-generated replies, and use voice-to-text-all in one app!
      </p>
      <Button
        className="bg-white text-blue-600 px-9 py-6 rounded-md text-lg font-semibold shadow-lg hover:bg-gray-100 transition cursor-pointer"
        onClick={() => router.push("/login")}
      >
        Get Started
      </Button>
    </main>
  );*/
};