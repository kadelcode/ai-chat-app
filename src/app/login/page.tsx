"use client";
import { useState } from "react";
// import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";


export default function LoginPage() {
  // const { loginWithGoogle, loginWithEmail } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/chat"); // Redirect to chat after login
    } catch (err) {
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
      <h1 className="text-3xl font-bold mb-4">Login to Your Account</h1>
            
      <form onSubmit={handleEmailLogin} className="flex flex-col gap-4 w-80">
        {/* Displays error messages */}
        {error && <p className="text-white p-3 rounded-md bg-red-400 mt-2">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-3 border rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="p-3 border rounded-md"
        />

        <Button type="submit" className="bg-blue-700" disabled={loading}>
            { loading ? <Loader2 /> : "Login" }
        </Button>
      </form>

      <div className="mt-4 bg-gray-700">
        <Button
          onClick={() => signInWithPopup(auth, googleProvider)}
        >
            Sign in with Google
        </Button>
        {/*<Button onClick={() => login(githubProvider)}>Login with GitHub</Button>*/}
      </div>

      <p className="mt-4">
        Don’t have an account? <Link href="/register" className="text-blue-400">Sign up</Link>
      </p>
    </motion.main>
  );
}
