import { useParams } from "react-router-dom";

export default function DetailPage(){
    
    const eventdetail = [
        {uid: "1", time:"Coldplay will play at 10 am"},
        {uid: "2", time:"Queen will play at 12 noon without Freddy"},
        {uid: "3", time:"Van Morrison will play at 2pm"},
        {uid: "4", time:"Toto will play at 3pm"},
        {uid: "5", time:"Billie Eilish will play at 2pm"},
        {uid: "6", time:"lady Gaga will play at 4 pm"},
    ]

    const {eventId} = useParams();
    const event = eventdetail.find((event)=> event.uid === eventId);
    
    
    return(
        <div>
            The artist will perform : {event.time};
        </div>
    )
}