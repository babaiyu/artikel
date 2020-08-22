import Link from 'next/link';
import dayjs from 'dayjs';
import {LayoutHome, HrBorder, Article} from '../components';
import {listDummyArticle, listDummyCategory} from 'helpers/dummy';

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
        <div className="flex-row flex justify-around items-center my-5">
          <div className="flex justify-center items-center">
            <i className="far fa-calendar text-3xl text-gray-500" />
            <small className="text-gray-600 ml-2">
              {dayjs(data.releaseDate).locale('id').format('DD MMM YYYY')}
            </small>
          </div>
          <div className="flex justify-center items-center">
            <i className="far fa-eye text-3xl text-gray-500" />
            <small className="text-gray-600 ml-2">{data.view} dilihat</small>
          </div>
          <div className="flex justify-center items-center">
            <i className="far fa-heart text-3xl text-gray-500" />
            <small className="text-gray-600 ml-2">{data.like} disukai</small>
          </div>
        </div>
        <hr className="my-3" />
        <div className="flex flex-row py-3 items-center">
          <img
            className="rounded-full h-16 w-16 object-cover mr-3 hover:shadow-md"
            alt="img_profile"
            src={data.img}
          />
          <div className="flex flex-col">
            <Link href="/about">
              <a href="#" className="hover:underline">
                {data.profileName}
              </a>
            </Link>
            <small>{data.profileType}</small>
          </div>
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
          {listDummyCategory.map((e, i) => (
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
