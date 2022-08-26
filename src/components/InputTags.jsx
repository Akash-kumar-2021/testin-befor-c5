import { useState } from 'react';
import Card from './Card';

const InputTags=()=>
{   const [intialData,setIntialData] = useState({name:"",height:0,weight:0,power:0})
    const [data,setData] = useState([]);
    

    const handleChange = (e) => 
    {
         const name = e.target.name ;
         const value = e.target.value ;
        //  console.log(name,value);
         setData({...intialData,[name]:value})
    }

    // Button Submit
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        if(data.name && data.height && data.power && data.weight)
        {
            const newData = {
                id: new Date().getTime().toString(),
                title:{...data}}
            setData([...data,newData]);
            // setIntialData({name:"",height:0,weight:0,power:0});
        }
        
    }
    return(
        <>
        <form>
            <input data-testid="input-name" type="text" placeholder='Enter SuperHero Name' name="name"
            value={data.name}
            onChange={handleChange}
            id="name"
          
            />


            <input data-testid="input-height" type="text" name="height" placeholder='Enter height'
            value={data.height}
            onChange={handleChange}
            id="height"
            />


            <input data-testid="input-weight" type="text" placeholder='Enter Weight' name="weight"
            value={data.weight}
            onChange={handleChange}
            id="weight"
            />

            <input data-testid="input-power" type="text" placeholder='Enetr power' name="power"
            value={data.power}
            onChange={handleChange}
            id="power"
            
            /> 
            <button data-testid="add-button" onClick={handleSubmit} disabled={setData === ""}>Add SuperHero</button>
        </form>
        <button data-testid="most-powerfull">Most Powerful Superhero</button>
        <button data-testid="all-superheroes">Show All</button>
           <Card  data ={data}/>
        </>
    )
}

export default InputTags;
