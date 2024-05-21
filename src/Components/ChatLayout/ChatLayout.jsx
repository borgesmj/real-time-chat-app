import MessageRecieved from "./MessageRecieved";
import MessageSent from "./MessageSent";

// cammbiar el nombre a Chat Layout
const ChatBubbles = () => {
  return (
    <div className="w-full absolute top-12 md:top-20 bottom-12 bg-white flex flex-col overflow-y-auto pb-10">
      <div className="flex flex-grow flex-col-reverse">
        <MessageSent>
          <p>Esto es un mensaje de ida</p>
          <span className="text-[10px] absolute -bottom-4 right-0">13:59</span>
        </MessageSent>
        <MessageSent>
          <p>
            Esto es un mensaje de ida mucho mas largo para ver como se coloca el
            texto
          </p>
          <span className="text-[10px] absolute -bottom-4 right-0">13:59</span>
        </MessageSent>
        <MessageRecieved>
          <p>Esto es un mensaje recibido</p>
          <span className="text-[10px] absolute -bottom-4 left-0">13:59</span>
        </MessageRecieved>
        <MessageSent>
          <p>Este es otro mensaje enviado</p>
          <span className="text-[10px] absolute -bottom-4 right-0">13:59</span>
        </MessageSent>
      </div>
    </div>
  );
};

export default ChatBubbles;
