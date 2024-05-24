import Sidebar from "../Components/Sidebar/Sidebar";

const PageTemplate = ({
  children,
  setSidebarOpen,
  sidebarOpen,
  darkTheme,
  setDarkTheme,
  currentUser
}) => {
  return (
    <div className="w-full h-full relative xl:w-4/5 2xl:w-3/4">
      <Sidebar
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
        currentUser = {currentUser}
      />
      {children}
    </div>
  );
};

export default PageTemplate;
