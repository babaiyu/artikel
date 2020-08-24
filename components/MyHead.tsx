import Head from 'next/head';

const MyHead = ({title}) => {
  return (
    <Head>
      <title>Artikel | {title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Tulis dan bagian artikelmu sekarang juga"
      />
      <meta name="og:title" property="og:title" content="Artikel" />
    </Head>
  );
};

export default MyHead;
