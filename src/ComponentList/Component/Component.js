import './Component.css'

function Component({arr, DelArticle}){
    return( <div className='Article' id={arr.id}>
    <div className='Txt'><h2>{arr["Title"]}</h2>
    <h3>{arr["Type"]}</h3>
    <div className='row'>{arr["Text"]}</div>
    </div>
    <div className='More'><p>Read more</p></div>
    <div className='Dat'><p>{arr["Date"]}</p>    
    <p className='Del' onClick={()=>DelArticle(arr)}>Delete</p>
    </div>
</div>
    )
}

export default Component;