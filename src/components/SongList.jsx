import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v1'
import NewSongForm from './NewSongForm'


// ! React Hook
// Note: Hook are special functions
// Note: Allow us to do additional things inside functional components (you can use state ,... ) that you only can do in class components
// Note: Some function in Hook
// Note: useState() use state within a functional component like state
// Note: useEffect() run code when component renders (or re-render) like lifeCycle method (It will hook lifecycle method)
// Note: useContext() consume context in functional component


const SongList = () => {
    // useState is Object that contain 2 things: current data () and method for change a data 
    const [songs, setSongs] = useState ([
        {title: "Let get physical", id: 1},
        {title: "Let kill this love", id: 2},
        {title: "Let me love you", id: 3},
    ])
    const [age, setAge] = useState(20);

    // Update , add new song 
    let addSong = (title) => {
    // This is a hard code, So you need to auto generate id that before you start
    // install uuid : for generate id    
        setSongs([...songs, {title, id : uuid()}])
    }
    // Note callback in useEffect will run every time component render or re-render (update data, first)
    // You cant see when ever I update age (click update button) for only age, the useEffect run every time  
    // So I Just want the useEffect run when I update song So , How can I solve this problem => limit useEffect
    //  => Solve: add second parameter in useEffect this is array - data you only want to call useEffect when they are update 
    useEffect(() => {
        console.log('use effect hook ran', songs); 
        console.log('use effect hook ran', [songs]); 
    }, [songs]);
    useEffect(() => {
        console.log('use effect hook ran', age); 
        console.log('use effect hook ran', [age]); 
    }, [age]);
    // * When every songs array is update we will call useEffect 
    return ( 

        <div className="song-list">
            <ul>
                {
                    songs.map( song => {
                        return (
                        <li key={song.id} > {song.title} </li>
                        )
                    })
                }
            </ul>
            {/* <button onClick={addSong}> Add a Song </button> */}
            {/* Pass data up form child component to parent component through props , pass function into props*/}
            <NewSongForm addSong={addSong} />
            <button onClick = {() => setAge(age+1) }>  Add 1 to age : {age}  </button>

        </div>
     );
}
 
export default SongList;