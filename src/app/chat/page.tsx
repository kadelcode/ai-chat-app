"use client";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function ChatPage() {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push("/login"); // Redirect if not logged in
        }
    }, [user, router]);

    if (!user) return <p>Redirecting...</p>

    return <div>Welcome to the Chat App</div>;
}