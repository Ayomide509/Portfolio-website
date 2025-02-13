export default function Footer() {
    return (
        <div className="bg-gray-800">
            <footer className="bg-gray-800 text-white max-w-lg rounded-2xl w-[350px] mx-auto shadow-lg px-1 text-center">
                <div className="mb-4 py-2  ">
                    <p className="font-semibold">© {new Date().getFullYear()} Olusesan Ayomide-portfolio</p>
                </div>
            </footer>
        </div>

    )
}