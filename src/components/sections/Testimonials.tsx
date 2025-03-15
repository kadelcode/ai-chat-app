import StackedCards from "../stackedcards";


export function Testimonials() {
    return (
        <section id="testimonials" className="py-16 px-4 md:px-0 bg-[#f3f4f6]">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold text-center text-[#1e2939] mb-12">
                    What Our Users Say
                </h2>
            </div>
            <StackedCards />
        </section>
    );
};