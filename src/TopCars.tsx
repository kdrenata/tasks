type CarsPropsType = {
    topCars: Array<CarsType>
}
type CarsType = {
    manufacturer: string,
    model: string,
}


export const Cars = (props: CarsPropsType) => {

    return (
        <table>
            <thead>
            <tr>
                <th>manufacturer</th>
                <th>model</th>
            </tr>
            </thead>

            <tbody>
            {props.topCars.map((objectCarsPropsType, index) => (
                <tr key={index}>
                    <td>{objectCarsPropsType.manufacturer}</td>
                    <td>{objectCarsPropsType.model}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}