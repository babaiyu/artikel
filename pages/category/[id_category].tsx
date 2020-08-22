import {useRouter} from 'next/router';
import _ from 'lodash';
import {LayoutHome, Article} from 'components';
import {listDummyCategory, listDummyArticle} from 'helpers/dummy';

const Category = () => {
  // Config
  const router = useRouter();

  // Function
  const findNameCategory = () => {
    const category_name = _.result(
      router.query,
      'id_category',
      '',
    ).toLowerCase();
    const findCategory = _.find(
      listDummyCategory,
      (o) => o.toLowerCase() === category_name,
    );
    const result =
      findCategory !== undefined
        ? findCategory.toLowerCase()
        : `Cannot find category ${category_name}`;
    return result;
  };

  // Render
  return (
    <LayoutHome activeNum={0} title={findNameCategory()}>
      <div className="container mx-auto mt-5">
        <h1 className="text-5xl">{findNameCategory()}</h1>
        <hr className="my-3" />
        <section className="md:flex flex-wrap md:mb-5 md:pr-3">
          {listDummyCategory.map((e, i) => (
            <a
              href={`/category/${e.toLowerCase()}`}
              key={i}
              className="inline-block bg-gray-200 hover:bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 my-2 mr-2">
              {e.toLocaleLowerCase()}
            </a>
          ))}
        </section>
        <section>
          {listDummyArticle.map((e, i) => (
            <Article
              key={i}
              data={e}
              targetCategory={e.urlCategory}
              targetArticle={e.urlArticle}
              targetProfile={e.urlProfile}
            />
          ))}
        </section>
      </div>
    </LayoutHome>
  );
};

export default Category;
