import { AuthProviderComponent } from "@/context/AuthContext";

export default function ChatLayout({ children }: { children: React.ReactNode}) {
    return <AuthProviderComponent>{children}</AuthProviderComponent>
}