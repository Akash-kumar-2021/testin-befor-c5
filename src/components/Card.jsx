const Card=({data})=>{
    console.log(data);
    return (
        <div data-testid="data-list">
            {data.map((item)=>{
                 const {id,name,height,weight,power} = item
                
                return(
                    <div data-testid="superhero-list" key={id}>
                       
                        <h1>{name}</h1>
                        <p>{height}</p>
                        <p>{weight}</p>
                        <p>{power}</p>
                        
                        {/*All the content of the card has to be added over here*/}
                    </div>
                )
            })}
        </div>
    )
}

export default Card;
