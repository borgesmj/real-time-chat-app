import "./Loader.css";

const Loader = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#00000050] flex justify-center items-center z-10">
      <div className="loader">
        <li className="ball"></li>
        <li className="ball"></li>
        <li className="ball"></li>
      </div>
    </div>
  );
};

export default Loader;
