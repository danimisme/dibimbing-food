import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/ModalDelete.module.css";
import { hideModalDelete } from "@/redux/reducers/ModalDeleteReducer";

export default function ModalDelete() {
  const isModalShow = useSelector((store) => store.modalDelete.modalDeleteShow);
  const dispatch = useDispatch();
  return (
    <div
      className={`${styles.modal_delete} ${
        isModalShow ? `${styles.show}` : `${styles.hide}`
      }`}
    >
      <div
        className={` ${styles.modal_delete_content} flex flex-col gap-3 p-5 w-1/4 mx-auto rounded-xl `}
      >
        <h1 className="text-center text-xl font-bold">
          Yakin Ingin Menghapus ?
        </h1>
        <div className="flex justify-between px-5 mt-5">
          <button className="bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-red-500">
            Confirm
          </button>
          <button
            className="bg-gray-700 text-white font-bold py-2 px-4 rounded hover:bg-gray-500"
            onClick={() => dispatch(hideModalDelete())}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
