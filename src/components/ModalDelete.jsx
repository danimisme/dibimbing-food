export default function ModalDelete() {
  return (
    <div>
      <div className="flex flex-col gap-3 p-5 w-1/4 mx-auto">
        <h1 className="text-center text-xl font-bold">
          Yakin Ingin Menghapus ?
        </h1>
        <div className="flex justify-between px-5 mt-5">
          <button className="bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-red-500">
            Hapus
          </button>
          <button className="bg-gray-700 text-white font-bold py-2 px-4 rounded hover:bg-gray-500">
            Batal
          </button>
        </div>
      </div>
    </div>
  );
}
