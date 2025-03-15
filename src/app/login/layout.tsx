import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign In",
    description: "Sign in page",
    icons: "nova-favicon.ico",
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}