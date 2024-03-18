import "../css/TimeLine.css";

export default function TLRight(props) {
    const utcTimeString = props.data.createdAt;
    const utcTime = new Date(utcTimeString);

    // Get the UTC time in milliseconds
    const utcMilliseconds = utcTime.getTime();


    // Calculate the Indian time by adding the offset
    const indianTimeMilliseconds = utcMilliseconds;

    // Create a new Date object for Indian time
    const indianTime = new Date(indianTimeMilliseconds);

    // Format the Indian time as a string
    const options = {
        timeZone: "Asia/Kolkata",
        hour12: true,
        hour: "numeric",
        minute: "numeric",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    };

    const indianTimeString = indianTime.toLocaleString("en-IN", options);
    return (
        <div className="TLContainer right">
            <div class="TLContent">
                <h3>{indianTimeString}</h3>
                <h5>{props.data.name}</h5>
                <p>{props.data.description}</p>
            </div>
        </div>
    );
}