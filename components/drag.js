import React, { useState, useRef, useEffect } from "react";

const DragDropItinerary = () => {
  const [itinerary, setItinerary] = useState([
    {
      day: "Day 1",
      places: [
        {
          pid: 1,
          name: "Ram Mandir",
          img: "https://www.aljazeera.com/wp-content/uploads/2024/01/AP24021340859855-1705847861.jpg?resize=1920%2C1440",
          link: "/blogs/ram-mandir",
        },
        {
          pid: 3,
          name: "Dashrath Mahal",
          img: "https://www.visitayodhyadham.com/wp-content/uploads/2024/01/dashrath-mahal-visit-ayodhya-dham-e1704393540692.jpg",
          link: "/blogs/dashrath-mahal",
        },
      ],
    },
    {
      day: "Day 2",
      places: [
        {
          pid: 5,
          name: "Saryu River Ghats",
          img: "https://rishikeshdaytour.com/blog/wp-content/uploads/2023/09/Saryu-Ghat-Ayodhya-India.jpg",
          link: "/blogs/saryu-ghat",
        },
      ],
    },
  ]);

  const [unassigned, setUnassigned] = useState([
    {
      pid: 6,
      name: "Nageshwarnath Temple",
      img: "https://ayodhyadhaam.in/images/NAGESHWAR%20NATH%20TEMPLE.jpeg",
      link: "/blogs/nageshwarnath-temple",
    },
    {
      pid: 7,
      name: "Naya Ghat",
      img: "https://cdnimg.prabhatkhabar.com/wp-content/uploads/Prabhatkhabar/2024-01/1be85ee3-650e-476a-94db-dc94af5a8c2c/WhatsApp_Image_2024_01_03_at_2_37_43_PM__2_.jpeg",
      link: "/blogs/naya-ghat",
    },
  ]);

  const containersRef = useRef([]);
  const draggablesRef = useRef([]);
  const activeItemRef = useRef(null);

  useEffect(() => {
    const containers = containersRef.current;

    containers.forEach((container) => {
      container.addEventListener("dragover", (e) => {
        e.preventDefault();
        const afterElement = getDragAfterElement(container, e.clientY);
        const activeItem = activeItemRef.current;

        if (activeItem) {
          if (afterElement == null) {
            container.appendChild(activeItem);
          } else {
            container.insertBefore(activeItem, afterElement);
          }
        }
      });

      container.addEventListener("drop", (e) => {
        e.preventDefault();
        const activeItem = activeItemRef.current;

        if (activeItem) {
          const newDayIndex = container.dataset.dayIndex;
          const itemData = JSON.parse(activeItem.dataset.item);

          if (newDayIndex === "unassigned") {
            setUnassigned((prev) => [...prev, itemData]);
          } else {
            setItinerary((prev) =>
              prev.map((day, index) => {
                if (index === parseInt(newDayIndex)) {
                  return { ...day, places: [...day.places, itemData] };
                }
                return day;
              })
            );
          }

          activeItemRef.current.remove();
          activeItemRef.current = null;
        }
      });
    });
  }, [itinerary, unassigned]);

  const handleDragStart = (e, item) => {
    activeItemRef.current = e.target;
    e.target.classList.add("dragging");

    // Remove from original list
    const itemData = JSON.parse(e.target.dataset.item);
    const { dayIndex, placeIndex } = itemData;

    if (dayIndex === "unassigned") {
      setUnassigned((prev) => prev.filter((_, i) => i !== placeIndex));
    } else {
      setItinerary((prev) =>
        prev.map((day, index) =>
          index === parseInt(dayIndex)
            ? {
                ...day,
                places: day.places.filter((_, i) => i !== placeIndex),
              }
            : day
        )
      );
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
          return { offset, element: child };
        }
        return closest;
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  };

  return (
    <div className="flex">
      {itinerary.map((day, dayIndex) => (
        <div
          key={dayIndex}
          className="container"
          data-day-index={dayIndex}
          ref={(el) => (containersRef.current[dayIndex] = el)}
        >
          <h3>{day.day}</h3>
          {day.places.map((place, placeIndex) => (
            <div
              key={place.pid}
              className="draggable"
              draggable="true"
              onDragStart={(e) =>
                handleDragStart(e, { ...place, dayIndex, placeIndex })
              }
              data-item={JSON.stringify({
                ...place,
                dayIndex,
                placeIndex,
              })}
            >
              {place.name}
            </div>
          ))}
        </div>
      ))}
      <div
        className="container"
        data-day-index="unassigned"
        ref={(el) => (containersRef.current[itinerary.length] = el)}
      >
        <h3>Unassigned</h3>
        {unassigned.map((place, placeIndex) => (
          <div
            key={place.pid}
            className="draggable"
            draggable="true"
            onDragStart={(e) =>
              handleDragStart(e, { ...place, dayIndex: "unassigned", placeIndex })
            }
            data-item={JSON.stringify({
              ...place,
              dayIndex: "unassigned",
              placeIndex,
            })}
          >
            {place.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragDropItinerary;
