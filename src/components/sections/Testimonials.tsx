import StackedCards from "../stackedcards";


export function Testimonials() {
    return (
        <section className="py-16 px-4 md:px-0 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
                    What Our Users Say
                </h2>
            </div>
            <StackedCards />
        </section>
    );
};