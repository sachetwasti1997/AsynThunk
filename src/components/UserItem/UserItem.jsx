import React, { useState } from "react";

import "./UserItem.css";
import logo from "../../assets/arr.jpg";
import AlbumContainer from "../AlbumDisplay/AlbumContainer";

const UserItem = ({ id, name }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className={"itemCard"}>
        <div>{name}</div>
        <img
          src={logo}
          className={"expand"}
          onClick={() => setExpanded(!expanded)}
        />
      </div>
      {expanded && (
        <div className="itemAlbum">
          <AlbumContainer id={id} />
        </div>
      )}
    </>
  );
};

export default UserItem;
