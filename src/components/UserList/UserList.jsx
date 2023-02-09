import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsers } from "../../store";
import UserItem from "../UserItem/UserItem";
import './UserList.css';

const UserList = () => {
  const dispatch = useDispatch();

  const { data, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const listDisplay = []
  data.map((i) => {
    listDisplay.push(<UserItem key={i.id} name={i.name} id={i.id}/>)
  })

  return <div className="contentBox">{listDisplay}</div>;
};

export default UserList;
