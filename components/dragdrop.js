import React, { useEffect, useRef } from "react";

const DragDropComponent = () => {
  const containersRef = useRef([]);
  const draggablesRef = useRef([]);

  useEffect(() => {
    const containers = containersRef.current;
    const draggables = draggablesRef.current;

    let activeElement = null;
    let placeholder = null;

    // Create a placeholder element for drag and drop
    function createPlaceholder() {
      if (!placeholder) {
        placeholder = document.createElement("div");
        placeholder.classList.add("placeholder");
        placeholder.textContent = "Drop here";
      }
    }

    // Helper function to get the correct insertion point for the dragged item
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

    // Event listeners for draggable items
    draggables.forEach((draggable) => {
      draggable.addEventListener("touchstart", (e) => {
        draggable.classList.add("dragging");
        activeElement = draggable;
        createPlaceholder();
        e.preventDefault(); // Prevent scroll behavior during touch
      });

      draggable.addEventListener("touchmove", (e) => {
        const touch = e.touches[0];
        draggable.style.position = "absolute";
        draggable.style.left = `${touch.clientX}px`;
        draggable.style.top = `${touch.clientY}px`;
        draggable.style.width = "300px";

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
          activeElement.style.width = "";
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

    // Event listeners for containers
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
  }, []);

  return (
    <>
      <style jsx>{`
        .draggable {
          padding: 1rem;
          background-color: white;
          border: 1px solid black;
          cursor: grab;
        }

        .draggable.dragging {
          opacity: 0.8;
          background-color: skyblue;
          cursor: grabbing;
        }

        .draggable,
        .container {
          touch-action: none;
        }

        .placeholder {
          border: 2px dashed #666;
          padding: 1rem;
          background-color: #f0f0f0;
          opacity: 0.5;
        }

        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 1rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          min-height: 300px;
        }

        .container.bg-indigo-500 {
          background-color: #6366f1;
        }

        .container.bg-orange-500 {
          background-color: #fb923c;
        }

        .container.bg-green-500 {
          background-color: #22c55e;
        }

        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }

        .space-x-2 {
          margin-left: 8px;
          margin-right: 8px;
        }

        .w-4/5 {
          width: 80%;
        }

        .h-[300px] {
          height: 300px;
        }

        .mt-10 {
          margin-top: 2.5rem;
        }

        .flex {
          display: flex;
        }

        .items-center {
          align-items: center;
        }

        .justify-center {
          justify-content: center;
        }

        .shadow-lg {
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      <div className="mx-auto mt-10 space-x-2 w-4/5 flex items-center justify-center">
        <div
          ref={(el) => (containersRef.current[0] = el)}
          className="flex flex-col container bg-indigo-500"
        >
          <p ref={(el) => (draggablesRef.current[0] = el)} className="draggable m-1 w-full" draggable="true">
            Item 1
          </p>
          <p ref={(el) => (draggablesRef.current[1] = el)} className="draggable m-1 w-full" draggable="true">
            Item 2
          </p>
        </div>
        <div
          ref={(el) => (containersRef.current[1] = el)}
          className="flex flex-col container bg-orange-500"
        >
          <p ref={(el) => (draggablesRef.current[2] = el)} className="draggable m-1 w-full" draggable="true">
            Item 3
          </p>
          <p ref={(el) => (draggablesRef.current[3] = el)} className="draggable m-1 w-full" draggable="true">
            Item 4
          </p>
        </div>
        <div
          ref={(el) => (containersRef.current[2] = el)}
          className="flex flex-col container bg-green-500"
        >
          <p ref={(el) => (draggablesRef.current[4] = el)} className="draggable m-1 w-full" draggable="true">
            Item 5
          </p>
          <p ref={(el) => (draggablesRef.current[5] = el)} className="draggable m-1 w-full" draggable="true">
            Item 6
          </p>
        </div>
      </div>
    </>
  );
};

export default DragDropComponent;
