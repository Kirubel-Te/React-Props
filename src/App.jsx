import Header from "./components/Header"
import Entry from "./components/Entry"
import TravelData from "./components/data"

export default function App(){
  const Data = TravelData.map((data) => {
    return <Entry img = {data.img} title = {data.title} country = {data.country} googleMapsLink = {data.googleMapsLink} dates = {data.dates} text = {data.text}
    />
  })
  return(
    <>
      <Header/>
      {Data}

      <Header/>
    </>
  )
}