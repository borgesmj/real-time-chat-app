import Section from "../../Components/Section/Section";
import PageTemplate from "../../Templates/PageTemplate";
const ContactList = ({
  darkTheme,
  setSidebarOpen,
  sidebarOpen,
  currentUser,
  setModalIsOpen,
}) => {
  return (
    <PageTemplate
      darkTheme={darkTheme}
      setSidebarOpen={setSidebarOpen}
      sidebarOpen={sidebarOpen}
      currentUser={currentUser}
      setModalIsOpen={setModalIsOpen}
    >
      <Section>Amigos
        <div>Agregados</div>
        <div>Solicitudes Enviadas</div>
        <div>Solicitudes Recibidas</div>
      </Section>
    </PageTemplate>
  );
};

export default ContactList;
