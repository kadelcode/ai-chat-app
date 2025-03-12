import { Button } from "../ui/button";

export default function CTA() {
    return (
        <section className="py-20 px-4 md:px-0 bg-blue-50">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold text-[#193cb8] mb-8">Ready to Experience Smarter Conversations?</h2>
                <Button className="bg-[#155dfc] hover:bg-[#1447e6] text-white text-lg font-bold py-6 px-9 rounded full">
                    Start Chatting Now
                </Button>
            </div>
        </section>
    )
}