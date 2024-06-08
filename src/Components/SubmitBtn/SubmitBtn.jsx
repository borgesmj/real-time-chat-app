import ButtonLoader from "../Loader/ButtonLoader";
const SubmitBtn = ({ btnText, handleSubmit, btnIsActive, userLoading }) => {
  const handleButton = (e) => {
    e.preventDefault();
    if (!btnIsActive) {
      return;
    } else {
      handleSubmit();
    }
  };
  return (
    <button
      className={`w-[120px] h-[40px] p-3 flex justify-center items-center rounded-md relative transition-all active:scale-100 active:shadow-[0px_0px_0px_0px_var(--text-200)] ${
        !btnIsActive
          ? "cursor-not-allowed bg-gray-500"
          : "bg-gradient-to-r from-[var(--accent-100)] to-[var(--accent-200)] border-solid border-[var(--primary-300)] border-[1px] text-[#fefefe] scale-105 shadow-[0px_0px_4px_2px_var(--text-200)]"
      }`}
      onClick={handleButton}
    >
      {userLoading ? <ButtonLoader /> : btnText}
    </button>
  );
};

export default SubmitBtn;
