import {
  html,
  render,
  useEffect,
  useState,
} from "https://unpkg.com/htm/preact/standalone.module.js";

let ws;

function Chat() {
  // Messages
  const [messages, setMessages] = useState([]);
  const onReceiveMessage = ({ data }) => setMessages((m) => [...m, data]);
  const onSendMessage = (e) => {
    const msg = e.target[0].value;

    e.preventDefault();
    ws.send(msg);
    e.target[0].value = "";
  };

  // Websocket connection + events
  useEffect(() => {
    if (ws) ws.close();
    ws = new WebSocket(`ws://${window.location.host}/ws`);
    ws.addEventListener("message", onReceiveMessage);

    return () => {
      ws.removeEventListener("message", onReceiveMessage);
    };
  }, []);

  return html` <button>TESTINGbutton></button> `;
}

render(html`<${Chat} />`, document.getElementById("app"));
