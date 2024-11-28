import React, { useState } from "react";

const DragDropMobile = () => {
    const [lists, setLists] = useState([
        ["Item 1", "Item 2", "Item 3"], // List for Div 1
        ["Item 4", "Item 5", "Item 6"], // List for Div 2
        ["Item 7", "Item 8", "Item 9"], // List for Div 3
    ]);

    const [draggedItem, setDraggedItem] = useState(null);
    const [draggedFromList, setDraggedFromList] = useState(null);

    // Drag Start (for Mouse and Touch)
    const handleDragStart = (item, fromListIndex) => {
        setDraggedItem(item);
        setDraggedFromList(fromListIndex);
    };

    // Drop Handler
    const handleDrop = (toListIndex) => {
        if (draggedItem === null || draggedFromList === null) return;

        const newLists = [...lists];
        // Remove the dragged item from its original list
        newLists[draggedFromList] = newLists[draggedFromList].filter(
            (item) => item !== draggedItem
        );
        // Add the dragged item to the new list
        newLists[toListIndex] = [...newLists[toListIndex], draggedItem];

        setLists(newLists);
        setDraggedItem(null);
        setDraggedFromList(null);
    };

    // Prevent default behavior during dragging
    const handleDragOver = (e) => e.preventDefault();

    // Touch Handlers for Mobile
    const handleTouchStart = (e, item, fromListIndex) => {
        handleDragStart(item, fromListIndex);
    };

    const handleTouchEnd = (e, toListIndex) => {
        handleDrop(toListIndex);
    };

    // Styles (Inline)
    const styles = {
        container: {
            display: "flex",
            justifyContent: "space-around",
            padding: "20px",
            gap: "20px",
        },
        droppableArea: {
            border: "2px dashed #ccc",
            padding: "20px",
            width: "30%",
            minHeight: "200px",
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            transition: "background-color 0.3s ease",
        },
        droppableAreaHover: {
            backgroundColor: "#e0f7fa",
        },
        draggableItem: {
            backgroundColor: "#90caf9",
            padding: "10px 15px",
            margin: "5px 0",
            borderRadius: "4px",
            cursor: "grab",
            textAlign: "center",
            fontWeight: "bold",
            userSelect: "none",
        },
    };

    return (
        <div style={styles.container}>
            {lists.map((list, listIndex) => (
                <div
                    key={listIndex}
                    style={{
                        ...styles.droppableArea,
                    }}
                    onDragOver={handleDragOver} // Enable dropping for desktop
                    onDrop={() => handleDrop(listIndex)} // Drop handler
                >
                    <h4>Div {listIndex + 1}</h4>
                    {list.map((item, itemIndex) => (
                        <div
                            key={itemIndex}
                            draggable
                            onDragStart={() => handleDragStart(item, listIndex)} // Drag start for desktop
                            onTouchStart={(e) =>
                                handleTouchStart(e, item, listIndex)
                            } // Touch start for mobile
                            onTouchEnd={(e) => handleTouchEnd(e, listIndex)} // Touch end for mobile
                            style={{
                                ...styles.draggableItem,
                            }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default DragDropMobile;
