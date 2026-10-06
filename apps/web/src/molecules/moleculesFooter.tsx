export default function MoleculesFooter() {
    return (
        <footer className="flex flex-col w-full h-36 md:flex-row md:justify-between md:items-center px-5 py-3 md:px-10 md:py-2 bg-[#e2e8f0] border-2 border-gray-300 space-y-3.5">
            <div className="flex flex-row gap-2">
                <h2 className="text-2xl font-sans font-semibold">Vir<span className="text-primary">code</span></h2>
            </div>
            <ul className="flex flex-row space-x-5 font-sans text-[#62748e]">
                <li>Courses</li>
                <li>Pratice</li>
                <li>Log in</li>
            </ul>
            <p className="font-sans text-[#62748e]">&copy; 2026 Vircode</p>
        </footer>
    )
}
