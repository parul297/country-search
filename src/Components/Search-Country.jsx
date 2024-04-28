import { useEffect , useState } from "react";

export default function SearchCountries (){ 
    const [countries , setCountries] = useState ([]);
    const [SearchCountry , setSearchCountry] = useState ('');
   

    // const filteredCountries = countries.filter(country=>country.name.toLowerCase().includes(SearchCountry.toLowerCase()))
    const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(SearchCountry.toLowerCase()))

    const handleChange =(e)=>{
      setSearchCountry(e.target.value)
    }


    useEffect (()=>{
        fetch ("https://restcountries.com/v3.1/all")
        .then ((res)=>res.json())
        .then ((data)=>setCountries(data))
        .catch ((err)=> console.log ("Error fetching data :",err))

    },[])
    const countryCard = {
        width: "200px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        margin: "10px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      };
    
      const imageStyle = {
        width: "100px",
        height: "100px",
      };
    
      const containerStyle = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      };
       
      const box = {
        display: "flex",
        justifyContent: "center",
        flexDirection : "column",
      }
      
      const inbox =  {
       display : "flex",
       justifyContent : "center",
      } 
       const iboxStyle = {
        width : "60vw",
       height : "2rem",
       }

    return ( 
      <div style={box}>
      <div style={inbox}>
        <input style={iboxStyle} type="text" placeholder="Search for countries..." value={SearchCountry} onChange={handleChange} />
        </div>
        <div style={containerStyle}> 
       {filteredCountries.map((country)=>{
         return <div key={country.cca3} style={countryCard}>
            <img src={country.flags.png}
             alt= {`flag of ${country.name.common}`}
            style={imageStyle}
            />
            <h2>{country.name.common}</h2>
        </div>
    
       })}
    </div>
    </div>
    )
    
}