import Sidebar from "../Components/Sidebar/Sidebar";

const PageTemplate = ({
  children,
  setSidebarOpen,
  sidebarOpen,
  darkTheme,
  setDarkTheme,
  currentUser,
  setModalIsOpen
}) => {
  return (
    <div className="w-full h-full relative xl:w-4/5 2xl:w-3/4">
      <Sidebar
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
        currentUser = {currentUser}
        setModalIsOpen={setModalIsOpen}
      />
      {children}
    </div>
  );
};

export default PageTemplate;
