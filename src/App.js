import './App.css';
import  NavBar from './NavBar/NavBar'
import ComponentList from './ComponentList/ComponentList'
import ComponentDefalutList from './ComponentDefalut';
import AddNewComponent from './AddComponent/AddComponent';
import { useState } from 'react';
function App() {
  const [List,setList]=useState(ComponentDefalutList)
  const [ArtName,setArtName]=useState("");
  const [Art,setArt]=useState("");
  const [Search,setSearch]=useState("")
  const [AddVis,setAddVis]=useState(false)
  
  function searchArt(){
    let NewArr=[];
    console.log(Search)
    List.map(arr=>{if(arr["Title"].includes(Search)) NewArr.push(arr)})
    setList(NewArr)
  }
  
  function AddArticle(e){  
    e.preventDefault();
    if (ArtName==="" || Art==="") {
      alert("Net nihua")
      return;
    }
    
    const Buff=[];
    if (document.getElementById('Coding').checked) Buff.push(document.getElementById('Coding').value);
    if (document.getElementById('Anime').checked) Buff.push(document.getElementById('Anime').value);
    if (document.getElementById('Philosophy').checked) Buff.push(document.getElementById('Philosophy').value);
    const newArt={id: Date.now(),"Title":ArtName, "Text": Art,"Type":Buff, "Date": new Date().toISOString().slice(0, 10)}
    setList([...List,newArt])}
    function DelArticle(Artcle){
    setList(List.filter(art=>art.id!==Artcle.id))
    }

 if (AddVis) return (
    <div className="App">
     <NavBar setAddVis={setAddVis} AddVis={AddVis} Search={Search} setSearch={setSearch} searchArt={searchArt}/>
     <AddNewComponent AddArticle={AddArticle} ArtName={ArtName} setArtName={setArtName} Art={Art} setArt={setArt}/>
    <ComponentList List={List} DelArticle={DelArticle}/>
    </div> 
  );
  else return(
    <div className="App">
     <NavBar setAddVis={setAddVis} AddVis={AddVis} Search={Search} setSearch={setSearch} searchArt={searchArt}/>
    <ComponentList List={List} DelArticle={DelArticle}/>
    </div> 
  )
}


export default App;
