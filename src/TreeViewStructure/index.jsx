import MenuList from './MenuList';
import './style.css'


function TreeViewStructure({ menus = [] }){
    return(
        <div className="tree-view-container">
            <MenuList itemList={menus} />
        </div>
    );
}


export default TreeViewStructure;