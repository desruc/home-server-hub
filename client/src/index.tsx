import { createRoot } from "react-dom/client";
import { SWRConfig } from "swr";
import App from "./App";

import "./assets/css/styles.scss";

const container = document.getElementById("root");

const root = createRoot(container!);

root.render(
  <SWRConfig
    value={{
      fetcher: (resource, init) => fetch(resource, init).then((res) => res.json())
    }}
  >
    <App />
  </SWRConfig>
);
