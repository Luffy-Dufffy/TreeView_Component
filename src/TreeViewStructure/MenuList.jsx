import MenuItem from "./MenuItem";


function MenuList({ itemList = [] }){
    return(
        <ul className="menu-container">
            {itemList && itemList.length>0 ? 
            itemList.map((listItem) => {
                return(
                    <MenuItem item={listItem} />
                );
            }) 
            : null}

        </ul>
    );
}

export default MenuList;