import { useState, useEffect } from "react"
import ListCard from "./components/ListCard"

function App() {
  const [countries, setCountries] = useState()

  useEffect(() => {

    fetch("https://restcountries.com/v3.1/region/europe")
    .then(data => data.json())
    .then(data => {
      console.log(data);
      data.sort((a,b) => {
        if(a.name.common < b.name.common) {
          return -1
        }
        else if(a.name.common > b.name.common) {
          return 1
        }
        else {
          return 0
        }
      })
      setCountries(data)
    })

  }, [])
  
  return (
    <div className="min-h-screen bg-slate-800">
      <div className="max-w-7xl mx-auto py-20 px-4">
        <h1 className="text-gray-50 text-4xl">Europe Countries Data.</h1>
        <p className="text-gray-100 text-xl mb-8">Click on a card to reveal a country's information.</p>
        {countries && (
          <ul className="grid min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 auto-rows-[200px]">
            {countries.map((country, index) => (
              <ListCard key={index} country={country} />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App
