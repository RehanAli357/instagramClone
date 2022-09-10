import react from "react";
import heart from '../Images/heart.png';
import '../AllPost/post.css';
import PostData from "../UserData/PostData";
import Chat from '../Images/chat.png';
import Share from '../Images/send.png';
import Save from '../Images/save.png';
const Post = () => {
    const AllPost = (data) => {
        return (
            <react.Fragment>
                <div className="postCard">
                    <div className="postheader">
                        <div className="headone">
                            <img src={data.img} alt={data.username} />
                            <b>{data.username}</b>
                        </div>
                        <div className="headtwo">
                            <strong>...</strong>
                        </div>
                    </div>
                    <div className="postsec">
                        <img src={data.post} alt={data.username} />
                    </div>
                    <div className="posfooter">
                        <div className="footerone">
                            <img src={heart} alt="heart" />
                            <img src={Chat} alt="Chat" />
                            <img src={Share} alt="heart" />

                        </div>
                        <div className="footertwo">
                            <img src={Save} alt="save" />
                        </div>
                        <div className="footerlikes">
                            <b>{data.likes} likes</b>
                        </div>
                        <div className="footerusrnm">
                            <strong>{data.username}</strong>
                            <p>{data.caption}</p>
                        </div>
                    </div>
                </div>
            </react.Fragment>
        );
    }
    return (
        <react.Fragment>
            <div className="postCollection">
                {
                    PostData.map(AllPost)
                }

            </div>
        </react.Fragment>
    );
}

export default Post;