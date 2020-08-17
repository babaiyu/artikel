import {LayoutHome} from '../components';

const dataCarousel = [
  'HOME',
  'POPULER',
  'LIFESTYLE',
  'CORONAVIRUS',
  'PENDIDIKAN',
  'INTERNET',
  'Lihat kategori lainnya',
];

const App = () => {
  // Render
  return (
    <LayoutHome activeNum={0} title="Home">
      <div className="container mx-auto mt-5">
        <div className="mt-3 md:flex">
          <div className="flex-1 pr-6">
            <i>
              <u>Gadget</u>
            </i>
            <h1 className="font-bold text-5xl">
              Alasan laptop Dell XPS 15 cocok untuk kalangan remaja
            </h1>
            <p className="text-gray-600 my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse lacinia porttitor purus vitae eleifend. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Duis scelerisque
              metus odio, ut faucibus nisl viverra eget. Praesent ornare tempus
              tellus...
            </p>
            <hr className="my-3" />
            <div className="flex-row flex justify-around align-middle my-5">
              <i className="far fa-calendar text-3xl text-gray-500" />
              <i className="far fa-eye text-3xl text-gray-500" />
              <i className="far fa-heart text-3xl text-gray-500" />
              <button>
                <i className="far fa-bookmark text-3xl text-gray-500" />
              </button>
            </div>
            <div className="flex-row flex justify-around align-middle md:my-5">
              <small className="text-gray-600">3 Juli 2020</small>
              <small className="text-gray-600">1450 Dilihat</small>
              <small className="text-gray-600">443 Menyukai</small>
              <small></small>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1825&q=80"
              alt="thumbnail_picture"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="border-t-2 border-blue-500 my-6 container mx-auto" />
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
        </div>
        <div className="flex-1 flex-col">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <button
              key={i}
              className="border rounded justify-start w-full items-start flex mb-3">
              <div className="flex-1 justify-start items-start text-left py-2 px-3">
                <i>
                  <u>Selebriti</u>
                </i>
                <h1 className="font-bold text-2xl">
                  Yuk kenalan dengan Coco Trinidad, artis kebangsaan Filipina
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="w-56">
                <img
                  alt="Mamank"
                  src="https://pbs.twimg.com/media/EUz5qgbUYAEKqdF.jpg"
                  className=" w-full rounded-tl-md rounded-bl-md"
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </LayoutHome>
  );
};

export default App;
