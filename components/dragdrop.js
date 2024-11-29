import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend"; // Correct import
import Image from "next/image";
import styles from '../styles/Fullpackage.module.css';

const DragDropComponent = () => {
  const [unassignedPlaces, setUnassigned] = useState([
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

  const [tempItinerary, setTempItinerary] = useState([
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
          img: "https://www.visitayodhyadhaam.com/wp-content/uploads/2024/01/dashrath-mahal-visit-ayodhya-dham-e1704393540692.jpg",
          link: "/blogs/dashrath-mahal",
        },
        {
          pid: 2,
          name: "Hanuman Garhi",
          img: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Hanuman_Garhi_Temple%2C_a_major_religious_site_in_Ayodhya_utter_pradesh.jpg",
          link: "/blogs/hanuman-garhi",
        },
        {
          pid: 4,
          name: "Kanak Bhawan",
          img: "https://www.trawell.in/admin/images/upload/599531656Kanak_Bhawan.jpg",
          link: "/blogs/kanak-bhawan",
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
        {
          pid: 8,
          name: "Birla Mandir",
          img: "https://www.nativeplanet.com/photos/325x244x100/2019/01/photo-92-155031-1.jpg",
          link: "/blogs/birla-mandir",
        },
      ],
    },
  ]);

  // Dragging hook
  const useDraggable = (place) => {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: "PLACE",
      item: { ...place },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }));

    return {
      isDragging,
      drag,
    };
  };

  // Drop hook
  const useDroppable = (dayIndex) => {
    const [, drop] = useDrop(() => ({
      accept: "PLACE",
      drop: (item) => handleDrop(item, dayIndex),
    }));

    return drop;
  };

  // Handle the drop logic
  const handleDrop = (place, dayIndex) => {
    if (!place || !place.pid || dayIndex < 0) return; // Check for valid place and dayIndex

    setTempItinerary((prev) => {
      const newItinerary = [...prev];
      const placeIndex = unassignedPlaces.findIndex((p) => p.pid === place.pid);

      if (placeIndex > -1) {
        const updatedUnassignedPlaces = [...unassignedPlaces];
        updatedUnassignedPlaces.splice(placeIndex, 1); // Remove the place from unassigned
        newItinerary[dayIndex].places.push(place); // Add the place to the itinerary

        // Update unassigned places in a functional update to ensure the latest state
        setUnassigned(updatedUnassignedPlaces);
      }
      return newItinerary;
    });
  };

  // Handle removing a place from the itinerary
  const handleRemovePlace = (place, dayIndex) => {
    if (!place || !place.pid || dayIndex < 0) return; // Check for valid place and dayIndex

    setTempItinerary((prev) => {
      const newItinerary = [...prev];
      const placeIndex = newItinerary[dayIndex].places.findIndex(
        (p) => p.pid === place.pid
      );
      if (placeIndex > -1) {
        newItinerary[dayIndex].places.splice(placeIndex, 1);
        setUnassigned((prev) => [...prev, place]); // Add the place back to unassigned
      }
      return newItinerary;
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="d-flex flex-column justify-center">
        <div className="container bg-indigo-500">
          <h4>Unassigned Places</h4>
          {unassignedPlaces.length > 0 ? ( // Check if there are unassigned places
            unassignedPlaces.map((place, index) => {
              const { drag, isDragging } = useDraggable(place);
              return (
                <div
                  key={place.pid}
                  ref={drag}
                  className={`${
                    isDragging ? "opacity-50" : ""
                  } ${styles.itinerarycirclediv}`}
                >
                  <div style={{ width: "70px", height: "70px", overflow: "hidden" }}>
                    <Image src={place.img} alt={place.name} width={80} height={80} loading="lazy" objectFit="cover" />
                  </div>
                  <h6 className={`mx-2 text-center ${styles.itinerarycircledivpara}`}>{place.name}</h6>
                </div>
              );
            })
          ) : (
            <p>No unassigned places available</p>
          )}
        </div>

        {tempItinerary.map((day, dayIndex) => {
          const drop = useDroppable(dayIndex);
          return (
            <div className="mt-3" key={dayIndex}>
              <div
                ref={drop}
                className={`${styles.daySection} bg-gray-200 p-4`}
                style={{ minHeight: "200px" }}
              >
                <h4>{day.day}</h4>
                {day.places.length > 0 ? ( // Ensure places array is valid
                  day.places.map((place) => (
                    <div
                      key={place.pid}
                      className="draggable"
                      onClick={() => handleRemovePlace(place, dayIndex)}
                    >
                      <h6>{place.name}</h6>
                      <Image src={place.img} alt={place.name} width={80} height={80} objectFit="cover" />
                    </div>
                  ))
                ) : (
                  <p>No places assigned</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </DndProvider>
  );
};

export default DragDropComponent;
