import React,{useState} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import './Joke.css';

const Joke=(props)=>{
  const [liked,setLiked]=useState(0);

  const clickHandlerLike =()=>{
    setLiked(liked+1);
  };
  const clickHandlerDislike =()=>{
    setLiked(liked-1);
  };

  return(
    <div>
      <div className="joke">
        <p>{props.joke}</p>
        <p>Likes: {liked}</p>
        <button onClick={clickHandlerLike}>
          <FontAwesomeIcon icon={faThumbsUp} />
        </button>
        <button onClick={clickHandlerDislike}>
          <FontAwesomeIcon icon={faThumbsDown} />
        </button>
      </div>
    </div>
  );
};

export default Joke;