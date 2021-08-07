import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import Image from "next/image";

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <Image src='/images/whistle.gif'
                   alt='blow whistle'
                   width={272}
                   height={480}
            />
            
        </Layout>
    )
}