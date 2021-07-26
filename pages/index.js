import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";
import Image from "next/image";

import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          ¡Hola! Soy Marcos, desarrollador de software y{" "}
          <i>ex contador público</i>. Este es mi rincón en internet donde
          comparto cosas que me resultan interesantes y podrían servirle a otras
          personas.
        </p>
        <p>
          <u>También estoy en estas redes sociales:</u>
          <p>
            <a href="https://www.linkedin.com/in/marcos-dv/" target="_blank">
              <Image
                src="/images/icons/linkedin.png"
                alt="Linkedin"
                width={16}
                height={16}
              />{" "}
              LinkedIn
            </a>
          </p>
          <p>
            <a href="https://github.com/marcosdellavecchia" target="_blank">
              <Image
                src="/images/icons/github.png"
                alt="GitHub"
                width={16}
                height={16}
              />{" "}
              GitHub
            </a>
          </p>
          <p>
            <a href="https://twitter.com/marcosdv" target="_blank">
              <Image
                src="/images/icons/twitter.png"
                alt="Twitter"
                width={16}
                height={16}
              />{" "}
              Twitter
            </a>
          </p>
          <p>
            <a href="https://instagram.com/marcos_dv" target="_blank">
              <Image
                src="/images/icons/instagram.png"
                alt="Instagram"
                width={16}
                height={16}
              />{" "}
              Instagram
            </a>
          </p>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
