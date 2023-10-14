import { useContext, useEffect } from "react";
import { BackgroundHeader, Layout, Map, Tracker } from "./components";
import { AppContext } from "./context/AppContext";
import axios from "axios";

function App() {
  const { setData, requestUrl } = useContext(AppContext);

  useEffect(() => {
    if (requestUrl) {
      axios.get(requestUrl).then((response) => {
        setData(response.data);
      });
    }
  }, [requestUrl]);

  return (
    <Layout>
      <BackgroundHeader />
      <Map />
      <Tracker />
    </Layout>
  );
}

export default App;
