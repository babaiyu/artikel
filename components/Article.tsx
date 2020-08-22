import dayjs from 'dayjs';
import Truncate from 'react-truncate';

interface articleProps {
  data: {
    title: string;
    description: string;
    category: string;
    releaseDate: string;
    view: number;
    like: number;
    img: string;
    profileImg: string;
    profileName: string;
    profileType: string;
    urlArticle: string;
    urlCategory: string;
    urlProfile: string;
  };
  targetCategory: string;
  targetArticle: string;
  targetProfile: string;
}

export const Article = ({
  data,
  targetCategory,
  targetArticle,
  targetProfile,
}: articleProps) => {
  return (
    <div className="border rounded justify-start w-full items-start flex mb-3">
      <div className="flex-1 justify-start items-start text-left py-2 px-3">
        <a href={`/category/${targetCategory}`} className="italic underline">
          {data.category}
        </a>
        <br />
        <a
          href={`/${targetArticle}`}
          className="font-bold text-2xl hover:underline">
          {data.title}
        </a>
        <br />
        <Truncate lines={1} ellipsis="...">
          {data.description}
        </Truncate>
        <div className="flex-row">
          <i className="far fa-calendar text-gray-500 mr-2" />
          <small className="mr-5">
            {dayjs(data.releaseDate).locale('id').format('D MMM YY')}
          </small>
          <i className="far fa-eye text-gray-500 mr-2" />
          <small className="mr-5">{data.view}</small>
          <i className="far fa-heart text-gray-500 mr-2" />
          <small className="mr-5">{data.like}</small>
        </div>
        <div className="flex flex-row py-3 items-center">
          <img
            className="rounded-full h-16 w-16 object-cover mr-3 hover:shadow-md"
            alt="img_profile"
            src={data.img}
          />
          <div className="flex flex-col">
            <a href={`/${targetProfile}`} className="hover:underline">
              {data.profileName}
            </a>
            <small>{data.profileType}</small>
          </div>
        </div>
      </div>
      <div className="w-56">
        <img
          alt="Mamank"
          src={data.profileImg}
          className=" w-full rounded-tl-md rounded-bl-md shadow-lg"
        />
      </div>
    </div>
  );
};
