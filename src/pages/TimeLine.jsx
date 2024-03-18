import NavBar from "../components/NavBar";
import "../css/TimeLine.css";

export default function TimeLine() {

    return (
        <div className="TLOuterContainer">
            <div className="TLCaseDetails">
                <h2 className="TLCaseTitle">Case Title Here</h2>
                <h4>Case Place</h4>
                <div className="TLOverlayOuter">
                    <div className="TLOverlay">
                        <div className="TLCaseDescription"> Case Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam earum voluptas velit dicta cupiditate praesentium dolore doloremuia, laborum quos animi culpa? Ipsum obcaecati in delectus, eius earum deserunt atque vel excepturi fugiat modi ad fuga, consectetur blanditiis et voluptatibus rerum. Quod officia commodi qui quidem. </div>
                    </div>
                    <div className="TLCaseImage">
                        <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    </div>
                </div>
                <h4>Case Date</h4>
            </div>
            <div class="MainTimeLine">
                <div class="TLContainer left">
                    <div class="TLContent">
                        <h3>2017</h3>
                        <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                    </div>
                </div>
                <div class="TLContainer right">
                    <div class="TLContent">
                        <h3>2016</h3>
                        <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}