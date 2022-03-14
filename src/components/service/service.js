


export const searchHotel = async ({ api_sup, delay }) => {

    console.log(api_sup, delay, 'llll')


    const response = await fetch('http://test.lys-software.com/db/'+api_sup);
    response.then()
    if (response.ok) {
        const json = await response.json();
    }
    return json;

}



export const normalizarData = (data) => {


    return 'leo';

}


export const quitarRepetidos = (data) => {

    return 'leo';

}


export const prioridaddatos = (data) => {

    return 'leo';

}