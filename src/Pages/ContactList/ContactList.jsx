import Section from "../../Components/Section/Section";
import PageTemplate from "../../Templates/PageTemplate";
const ContactList = ({ darkTheme, setSidebarOpen, sidebarOpen }) => {
  return (
    <PageTemplate
      darkTheme={darkTheme}
      setSidebarOpen={setSidebarOpen}
      sidebarOpen={sidebarOpen}
    >
      <Section>ContactList</Section>
    </PageTemplate>
  );
};

export default ContactList;
