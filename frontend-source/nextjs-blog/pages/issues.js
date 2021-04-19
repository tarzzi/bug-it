import Head from 'next/head'
import Sidepanel from '../modules/sidepanel'
import Footer from '../modules/footer'

export default function Issues() {
    return (
        <div>
            <Head>
                <title>BugIT</title>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>

            <div className="flex flex-row">
                <Sidepanel />
                <div className="w-full p-8 mt-10  text-2xl flex-row sm:flex-row sm:justify-around border-red-60">
                    <div className="project-select p-10 flex-row">
                        <h1 className="text-2xl text-center">ISSUES HERE</h1>
                        <p>Select project</p>
                        <select className="my-2">
                            <option>Projekti 1</option>
                            <option>Projekti 2</option>
                            <option>Projekti 3</option>
                            <option>Projekti 4</option>
                            <option>Projekti 5</option>
                        </select>
                        </div>
                    <div>

                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}
