import Sender from "./Sender";
import Reciever from "./Reciever";

// cammbiar el nombre a Chat Layout
const ChatBubbles = () => {
  return (
    <div className="w-full absolute top-12 md:top-20 bottom-12 bg-white flex flex-col overflow-y-auto pb-10">
      <div className="flex flex-grow flex-col-reverse">
        <Sender>Esto es un mensaje de ida</Sender>
        <Sender>
          Esto es un mensaje de ida mucho mas largo para ver como se soloca el
          text
        </Sender>
        <Reciever>Esto es un mensaje recibido</Reciever>
        <Sender>Este es otro mensaje enviado</Sender>
      </div>
    </div>
  );
};

export default ChatBubbles;
