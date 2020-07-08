import React from "react";
import s from "./Posts.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>

            <img src='https://a.d-cd.net/f815abas-960.jpg'/>
            {props.message}
            <div>
                <button>like</button>
            </div>
            <div>
                Likes Count {props.likesCount}
            </div>
        </div>

    )
}

export default Post;