import Link from 'next/link'

export default function Sidepanel() {
    return (
            <div className="flex flex-col flex-row sm:justify-around">
                <div className="w-64 h-screen bg-white border-r-2 border-green-200">
                    <div className="flex items-center justify-center mt-10"><h1 className="text-3xl uppercase font-mono">Bug-it</h1>
                    </div>

                    <nav className="mt-10">
                        <Link href="/">
                        <a className="flex items-center h-16 py-2 px-8 bg-gray-200 text-gray-700 border-r-4 border-green-400">
                            <span className="mx-4 font-medium">Home</span>
                        </a></Link>

                        <Link href="/projects">
                            <a className="flex items-center h-16 py-2 px-8 text-gray-600 border-r-4 border-white hover:bg-green-200 hover:text-black hover:border-green-700">
                                <span className="mx-4 font-medium">Projects</span>
                            </a></Link>

                        <Link href="/issues">
                        <a className="flex items-center h-16 py-2 px-8 text-gray-600 border-r-4 border-white hover:bg-green-200 hover:text-black hover:border-green-700">
                            <span className="mx-4 font-medium">Issues</span>
                        </a></Link>

                        <Link href="/settings">
                        <a className="flex items-center h-16 py-2 px-8 text-gray-600 border-r-4 border-white hover:bg-green-200 hover:text-black hover:border-green-700">
                            <span className="mx-4 font-medium">Settings</span>
                        </a></Link>
                    </nav>
</div></div>

                );
};