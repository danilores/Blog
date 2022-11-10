import './NavBar.css'
import Gachi from './gachi.png'
import More from './icons8-menu.svg'
import search from './search.svg'
function NavBar({setAddVis,AddVis, Search, setSearch,searchArt}){
    return(
    <header>
        <div className='logo-name' >
            <img id="logo"  src={Gachi} alt='site logo'/>
            <h1>Gachi Blog</h1>
        </div>
        <form>
             <input id="inp" value={Search} onChange={e=>{setSearch(e.target.value)}} onSubmit={searchArt} type="text" placeholder="Искать здесь..."/>
             <button id='srch' type="submit" onClick={searchArt}></button>
        </form>
        <nav className="navbar">
            <a type="button" href="#">Main</a>
            <a type="button" href="#" onClick={()=>setAddVis(AddVis=!AddVis)}>Add article</a>
             <a type="button" href="#">Contact info</a>    
         </nav>
         <nav2 className="navbar2">
            <img id="more" src={More}/>
           </nav2>
    </header>
    )
}

export default NavBar;