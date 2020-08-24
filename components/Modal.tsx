import {ReactNode} from 'react';

const Modal = (props: {show: boolean; children: ReactNode}) => (
  <div className={`modal ${props.show ? 'block' : 'hidden'}`}>
    {props.children}
  </div>
);

type ModalLogoutProps = {
  onCloseModal: () => void;
  onOK: () => void;
  show: boolean;
};
export const ModalLogout = (props: ModalLogoutProps) => {
  // Main Render
  return (
    <Modal show={props.show}>
      <section className="modal-main py-5 px-6 text-center rounded">
        <p className="text-xl pb-5">Are you sure want to logout?</p>
        <div className="flex justify-center items-center mt-5">
          <button
            className="py-2 px-3 rounded mr-5 border border-solid border-black"
            onClick={props.onOK}>
            LOGOUT
          </button>
          <button
            className="py-2 px-3 rounded bg-red-500 text-white"
            onClick={props.onCloseModal}>
            CANCEL
          </button>
        </div>
      </section>
    </Modal>
  );
};
