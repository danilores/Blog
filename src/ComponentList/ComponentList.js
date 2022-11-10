import './ComponentList.css'
import  Component from './Component/Component'

function ComponentList({List, DelArticle}){
   if(List.length==0) return(<div className='ArticleList'><div className='NoPost'>Net postov</div></div>)
   console.log(List[0]["Type"])
    return(
    //  All componenst rendered here
 <div className='ArticleList'>
    {List.map(arr=>(
       <Component arr={arr} DelArticle={DelArticle} />
       ))}
    </div>)
}
export default ComponentList;