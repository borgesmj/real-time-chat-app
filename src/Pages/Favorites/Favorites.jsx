import PageTemplate from "../../Templates/PageTemplate";
import Section from "../../Components/Section/Section";
import ChatsList from "../../Components/ChatsList/ChatsList";
const Favorites = ({darkTheme, setSidebarOpen, sidebarOpen}) => {
  return (
    <PageTemplate
      darkTheme={darkTheme}
      setSidebarOpen={setSidebarOpen}
      sidebarOpen={sidebarOpen}
    >
      <Section>Favorites</Section>
    </PageTemplate>
  );
};

export default Favorites;
