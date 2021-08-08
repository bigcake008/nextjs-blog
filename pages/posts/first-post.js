import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import Image from "next/image";
import test from "../../public/images/test.jpg"

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <Image src={test}
                   alt='blow whistle'
                   placeholder='blur'
                   // width='1364'
                   // height='2048'
            />
        </Layout>
    )
}