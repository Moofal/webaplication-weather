import type { NextPage } from "next";
import Footer from "../components/Footer";
import InfoBox from "../components/InfoBox";
import WeatherDropdown from "../components/WeatherDropdown";
import WeatherTable from "../components/WeatherTable";
import useSelected from "../hooks/useSelected";
import useWeather from "../hooks/useWeather";


const Home: NextPage = () => {
  const {state} = useWeather();
  const {selected, setSelected} = useSelected();

  return (
    <>
      {selected === true? 
            (<InfoBox />):
            (null)    
      }
      
      <div className="smolInfo"></div>
      <h1>Velkomen til værdata oversikten</h1>
        <p>Her er noe informasjon som kan være viktig for den som vil lese det. Utover det skriver jeg ikke noe mer her..</p>
        <WeatherDropdown selected={selected} setSelected={setSelected} />
      {selected === true? 
          (<WeatherTable />):
          (null)    
      }
        <Footer />
    </>
  );
};

export default Home;
