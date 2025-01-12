const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-100">
      <div
        className="bg-white rounded-lg p-6 w-1/3 z-10"
        style={{ marginTop: "-850px", transform: "translateY(-50%)" }}
      >
        <h2 className="text-xl font-bold">연락처 정보</h2>
        <p>여기에 연락처 정보를 입력하세요.</p>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default Modal;
