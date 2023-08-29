import "./Events.css";

import { useContext, useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import EarthClouds from "../home/components/EarthClouds";
import EventComp from "./components/EventComp";
import { ThemeContext } from "../../context/theme-context";
import searchIcon from "../../assets/icons8-search-50.png";
import EventBalloon1 from "./components/EventBalloon1";
import EventBalloon2 from "./components/EventBalloon2";
import { DocumentData, collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase-config";
import FilterButton from "./components/FilterButton";

function Events() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [eventsLoading, setEventsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [docs, setDocs] = useState<DocumentData[] | null>(null);
  const [filteredEvents, setFilteredEvents] = useState<DocumentData[]>([]);

  useEffect(() => {
    console.log("filtering");
    const filtered =
      docs?.filter((data) => {
        if (
          filter === "All" &&
          data.name.toLowerCase().includes(search.toLowerCase())
        ) {
          return true;
        } else if (
          data.domains.includes(filter) &&
          data.name.includes(search)
        ) {
          return true;
        } else if (filter === "Others") {
          return !data.domains.some(
            (v: string) =>
              ["design", "web", "app", "ai/ml"].indexOf(v.toLowerCase()) !== -1
          ) && data.name.includes(search);
        } else return false;
      }) ?? [];
    setFilteredEvents([...filtered]);
  }, [docs, filter, search]);
  useEffect(() => {
    setEventsLoading(true);
    const unsub = onSnapshot(collection(db, "events"), (snapshot) => {
      setDocs(
        snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
      setEventsLoading(false);
    });
    return () => {
      console.log(docs);
      setEventsLoading(false);
      unsub();
    };
  }, []);

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const handleClick = (e: any) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <div className="Events_header">
        <EarthClouds theme={theme} id="Events_cloud" />
        <div className="events_balloon">
          <EventBalloon1 />
          <EventBalloon2 />
        </div>
        <div style={{ margin: "90px" }}></div>
        <p>Events</p>
        <p className="Events_header_desc">let's do cool things that matter</p>
      </div>
      <div className="events_section">
        <div className="events_searchbar">
          <label htmlFor="" className="events_searchbar_label">
            <img src={searchIcon} alt="icon" style={{ scale: "50%" }} />
          </label>
          <input
            type="search"
            placeholder="search"
            className="events_searchbar_input"
            onChange={handleSearch}
          />
        </div>
        <div className="events_filter_container">
          <div className="events_filter">
            <FilterButton
              text={"All"}
              id="events"
              selected={filter === "All" ? true : false}
              onClick={handleClick}
            />
            <FilterButton
              text={"Design"}
              id="events"
              selected={filter === "Design" ? true : false}
              onClick={handleClick}
            />
            <FilterButton
              text={"Web"}
              id="events"
              selected={filter === "Web" ? true : false}
              onClick={handleClick}
            />
            <FilterButton
              text={"App"}
              id="events"
              selected={filter === "App" ? true : false}
              onClick={handleClick}
            />
            <FilterButton
              text={"AI/ML"}
              id="events"
              selected={filter === "AI/ML" ? true : false}
              onClick={handleClick}
            />
            <FilterButton
              text={"Others"}
              id="events"
              selected={filter === "Others" ? true : false}
              onClick={handleClick}
            />
          </div>
        </div>
        {filteredEvents && filteredEvents.length > 0 ? (
          <div className="events_container">
            {filteredEvents.map((evnt, index) => (
              <EventComp key={index} theme={theme} eventData={evnt} />
            ))}
          </div>
        ) : (
          <div className="events_no_results">
            <h3>{eventsLoading ? `Loading Events` : `No Results Found`}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Events;
