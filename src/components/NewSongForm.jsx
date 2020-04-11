import React, {  useState } from 'react';

// In child component you also need get function as object
const NewSongForm = ({addSong}) => {
    const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // When you click submit , you pass data to parent 
        addSong(title);
        
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Song name:</label>
            {/* On change => will update value in state everytime */}
            <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)}/>
            <input type="submit" value="add song"/>
        </form>
     );
}
 
export default NewSongForm;