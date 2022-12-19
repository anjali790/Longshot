import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

import './DragDrop.css';

export function DragDrop() {
    const [list, setList] = useState([]);
    const dragItem = useRef();
    const dragOverItem = useRef();

    useEffect(() => {
        axios.get("data.json").then((response) => {
            setList([...response.data.raw_broadmatch_data]);
        });
    }, []);

    function dragStart(position) {
        dragItem.current = position;
    };

    function dragEnter(position) {
        dragOverItem.current = position;
    };

    function drop() {
        const copyListItems = [...list];
        const dragItemContent = copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setList(copyListItems);
    };

    return (
        <>
            {list &&
                list.map((item, index) => (
                    <div
                        className="drag"
                        onDragStart={(e) => dragStart(e, index)}
                        onDragEnter={(e) => dragEnter(e, index)}
                        onDragEnd={drop}
                        key={index}
                        draggable
                        onDragOver={(e) => e.preventDefault()}
                    >
                        <h6 className="drag_item_list">{item[0]}</h6>
                    </div>
                ))}
        </>
    );
}