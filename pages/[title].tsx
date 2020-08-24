import {useRouter} from 'next/router';
import _ from 'lodash';
import {useState, useEffect} from 'react';
import dayjs from 'dayjs';
import {LayoutHome} from 'components';
import {listDummyArticle} from 'helpers/dummy';

const Content = () => {
  // Config
  const router = useRouter();
  const title = _.result(router.query, 'title', '').toLowerCase();

  // State
  const [content, setContent] = useState(null);

  // Life cycle
  useEffect(() => {
    if (content === null) {
      setContent(listDummyArticle[0]);
    }
  }, [content]);

  // Render
  return (
    <LayoutHome activeNum={0} title={title}>
      <div className="container mx-auto mt-5 flex justify-start items-start">
        <article className="mx-10">
          <h2 className="font-bold text-5xl block">
            {listDummyArticle[0].title}
          </h2>
          <div>
            <div className="flex justify-center items-center">
              <img
                className="object-cover w-full"
                alt={listDummyArticle[0].title}
                src={listDummyArticle[0].img}
              />
            </div>
            <div className="flex flex-row py-5 justify-between items-center">
              <div className="flex flex-row items-center mr-3 border-r-2 pr-3">
                <img
                  className="rounded-full h-12 w-12 object-cover mr-3 hover:shadow-md"
                  alt="img_profile"
                  src={listDummyArticle[0].img}
                />
                <div className="flex flex-col">
                  <p className="hover:underline">
                    {listDummyArticle[0].profileName}
                  </p>
                  <small>{listDummyArticle[0].profileType}</small>
                </div>
              </div>
              <div>
                <small>
                  {dayjs(listDummyArticle[0].releaseDate)
                    .locale('id')
                    .format('DD MMM YYYY')}
                </small>
              </div>
              <div></div>
            </div>
            <p>{listDummyArticle[0].description}</p>
            <p>{listDummyArticle[0].description}</p>
            <p>{listDummyArticle[0].description}</p>
            <p>{listDummyArticle[0].description}</p>
            <p>{listDummyArticle[0].description}</p>
            
          </div>
        </article>
      </div>
    </LayoutHome>
  );
};

export default Content;
