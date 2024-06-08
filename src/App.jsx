import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SideBar from "./components/SideBar";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [nasData, setNasData] = useState();
  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const fetchData = async () => {
      const today = new Date().toDateString();
      const localKey = `NASA-${today}`;

      if (localStorage.getItem(localKey)) {
        const localData = JSON.parse(localStorage.getItem(localKey));
        setNasData(localData);
        return;
      }
      localStorage.clear();

      const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_API_KEY}`;
      try {
        console.log("url\n", url);
        const res = await fetch(url);
        const data = await res.json();
        localStorage.setItem(localKey, JSON.stringify(data));
        setNasData(data);
        console.log("DATA\n", data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {nasData ? (
        <Main nasData={nasData} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && (
        <SideBar nasData={nasData} handleToggleModal={handleToggleModal} />
      )}
      {nasData && (
        <Footer nasData={nasData} handleToggleModal={handleToggleModal} />
      )}
    </>
  );
}

export default App;
