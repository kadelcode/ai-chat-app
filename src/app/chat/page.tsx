"use client";
import { useAuth } from "@/lib/useAuth";
import { Loader2 } from "lucide-react";


export default function ChatPage() {
    const { user, loading } = useAuth(); // Protects this page

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
                <Loader2 className="w-8 h-8 animate-spin" />
            </div>
        )
    }

    

    return <div>Welcome to the Chat App</div>;
}