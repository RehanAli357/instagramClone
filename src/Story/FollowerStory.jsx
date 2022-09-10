import react from "react";
import '../Story/story.css';
import AllUserData from "../UserData/AllUserData";

const FollowerStory = () => {
    const Data = (val) => {
        return (
            <react.Fragment>       
                <div className="card">
                <img src={val.img} alt="Dp" />
                <p>{val.username}</p>
            </div>
            </react.Fragment>

        )

    }
    return (
        <react.Fragment>
            <div className="allStory">
                <div className="stories">
                    {
                        AllUserData.map(Data)
                    }
                   
                </div>
            </div>
        </react.Fragment>
    );
}

export default FollowerStory;