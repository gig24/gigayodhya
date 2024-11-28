import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image';
import styles from '../styles/Fullpackage.module.css';

const DragDropOverlay = ({ unassignedPlaces, tempItinerary, saveChanges, closeOverlay }) => {
  const containersRef = useRef([]);
  const draggablesRef = useRef([]);
  const [activeElement, setActiveElement] = useState(null);
  const [placeholder, setPlaceholder] = useState(null);
  const [draggingElement, setDraggingElement] = useState(null);

  const handleDragEnd = () => {
    if (activeElement && placeholder && placeholder.parentNode) {
      // Re-insert the dragged item in the correct location
      placeholder.parentNode.insertBefore(activeElement, placeholder);
      placeholder.remove();

      // Reset the dragged element's style
      activeElement.style.position = "static";
      activeElement.style.left = "";
      activeElement.style.top = "";
      activeElement.style.width = "";

      // Clean up the state
      setActiveElement(null);
      setPlaceholder(null);
      setDraggingElement(null);
    }
  };

  const handleDragStart = (place, section, index) => {
    setActiveElement(draggablesRef.current[index]);
    createPlaceholder();
    setDraggingElement(draggablesRef.current[index]);
  };

  const createPlaceholder = () => {
    if (!placeholder) {
      const newPlaceholder = document.createElement("div");
      newPlaceholder.classList.add("placeholder");
      newPlaceholder.textContent = "Drop here";
      setPlaceholder(newPlaceholder);
    }
  };

  const getDragAfterElement = (container, y) => {
    const draggableElements = [
      ...container.querySelectorAll(".draggable:not(.dragging)"),
    ];

    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  };

  const handleDrop = (e, section, index) => {
    e.preventDefault();
    const draggedElement = draggingElement;
    const targetContainer = e.target.closest("[data-drop-target]");

    if (targetContainer && draggedElement) {
      if (section === "unassigned") {
        // Logic to move the item to the unassigned section
        targetContainer.appendChild(draggedElement);
      } else if (section === "itinerary") {
        // Logic to move the item to the itinerary day section
        const afterElement = getDragAfterElement(targetContainer, e.clientY);
        if (afterElement == null) {
          targetContainer.appendChild(draggedElement);
        } else {
          targetContainer.insertBefore(draggedElement, afterElement);
        }
      }
      handleDragEnd();
    }
  };

  useEffect(() => {
    const containers = containersRef.current;
    const draggables = draggablesRef.current;

    if (draggables.length > 0) {
      draggables.forEach((draggable) => {
        if (draggable) {
          draggable.addEventListener("touchstart", (e) => {
            draggable.classList.add("dragging");
            setActiveElement(draggable);
            createPlaceholder();
            e.preventDefault();
            setDraggingElement(draggable); // Set dragging element
          });

          draggable.addEventListener("touchmove", (e) => {
            const touch = e.touches[0];
            draggable.style.position = "absolute";
            draggable.style.left = `${touch.clientX}px`;
            draggable.style.top = `${touch.clientY}px`;
            draggable.style.width = "auto"; // Fix width resizing issue

            const potentialContainer = document
              .elementFromPoint(touch.clientX, touch.clientY)
              .closest(".container");

            if (potentialContainer && placeholder) {
              const afterElement = getDragAfterElement(
                potentialContainer,
                touch.clientY
              );
              if (afterElement) {
                potentialContainer.insertBefore(placeholder, afterElement);
              } else {
                potentialContainer.appendChild(placeholder);
              }
            }
            e.preventDefault();
          });

          draggable.addEventListener("touchend", (e) => {
            draggable.classList.remove("dragging");
            handleDragEnd();
            e.preventDefault();
          });

          // Desktop dragstart / dragend events
          draggable.addEventListener("dragstart", () => {
            draggable.classList.add("dragging");
          });

          draggable.addEventListener("dragend", () => {
            draggable.classList.remove("dragging");
            handleDragEnd();
          });
        }
      });
    }

    if (containers.length > 0) {
      containers.forEach((container) => {
        if (container) {
          container.addEventListener("dragover", (e) => {
            e.preventDefault();
            const afterElement = getDragAfterElement(container, e.clientY);
            const draggable = document.querySelector(".dragging");
            if (afterElement == null) {
              container.appendChild(draggable);
            } else {
              container.insertBefore(draggable, afterElement);
            }
          });
        }
      });
    }
  }, [unassignedPlaces, tempItinerary, activeElement, placeholder, draggingElement]);

  return (
    <div className={styles.overlay}>
      <div className={styles.overlayContent}>
        <h6 className="text-muted text-center my-2 mb-3">Drag and Drop the Places, Click on places to know more</h6>

        <div className="d-flex w-100 flex-column" style={{ height: "90%" }}>
          {/* Unassigned Places Section */}
          <div className={`d-flex flex-column w-100 ${styles.unassignedcontainer}`}>
            <h6 className="m-0" style={{ paddingLeft: "15px" }}>More Places To Explore</h6>

            <div
              ref={(el) => containersRef.current.push(el)}
              onDragOver={(e) => e.preventDefault()} // Enable dragging over
              onDrop={(e) => handleDrop(e, 'unassigned', -1)}
              data-drop-target="true"
              className={styles.unassignedPlacesSection}
            >
              {unassignedPlaces.map((place, index) => (
                <div
                  key={index}
                  ref={(el) => draggablesRef.current.push(el)}
                  draggable
                  onTouchStart={() => handleDragStart(place, 'unassigned', index)}  // Start dragging on touch
                  onMouseDown={() => handleDragStart(place, 'unassigned', index)}  // Start dragging on mouse down
                  onTouchEnd={handleDragEnd}  // End drag on touch
                  onMouseUp={handleDragEnd}   // End drag on mouse up
                  className={`${styles.itinerarycirclediv} draggable`}
                >
                  <div style={{ width: "70px", height: "70px", overflow: "hidden", background: "grey" }}>
                    <Image src={place.img} alt={place.name} width={80} height={80} loading="lazy" objectFit="cover" />
                  </div>
                  <h6 className={`mx-2 text-center ${styles.itinerarycircledivpara}`}>{place.name}</h6>
                </div>
              ))}
            </div>
          </div>

          {/* Day Sections */}
          <div className={`w-100 ${styles.daysectioncontainer}`}>
            {tempItinerary.map((day, index) => (
              <div className="mt-3" key={index}>
                <h5 style={{ paddingLeft: "15px", margin: "0" }}>{day.day}</h5>
                <div
                  ref={(el) => containersRef.current.push(el)}
                  onDragOver={(e) => e.preventDefault()} // Enable dragging over
                  onDrop={(e) => handleDrop(e, 'itinerary', index)}
                  className={styles.daySection}
                >
                  {day.places.map((place, placeIndex) => (
                    <div
                      key={placeIndex}
                      ref={(el) => draggablesRef.current.push(el)}
                      draggable
                      onDragStart={() => handleDragStart(place, 'itinerary', index)} // Start dragging
                      onTouchStart={() => handleDragStart(place, 'itinerary', index)} // Touch start
                      onTouchEnd={handleDragEnd}
                      onMouseUp={handleDragEnd}
                      className={`${styles.itinerarycirclediv} draggable`}
                    >
                      <div style={{ width: "70px", height: "70px", overflow: "hidden", background: "grey" }}>
                        <Image src={place.img} alt={place.name} width={80} height={80} loading="lazy" objectFit="cover" />
                      </div>
                      <h6 className={`mx-2 text-center ${styles.itinerarycircledivpara}`}>{place.name}</h6>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      
      </div>
      <div className={styles.overlayBottom}>
          <button onClick={closeOverlay} className="btn btn-secondary">Close</button>
          <button onClick={saveChanges} className="btn btn-primary">Save Changes</button>
        </div>
    </div>
  );
};

export default DragDropOverlay;
