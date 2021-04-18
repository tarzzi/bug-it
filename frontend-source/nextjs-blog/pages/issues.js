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

                <div className="w-full mt-10  flex-col sm:flex-row sm:justify-around border-red-60">
                   ISSUES HERE
                </div>
            </div>
            <Footer />

        </div>
    )
}
