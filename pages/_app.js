import "tailwindcss/tailwind.css";
import { store } from "../app/store";
import "../styles/global.css";
import "../styles/price.css";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
