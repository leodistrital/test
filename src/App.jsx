import { useState, useEffect } from "react";
import useFetch from "./hooks/useFetch";

import { Spiner } from "./components/Spiner";
import { Search } from "./components/Search";
// import { CardHotel } from "./components/CardHotel";
import { Pagination } from "./components/Pagination";
import { RenderSearch } from "./components/RenderSearch";
import { searchHotel } from "./components/service/service";

function App() {
	const urlSupplier =
		"http://test.lys-software.com/db/setSupplier.json";

	const { data: supplies } = useFetch(urlSupplier);

	// const [resp, setresp] = useState(second)

	// console.log(supplies);

	let acunulado = {};
	useEffect(() => {
		console.log(supplies);
		if (supplies.length > 0) {
			supplies.map(sup => {
				acunulado = searchHotel(sup);
				console.log(acunulado);
			});
		}
	}, [supplies]);


	return (
		<div className="App   content-start">
			<div className="p-10">
				<Search />

				<h3 className="font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600">
					Resultados
				</h3>
				{/* {
          data.map(supplier => (
            <p key={supplier.id_sup}>
              <RenderSearch data={supplier} />
            </p>
          ))
        } */}
				{/* <pre>
          
            { JSON.stringify(data, null, 2) }
          
        </pre> */}
			</div>
			<Pagination />
		</div>
	);
}

export default App;
