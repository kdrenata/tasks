import React, {useState} from 'react'
import './App.css'
import {NewComponent} from "./NewComponent.tsx";
import {Cars} from "./TopCars.tsx";

function App() {
    let [students, setStudents] = React.useState([
        {id: 1, name: 'Renata', age: 35},
        {id: 2, name: 'Renata', age: 35},
        {id: 3, name: 'Renata', age: 35},
        {id: 4, name: 'Renata', age: 35},
        {id: 5, name: 'Renata', age: 35},
        {id: 6, name: 'Renata', age: 35},
        {id: 7, name: 'Renata', age: 35}
    ]);

    const [topCars, setTopCars] = React.useState([
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]);

    // const myFirstSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log('hello im vasya')
    // }
    // const mySecondSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log('hello im ivan')
    // }
    const onClickHandler = (name: string) => {
        console.log(name)
    }

    return (
        <div>
            <Cars topCars={topCars} />
            <NewComponent students={students} />
            {/*<button onClick={(event) => { console.log('hello')} }>MyYouTubeChanel-1</button>*/}
            <button onClick={() => onClickHandler('vasya')}>MyYouTubeChanel-1</button>
            <button onClick={() => onClickHandler('ivan')}>MyYouTubeChanel-2</button>
            <button onClick={() =>onClickHandler('some info')}>MyYouTubeChanel-3</button>
        </div>
    )
}

export default App
