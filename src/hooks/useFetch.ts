import { useState, useEffect } from "react";


type UseFetchState = {
	state: "idle" | "loading" | "error" | "success";
	data: null | any;
	error: null | Error;
};

export default function useFetch(url: string, seg=0) {
	const [fetchState, setfetchState] = useState({
		state: "idle",
		data: [],
		error: null
	});
	
	useEffect(() => {
		
			async function fecchData() {
			try {
				setfetchState(oldValue => ({
					...oldValue,
					state: "loading"
				}));

				const response = await fetch(url);
				if (response.ok) {
                    const json = await response.json();
                    setfetchState({
						state: "success",
						data: json,
						error: null
					});
				} else {
					setfetchState({
						state: "error",
						data: [],
						error: new Error(response.statusText)
					});
				}
			} catch (error) {
                setfetchState({
						state: "error",
						data: [],
						error: error as Error
					});
            }
		}

		 setTimeout(() => {
         fecchData()
			},seg);
			
		

	}, [url]);

	console.log(fetchState)

	  return fetchState;
	
}
