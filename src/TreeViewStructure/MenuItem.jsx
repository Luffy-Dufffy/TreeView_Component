import { useState } from "react";
import MenuList from "./MenuList";

function MenuItem({ item }) {
    const [currentChildren, setCurrentChildren] = useState(item.children);
    const [childShown, setChildShown] = useState(false);

    function toggleChildShown(){
        setChildShown(!childShown);
    }

    return (
        <li key={item.label} >
            <div className="menu-item" onClick={toggleChildShown}>
                <p>{item.label}</p>
                <span>{ currentChildren && currentChildren.length>0 ? (childShown ? "-" : "+") : null}</span>
            </div>
            {
            item && item.children && item.children.length > 0 && childShown ? 
            <MenuList itemList={item.children} /> 
            : null
            }

        </li>

    );
}

export default MenuItem;
