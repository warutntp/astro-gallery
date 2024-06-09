import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SideBar from "./components/SideBar";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [nasData, setNasData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        setLoading(false);
        return;
      }
      localStorage.clear();

      const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Failed to fetch data from NASA API");
        }
        const data = await res.json();
        localStorage.setItem(localKey, JSON.stringify(data));
        setNasData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading && (
        <div className="loadingState">
          <i className="fa-solid fa-gear fa-spin"></i> Loading...
        </div>
      )}
      {error && (
        <div className="errorState">
          <p>Error: {error}</p>
        </div>
      )}
      {nasData && !loading && (
        <>
          <Main nasData={nasData} />
          {showModal && (
            <SideBar nasData={nasData} handleToggleModal={handleToggleModal} />
          )}
          <Footer nasData={nasData} handleToggleModal={handleToggleModal} />
        </>
      )}
    </>
  );
}

export default App;
