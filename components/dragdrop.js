import React, { useState } from "react";

const DragDropMobileFriendly = () => {
    const [lists, setLists] = useState([
        ["Item 1", "Item 2", "Item 3"], // List 1
        ["Item 4", "Item 5", "Item 6"], // List 2
        ["Item 7", "Item 8", "Item 9"], // List 3
    ]);

    const [draggedItem, setDraggedItem] = useState(null); // Item being dragged
    const [sourceListIndex, setSourceListIndex] = useState(null); // Original list of the dragged item

    const handleTouchStart = (item, listIndex) => {
        setDraggedItem(item);
        setSourceListIndex(listIndex);
    };

    const handleTouchEnd = (targetListIndex) => {
        if (draggedItem === null || sourceListIndex === null) return;

        const newLists = [...lists];
        // Remove item from its source list
        newLists[sourceListIndex] = newLists[sourceListIndex].filter(
            (item) => item !== draggedItem
        );
        // Add item to the target list
        newLists[targetListIndex] = [...newLists[targetListIndex], draggedItem];

        // Reset state
        setLists(newLists);
        setDraggedItem(null);
        setSourceListIndex(null);
    };

    const handleDragOver = (e) => {
        e.preventDefault(); // Prevent default behavior for desktop drag-and-drop
    };

    const handleDrop = (targetListIndex) => {
        handleTouchEnd(targetListIndex); // Reuse logic for drop on desktop
    };

    // Styles
    const styles = {
        container: {
            display: "flex",
            justifyContent: "space-between",
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
                    style={styles.droppableArea}
                    onDragOver={handleDragOver} // Enable drag-over for desktop
                    onDrop={() => handleDrop(listIndex)} // Drop handler for desktop
                >
                    <h4>Div {listIndex + 1}</h4>
                    {list.map((item, itemIndex) => (
                        <div
                            key={itemIndex}
                            draggable // Enable dragging for desktop
                            onDragStart={() =>
                                handleTouchStart(item, listIndex)
                            } // Drag start for desktop
                            onTouchStart={() =>
                                handleTouchStart(item, listIndex)
                            } // Touch start for mobile
                            onTouchEnd={() =>
                                handleTouchEnd(listIndex)
                            } // Touch end for mobile
                            style={styles.draggableItem}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default DragDropMobileFriendly;
