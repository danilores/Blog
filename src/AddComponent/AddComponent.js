function AddNewComponent({AddArticle,ArtName,setArtName,Art,setArt}){

    return(
        <div>
            <form>
                <input type="text" id="ArticleName"value={ArtName} onChange={e=>setArtName(e.target.value)} placeholder="Article Name"/>
                <input type="text" id="Article" value={Art} onChange={e=>{setArt(e.target.value)}} placeholder="Article Text"/>
                <label>Coding<input type="checkbox" name="Coding[]" id="Coding" value="Coding"/></label>
                <label>Anime<input type="checkbox" name="Anime[]" id="Anime" value="Anime"/></label>
                <label>Philosophy<input type="checkbox" name="Philosophy[]" id="Philosophy" value="Philosophy"/></label>
                <input type="submit" value="submit" onClick={AddArticle}/>
            </form>
        </div>)
}

export default AddNewComponent;