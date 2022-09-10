import react from "react";
import NavBar from "./Navigation/NavBar";
import FollowerStory from "./Story/FollowerStory";
import Suggestion from "./SuggestionBar/Suggetstion";
import Post from "./AllPost/Post";

const App = () => {
    return (
        <react.Fragment>
                <NavBar />
                <div className="instgram" style={{backgroundColor:'aliceblue;'}}>
                    <div className="flexcontent" style={{ display: 'flex', justifyConteny: 'center', alignItem: 'center',flexWrap:'wrap', position:'relative' }}>
                        <FollowerStory />
                        <Suggestion/>
                        <Post/>
                    </div>
                </div>
        </react.Fragment>
    );
}
export default App;
