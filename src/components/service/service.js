export const searchHotel =  ({ api_sup, delay }) => {
    const datos = async () =>{
      const response = await fetch("http://test.lys-software.com/db/supplier-1.json" )
      const listaitems = await  response.json();
    }
    return datos;
};

export const normalizarData = data => {
	return "leo";
};

export const quitarRepetidos = data => {
	return "leo";
};

export const prioridaddatos = data => {
	return "leo";
};
