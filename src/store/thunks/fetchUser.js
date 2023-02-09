import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL } from "../../Constants";

/**
 * The below created thunk has three properties automatically assigned to it:
 * -> fetchUsers.pending
 * -> fetchUsers.fullfilled
 * -> fetchUsers.rejected
 */
const fetchUsers = createAsyncThunk('usersFetch', async () => {
  const res = await axios.get(BASE_URL+"/user/all")

  return res.data
});

export {fetchUsers}