import {LayoutHome} from '../components';

const App = () => {
  // Render
  return (
    <LayoutHome activeNum={0} title="Home">
      <div className="container mx-auto mt-5">
        <i>
          <u className="animate-pulse">Paling Trending</u>
        </i>
        <div className="mt-3 flex">
          <div className="flex-1 pr-6">
            <h1 className="font-bold text-5xl ">
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
            </div>
            <div className="flex-row flex justify-around align-middle">
              <small className="text-gray-600">19/08/2020</small>
              <small className="text-gray-600">1450 Dilihat</small>
              <small className="text-gray-600">443 Menyukai</small>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1825&q=80"
              alt="thumbnail_picture"
              className="inline w-full h-full object-cover rounded-tl-lg rounded-br-lg rounded-tr-sm rounded-bl-sm"
            />
          </div>
        </div>
      </div>
    </LayoutHome>
  );
};

export default App;
