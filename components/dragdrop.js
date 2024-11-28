import React, { useState, useEffect, useRef } from "react";

const ItineraryCustomization = ({ packageObject, setPackageObject }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const containersRef = useRef([]);
  const draggablesRef = useRef([]);
  const unassignedPlacesRef = useRef([]);

  useEffect(() => {
    const containers = containersRef.current;
    const draggables = draggablesRef.current;
    const unassignedPlaces = unassignedPlacesRef.current;

    let activeElement = null;
    let placeholder = null;

    function createPlaceholder() {
      if (!placeholder) {
        placeholder = document.createElement("div");
        placeholder.classList.add("placeholder");
        placeholder.textContent = "Drop here";
      }
    }

    function getDragAfterElement(container, y) {
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
    }

    // Handle drag events for each draggable item
    draggables.forEach((draggable) => {
      draggable.addEventListener("touchstart", (e) => {
        draggable.classList.add("dragging");
        activeElement = draggable;
        createPlaceholder();
        e.preventDefault();
      });

      draggable.addEventListener("touchmove", (e) => {
        const touch = e.touches[0];
        draggable.style.position = "absolute";
        draggable.style.left = `${touch.clientX}px`;
        draggable.style.top = `${touch.clientY}px`;

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

      draggable.addEventListener("touchend", () => {
        draggable.classList.remove("dragging");
        if (activeElement && placeholder && placeholder.parentNode) {
          placeholder.parentNode.insertBefore(activeElement, placeholder);
          placeholder.remove();
          activeElement.style.position = "static";
          activeElement.style.left = "";
          activeElement.style.top = "";
        }
        activeElement = null;
        placeholder = null;
      });

      draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging");
      });

      draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging");
      });
    });

    // Event listeners for containers (Days and Unassigned places)
    containers.forEach((container) => {
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
    });

    // Event listener for the "Unassigned Places" container
    unassignedPlaces.forEach((unassignedContainer) => {
      unassignedContainer.addEventListener("dragover", (e) => {
        e.preventDefault();
        const afterElement = getDragAfterElement(unassignedContainer, e.clientY);
        const draggable = document.querySelector(".dragging");
        if (afterElement == null) {
          unassignedContainer.appendChild(draggable);
        } else {
          unassignedContainer.insertBefore(draggable, afterElement);
        }
      });
    });
  }, [packageObject]);

  const handleSave = () => {
    const updatedItinerary = containersRef.current.map((container, index) => {
      const day = packageObject.itinerary[index];
      const places = Array.from(container.querySelectorAll(".draggable")).map(
        (draggable) => {
          const pid = draggable.dataset.pid;
          return day.places.find((place) => place.pid == pid);
        }
      );
      return { ...day, places };
    });

    setPackageObject({
      ...packageObject,
      itinerary: updatedItinerary,
    });
    setIsOverlayVisible(false);
  };

  return (
    <>
      <div id="itinerary" className="itinerary-container">
        <div className="header">
          <h4>Itinerary</h4>
          <button onClick={() => setIsOverlayVisible(true)}>Customize Itinerary</button>
        </div>

        {packageObject.itinerary.map((dayData, index) => (
          <div key={index} className="day-container">
            <div className="day-header">
              <h5>{dayData.day}</h5>
            </div>
            <div
              ref={(el) => (containersRef.current[index] = el)}
              className="day-places-container container"
            >
              {dayData.places.map((place, placeIndex) => (
                <div
                  key={placeIndex}
                  data-pid={place.pid}
                  className="draggable place-item bg-light"
                >
                  <img src={place.img} alt={place.name} width={70} height={70} />
                  <h6>{place.name}</h6>
                </div>
              ))}
            </div>
          </div>
        ))}

        {isOverlayVisible && (
          <div className="overlay">
            <div className="unassigned-places" ref={unassignedPlacesRef}>
              {packageObject.itinerary.flatMap((day) => day.places).map((place) => (
                <div
                  key={place.pid}
                  data-pid={place.pid}
                  className="draggable place-item"
                >
                  <img src={place.img} alt={place.name} width={70} height={70} />
                  <h6>{place.name}</h6>
                </div>
              ))}
            </div>

            <div className="buttons">
              <button onClick={handleSave}>Save Changes</button>
              <button onClick={() => setIsOverlayVisible(false)}>Cancel</button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .draggable {
          cursor: grab;
        }

        .draggable.dragging {
          opacity: 0.5;
          cursor: grabbing;
        }

        .container {
          display: flex;
          flex-direction: column;
        }

        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .unassigned-places {
          display: flex;
          flex-wrap: wrap;
        }

        .buttons {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
        }
      `}</style>
    </>
  );
};

export default ItineraryCustomization;
