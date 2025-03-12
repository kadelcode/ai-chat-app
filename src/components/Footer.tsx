export default function Footer() {
    return (
        <footer className="bg-gray-800 py-8">
        <div className="container mx-auto text-center">
            <nav className="space-x-4">
            <a href="/privacy" className="text-gray-300 hover:text-gray-100">Privacy Policy</a>
            <a href="/terms" className="text-gray-300 hover:text-gray-100">Terms of Service</a>
            <a href="/contact" className="text-gray-300 hover:text-gray-100">Contact Us</a>
            </nav>
        </div>
        </footer>
    );
}