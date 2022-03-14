import { useState, useEffect } from "react";
import useFetch from "./hooks/useFetch";
import { Spiner } from "./components/Spiner";
import { Search } from "./components/Search";

import { Pagination } from "./components/Pagination";

import { CardHotel } from "./components/CardHotel";

function App() {
	const urlSupplier = "http://test.lys-software.com/db/setSupplier.json";

	const { data: supplies } = useFetch(urlSupplier);
	const [datatotal, setdatatotal] = useState([]);
	const [datapaginada, setdatapaginada] = useState(0);
	const [countPage, setcountPage] = useState(0);
	const [hotelRender, sethotelRender] = useState([]);


	useEffect(() => {
		if (supplies.length > 0) {
			supplies.map(sup => {
				// console.log(sup.api_sup);
				datos(sup.api_sup);
        sethotelRender(datatotal.slice(0, 10))
			});
       
       
		}
    sethotelRender(datatotal.slice(countPage+10, 10))

	}, [supplies, countPage]);

	const datos = async url => {
		const response = await fetch("http://test.lys-software.com/db/" + url);
		const listaitems = await response.json();
		// setdatatotal([...datatotal, ...listaitems]);
		setdatatotal([...listaitems]);
		return listaitems;
	};

  	const handlenext = ()=>{
		
		setcountPage(countPage+10);
     sethotelRender(datatotal.slice(countPage+10, 10))
		

	}

	const handleprev = ()=>{
		// if(countPage>0)
		// console.log(setcountPage(countPage-10));
    
	}

	return (
		<div className="App   content-start">
			<div className="p-10">
				<Search />

				<h3 className="font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600">
					Resultados
				</h3>
        {
         
        }
				{
       
        datatotal.map((hotel, index) => {
				
					return <CardHotel key={index} hotel={hotel} countPage={countPage} />;
				})}
				{/* <pre>{datatotal.length}</pre> */}
				<pre> pagina actual: {countPage}</pre>
				<pre>{JSON.stringify(hotelRender, null, 2)}</pre>
			</div>
			<Pagination totalitems={datatotal.length} page={setcountPage} countPage={countPage} handlenext={handlenext} handleprev={handleprev} />
		</div>
	);
}

export default App;
