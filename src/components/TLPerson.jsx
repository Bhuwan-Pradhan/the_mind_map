import "../css/TimeLine.css";

export default function TLClue() {

    return (
        <div className="TLOuterContainer">
            <div className="TLPersonDetails">
                <h2 className="TLPersonTitle">Person Title Here</h2>
                <h4>Person Date</h4>
                <h4>Person Ocupation</h4>
                <div className="TLOverlayOuter">
                    <div className="TLOverlay">
                        <div className="TLPersonDescription"> Case Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam earum voluptas velit dicta cupiditate praesentium dolore doloremuia, laborum quos animi culpa? Ipsum obcaecati in delectus, eius earum deserunt atque vel excepturi fugiat modi ad fuga, consectetur blanditiis et voluptatibus rerum. Quod officia commodi qui quidem. </div>
                    </div>
                    <div className="TLPersonImage">
                        <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    </div>
                </div>
            </div>
        </div>
    );
}