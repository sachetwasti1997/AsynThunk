import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL } from "../../Constants";

/**
 * The below created thunk has three properties automatically assigned to it:
 * -> fetchUsers.pending
 * -> fetchUsers.fullfilled
 * -> fetchUsers.rejected
 */
const fetchAlbums = createAsyncThunk("albumsFetch", async (userId) => {
  const res = await axios.get(BASE_URL + "/album/user/"+userId);

  return res.data;
});

export { fetchAlbums };
