import Link from 'next/link';
import {LayoutHome, HrBorder, Article} from '../components';
import {listDummyArticle} from 'helpers/dummy';

const dataCarousel = [
  'TRENDING',
  'POPULER',
  'LIFESTYLE',
  'CORONAVIRUS',
  'PENDIDIKAN',
  'INTERNET',
  'Lihat kategori lainnya',
];

const TopArticle = ({data}) => {
  return (
    <div className="mt-3 md:flex">
      <div className="flex-1 pr-6">
        <i>
          <u>{data.category}</u>
        </i>
        <Link href="/about">
          <a href="#" className="font-bold text-5xl block hover:underline">
            {data.title}
          </a>
        </Link>
        <p className="text-gray-600 my-3">{data.description}</p>
        <hr className="my-3" />
        <div className="flex-row flex justify-around align-middle my-5">
          <i className="far fa-calendar text-3xl text-gray-500" />
          <i className="far fa-eye text-3xl text-gray-500" />
          <i className="far fa-heart text-3xl text-gray-500" />
        </div>
        <div className="flex-row flex justify-around align-middle md:my-5">
          <small className="text-gray-600">{data.releaseDate}</small>
          <small className="text-gray-600">{data.view}</small>
          <small className="text-gray-600">{data.like}</small>
        </div>
      </div>
      <div className="flex-1">
        <img
          src={data.img}
          alt="thumbnail_picture"
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

const App = () => {
  // Render
  return (
    <LayoutHome activeNum={0} title="Home">
      <div className="container mx-auto mt-5">
        <TopArticle data={listDummyArticle[0]} />
      </div>
      <HrBorder />
      <div className="container mx-auto md:flex my-6">
        <div className="md:w-4/12 flex-wrap md:mb-5 md:pr-3 bg-green">
          Kategori
          <br />
          {dataCarousel.map((e, i) => (
            <button
              key={i}
              className="inline-block bg-gray-200 hover:bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 my-2 mr-2">
              {e.toLocaleLowerCase()}
            </button>
          ))}
          <HrBorder />
        </div>
        <div className="flex-1 flex-col">
          {listDummyArticle.map((e, i) =>
            i > 0 ? <Article key={i} data={e} /> : null,
          )}
        </div>
      </div>
    </LayoutHome>
  );
};

export default App;
