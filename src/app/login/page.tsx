"use client";
import { useState, useEffect } from "react";
// import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";
import SkeletonLogin from "@/components/SkeletonLogin";


export default function LoginPage() {
  // const { loginWithGoogle, loginWithEmail } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    let isMounted = true;
    const startTime = performance.now();

    const fetchData = async () => {
      try {
        await fetch("https://jsonplaceholder.typicode.com/posts/1"); // Simulated API request
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        if (!isMounted) return;

        const endTime = performance.now();
        const elapsedTime = endTime - startTime;
        const MIN_SKELETON_TIME = 1500; // Keep skeleton for at least 1.5s

        setTimeout(() => {
          if (isMounted) setIsLoading(false);
        }, Math.max(MIN_SKELETON_TIME - elapsedTime, 0));

      }
    };

    fetchData();

    return () => {
      isMounted = false; // Prevent state updates after unmount
    }
  }, []);


  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/chat"); // Redirect to chat after login
    } catch {
      setError("Invalid email or password");
    }
    setLoading(false);
  };

  return (
    <motion.main
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      { isLoading ?
        ( <SkeletonLogin /> ) :  
      (
      <>
      <h1 className="text-3xl font-bold mb-4">Login to Your Account</h1>
            
      <form onSubmit={handleEmailLogin} className="flex flex-col gap-4 w-80">
        {/* Displays error messages */}
        {error && <p className="text-[#fff] p-3 rounded-md bg-[#ff6467] mt-2">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-3 rounded-md border-2"
          style={{border: "2px solid #193cb8"}}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="p-3 rounded-md border-2 border-[#193cb8]"
          style={{border: "2px solid #193cb8"}}
        />

        <Button type="submit" className="bg-[#155dfc] hover:bg-[#1447e6] text-white cursor-pointer" disabled={loading}>
            { loading ? <Loader2 className="animate-spin" /> : "Login" }
        </Button>
      </form>

      <div className="mt-4">
        <Button
          onClick={() => signInWithPopup(auth, googleProvider)}
          className="cursor-pointer rounded-md bg-[#364153] text-[#fff]"
        >
            Sign in with Google
        </Button>
        {/*<Button onClick={() => login(githubProvider)}>Login with GitHub</Button>*/}
      </div>

      <p className="mt-4">
        Don’t have an account? <Link href="/register" className="text-blue-400">Sign up</Link>
      </p>
      </>
      )}
    </motion.main>
  );
}
