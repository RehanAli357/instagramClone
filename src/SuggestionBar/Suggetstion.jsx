import react from "react";
import '../SuggestionBar/suggestion.css';
import SuggestionData from "../UserData/SuggestionData";

const Suggestion = () => {
    const UserSuggestion = (data) => {
        return (
            <react.Fragment>
                <div className="userData">
                    <div className="userimg">
                        <img src={data.img} alt={data.username} />
                    </div>
                    <div className="username">
                        <b>{data.username}</b>
                        <p>{data.name}</p>
                    </div>
                    <div className="accSwitch"><p>{data.state}</p></div>
                </div>
            </react.Fragment>
        );
    }
    return (
        <react.Fragment>
            <div className="suggestion">
                <div className="suggestionCard">
                    <div className="suggestHeading">
                        <p>Suggestion For You</p>
                        <p>See All</p>
                    </div>
                    <div className="allSuggestion">
                    {
                        SuggestionData.map(UserSuggestion)
                    }
                    </div>
                    <div className="footer">
                        <div className="footerbtn">
                            <p>About</p>
                            <p>Help</p>
                            <p>Press</p>
                            <p>API</p>
                            <p>Jobs</p>
                            <p>Privacy</p>
                            <p>Term</p>
                            <p>Location</p>
                        </div>
                        <div className="lang">
                            <p>Language</p>
                        </div>
                        <div className="trademark">
                            <p>
                                c 2020 INSTAGRAM FROM META
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </react.Fragment>
    );
}
export default Suggestion;