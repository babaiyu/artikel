import {useSelector} from 'react-redux';
import {AppState} from 'storage/reducer';
import {LayoutAdmin} from 'components';

const Settings = () => {
  // Props
  const state = useSelector((state: AppState) => state.user);

  // Render
  return (
    <LayoutAdmin title="Pengaturan" activeNum={0}>
      <section className="max-w-4xl">
        <div className="py-2 px-5 border rounded-md shadow-sm">
          <h1 className="text-3xl">Profil</h1>
          <p>Ubah gambar profil</p>
          <button className="flex flex-row justify-center items-center my-2 px-2 rounded-full hover:shadow-lg hover:bg-blue-100">
            <img
              className="rounded-full h-10 w-10 object-cover mr-3 hover:shadow-md"
              alt="img_profile"
              src="https://pbs.twimg.com/media/EUz5qgbUYAEKqdF.jpg"
            />
            <small className="text-blue-500 font-bold">Ubah</small>
          </button>
        </div>
      </section>
      <section className="mt-8 max-w-4xl">
        <div className="border rounded-md shadow-sm">
          <div className="py-2 px-5">
            <h1 className="text-3xl">Pengaturan lainnya</h1>
          </div>
          <div className="md:flex px-5 flex-row mb-3 justify-between items-center">
            <p>
              notifikasi <b>email</b>
            </p>
            <div>
              <label className="switch">
                <input name="email_notif" type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          <hr className="mt-2 mb-3" />
          <div className="md:flex px-5 flex-row justify-between items-center">
            <p>Warna utama</p>
            <div className="flex flex-row items-center">
              <button className="bg-blue-500 p-3 ml-2 rounded-full hover:shadow-lg"></button>
              <button className="bg-green-500 p-3 ml-2 hover:shadow-lg"></button>
              <button className="bg-purple-500 p-3 ml-2 hover:shadow-lg"></button>
              <button className="bg-pink-500 p-3 ml-2 hover:shadow-lg"></button>
            </div>
          </div>
          <hr className="mt-2 mb-3" />
        </div>
      </section>
    </LayoutAdmin>
  );
};

export default Settings;
