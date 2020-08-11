import Head from 'next/head';

type Props = {
  title: string;
};

const MyHead = (props: Props) => {
  return (
    <Head>
      <title>Artikel | {props.title}</title>
    </Head>
  );
};

export default MyHead;
