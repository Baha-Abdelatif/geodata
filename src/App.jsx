import { useState, useEffect } from "react";
import ListCard from "./components/ListCard";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchDataForCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/region/europe"
        );
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        const fetchedCountries = await response.json();
        fetchedCountries.sort((a, b) => {
          if (a.name.common < b.name.common) {
            return -1;
          } else if (a.name.common > b.name.common) {
            return 1;
          } else {
            return 0;
          }
        });
        setCountries(fetchedCountries);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchDataForCountries();
  }, []);
  return (
    <div className='min-h-screen bg-slate-800'>
      <div className='max-w-7xl mx-auto py-20 px-4'>
        <h1 className='text-gray-50 text-4xl'>Europe countries</h1>
        <p className='text-gray-100 text-xl mb-8'>
          Select a card to reveal country's informations.
        </p>
        {countries.length > 0 ? (
          <ul className='grid min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 auto-rows-[200px] '>
            {countries.map((country) => {
              return <ListCard key={country.cca2} country={country} />;
            })}
          </ul>
        ) : (
          <h1>Loading Datas...</h1>
        )}
      </div>
    </div>
  );
}

export default App;
