import Head from "next/head";
import Layout from "../../components/layout";
import Date from "../../components/date";
import {getAllPostIds, getPostData} from "../../lib/posts";
import utilStyles from '../../styles/utils.module.css';
import Image from "next/image";
import whistle from '../../public/images/whistle.gif';


export default function Post({postData}) {
    return (
        <Layout>
            {/* Add this <Head> tag */}
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date}/>
                </div>
                <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
            </article>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {/*<Image src='/images/whistle.gif'*/}
            {/*       alt='blow whistle'*/}
            {/*       width={272}*/}
            {/*       height={480}*/}
            {/*/>*/}
            <Image src={whistle}
                   alt='whistle!'
                   // placeholder='blur'
            />
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const postData = await getPostData(context.params.id);
    return {
        props: {
            postData: postData
        }
    }
}