import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Chat Dashboard",
    icons: "nova-favicon.ico",
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}