import PageTemplate from "../../Templates/PageTemplate";
import Section from "../../Components/Section/Section";

const Groups = ({ darkTheme, setSidebarOpen, sidebarOpen }) => {
  return (
    <PageTemplate
      darkTheme={darkTheme}
      setSidebarOpen={setSidebarOpen}
      sidebarOpen={sidebarOpen}
    >
      <Section>Contacts</Section>
    </PageTemplate>
  );
};

export default Groups;
