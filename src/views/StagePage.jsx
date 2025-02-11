import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function StagePage(){

    const stageevents = [
        {stageid : "1", eventtext:"Coldplay", uid:"1", category:"Pop"},
        {stageid : "1", eventtext:"Queen", uid:"2",category:"Rock"},
        {stageid : "1", eventtext:"Van Morrison", uid:"3",category:"Folk"},
        {stageid : "1", eventtext:"Toto", uid:"4",category:"Pop"},
        {stageid : "2", eventtext:"Billie Eilish", uid:"5",category:"Pop"},
        {stageid : "2", eventtext:"Lady Gaga", uid: "6",category:"Pop"} 
    ];


    const{ stageId } = useParams(); //Get stageId from Link
    const [searchTerm, setSearchTerm]= useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');




    //Get events that matches stageId and id from link
    //Result: an array of stageevents called "events"
    const events = stageevents.filter((event,) => stageId === event.stageid);
    const filteredEvents = events.filter(event => {
        const matchesSearch = event.eventtext.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
        return matchesSearch && matchesCategory;
    })

    return (
        <div>
            Search by artist:
            <input type= "text" id="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for artist"/>

            Filter by category:
            <select id="category" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="all">All</option>
                <option value="Pop">Pop</option>
                <option value="Rock">Rock</option>
                <option value="Folk">Folk</option>

            </select>
            <h2>List of Events on stage {stageId}</h2>
            {filteredEvents.map((event)=>(
                <div key={event.id}>
                    <Link to={`/musicalfestival/detailpage/${event.uid}`}>{event.eventtext}</Link>
                </div>
            ))}

        </div>
    );
}