import "../css/componentsCss/CaseContainerHome.css"
export default function CaseContainerHome() {
    return (
        <div id="OuterCaseContainer">
            <a href="/addCase" className="addCase" >Add Case</a>
            <section class="card-section">
        <div class="card">
            <div class="flip-card">
                <div class="flip-card__container">
                    <div class="card-front">
                        <div class="card-front__tp card-front__tp--city">

                       <h2 class="card-front__heading">
                       Choori ho gayi hai
                        </h2>
                        </div>

                        <div class="card-front__bt">
                            <p class="card-front__text-view card-front__text-view--city">
                            <span className="caseDate">13/01/2002</span>
                            <span className="casePlace">Jamshedpur, Jharkhand</span>
                            <span className="view__case">View Case</span>
                            </p>
                        </div>
                    </div>
                    <div class="card-back">
                        <img class="img__container"src="https://www.baezlawfirm.com/wp-content/uploads/2021/05/shutterstock_644215882-200x200.png" alt=""/>
                    </div>
                </div>
            </div>

            <div class="inside-page">
                <div class="inside-page__container">
                    <h3 class="inside-page__heading inside-page__heading--city">
                    Choori ho gayi hai
                    </h3>
                    <p class="inside-page__text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum corporis amet, atque labore quod maxime fugit iste in quisquam, molestiae tempore repudiandae! Quaerat vel assumenda amet, quod sed provident aliquid.....
                    </p>
                    <a href="#" class="inside-page__btn inside-page__btn--city">Open Case</a>
                </div>
            </div>
        </div>
    </section>



        {/* <div className="CaseContainerMainOuter">
            <div className="CaseBrief">
                <div className="CaseNameDiv">
                    <p>Choori ho gayi hai</p>
                </div>
                <div className="CaseDescriptionDiv">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum corporis amet, atque labore quod maxime fugit iste in quisquam, molestiae tempore repudiandae! Quaerat vel assumenda amet, quod sed provident aliquid.....</p>
                </div>
            </div>

            <div className="CaseImage">
                <img src="https://www.baezlawfirm.com/wp-content/uploads/2021/05/shutterstock_644215882-200x200.png" alt="Theft Image" />
            </div>

            <div className="AddNewDetailButtons">
                <button class="AddNewDetailButton">
                    Add Clue
                </button>
                <button class="AddNewDetailButton">
                    Add Person
                </button>
            </div>
        </div>
        <div className="CaseContainerMainOuter">
            <div className="CaseBrief">
                <div className="CaseNameDiv">
                    <p>Choori ho gayi hai</p>
                </div>
                <div className="CaseDescriptionDiv">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum corporis amet, atque labore quod maxime fugit iste in quisquam, molestiae tempore repudiandae! Quaerat vel assumenda amet, quod sed provident aliquid.....</p>
                </div>
            </div>

            <div className="CaseImage">
                <img src="https://www.baezlawfirm.com/wp-content/uploads/2021/05/shutterstock_644215882-200x200.png" alt="Theft Image" />
            </div>

            <div className="AddNewDetailButtons">
                <button class="AddNewDetailButton">
                    Add Clue
                </button>
                <button class="AddNewDetailButton">
                    Add Person
                </button>
            </div>
        </div>
        <div className="CaseContainerMainOuter">
            <div className="CaseBrief">
                <div className="CaseNameDiv">
                    <p>Bhopal Gas Trajedy of 1984, Death of 3000 People</p>
                </div>
                <div className="CaseDescriptionDiv">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum corporis amet, atque labore quod maxime fugit iste in quisquam, molestiae tempore repudiandae! Quaerat vel assumenda amet, quod sed provident aliquid.....</p>
                </div>
            </div>

            <div className="CaseImage">
                <img src="https://www.baezlawfirm.com/wp-content/uploads/2021/05/shutterstock_644215882-200x200.png" alt="Theft Image" />
            </div>

            <div className="AddNewDetailButtons">
                <button class="AddNewDetailButton">
                    Add Clue
                </button>
                <button class="AddNewDetailButton">
                    Add Person
                </button>
            </div>
        </div> */}
        </div>
    );
}
