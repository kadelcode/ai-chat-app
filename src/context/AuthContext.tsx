/**
 * The AuthContext approach introduces a flash screen issue because the authentication state
 * takes time to initialize.
 * 
 * Also, handling Firebase errors inside the context can make it harder to properly display
 * them inside forms.
 * 
 * Instead of using `AuthContext`, you can:
 * - Directly use Firebase authentication functions inside the login and register pages.
 * - Avoid unnecessary re-renders or delays caused by `onAuthStateChanged`.
 * - Improve error handling so forms can display error messages properly.
 */


"use client"; // A client-side component

/**
 * This code sets up an authentication context using React's Context API and Firbase Authentication.
 * It provides a way to manage and access the authenticated user's state throughout the application.
 */

// Used for managing context, state, and side effects
import { createContext, useContext, useEffect, useState } from "react";

// Firebase auth instance and authentication providers (Google and GitHub).
import {
    auth,
    googleProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "@/lib/firebase";

// These are Firebase Authentication functions and types used to manage user authentication
import {
    onAuthStateChanged,
    User } from "firebase/auth";

// Next.js Router
// import { useRouter } from "next/navigation";

// This context will hold the authenticated user's information
/**
 * Contexts allow components to share data without explicitly passing props
 * through every level of the component tree.
 */
const AuthContext = createContext<{
    user: User | null;
    loginWithGoogle: () => Promise<void>;
    registerWithEmail: (email: string, password: string) => Promise<void>;
    loginWithEmail: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}>({
    user: null,
    loginWithGoogle: async () => {},
    registerWithEmail: async () => {},
    loginWithEmail: async () => {},
    logout: async () => {},
});


// This is a React component that wraps other components and provides the authentication context
export const AuthProviderComponent = ({ children }: { children: React.ReactNode }) => {
    // `user` state is initialized to `null` using the `useState` hook
    const [user, setUser] = useState<User | null>(null);

    // Set the loading state
    // const [loading, setLoading] = useState(true);

    // `router` is initialized using the `useRouter` hook from Next.js
    // const router = useRouter();

    // Set up a listener for changes in the authentication state.
    useEffect(() => {
        /**
         * Listens for changes in the authentication state. When the state changes (e.g.,
         * a user logs in or out), the callback function is called with the user object
         * or `null`.
         * The `setUser` function updates the `user` state.
         */
        const unsubscribe = onAuthStateChanged(auth, (user) => setUser(user));

        // A cleanup function that unsubscribes the listener when the components unmounts,
        // preventing memory leaks.
        return () => unsubscribe(); // The empty dependency array ensures that the effect runs only once when the component mounts.
    }, []);


    // This function handles user login
    const loginWithGoogle = async () => {
        try {
            // Opens a popup window for the specified authentication provider (Google or Github)
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.error("Google Login error:", error);
        }
    }

    // Register with email
    const registerWithEmail = async (email: string, password: string) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error("Registration Error:", error);
        }
    }

    // Login with email
    const loginWithEmail = async (email: string, password: string) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error("Login Error:", error);

        }
    }

    // Logout function
    const logout = async () => {
        await signOut(auth); // Signs the user out
    }

    return (
        <AuthContext.Provider value={{ user, loginWithGoogle, registerWithEmail, loginWithEmail, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom Hook
// This hook allows components to easily access the authentication context.
export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
}