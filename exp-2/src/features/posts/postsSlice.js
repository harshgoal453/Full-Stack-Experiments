import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";

const postsAdapter = createEntityAdapter();

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async () => {
    return [
      {
        id: 1,
        title: "Summer Sale Campaign",
        platform: "Instagram",
      },
      {
        id: 2,
        title: "Redux Toolkit Tutorial",
        platform: "Facebook",
      },
      {
        id: 3,
        title: "AI Trends 2026",
        platform: "Twitter",
      },
      {
        id: 4,
        title: "New Product Launch",
        platform: "Instagram",
      },
      {
        id: 5,
        title: "Weekend Offer",
        platform: "Facebook",
      },
      {
        id: 6,
        title: "Tech Conference",
        platform: "LinkedIn",
      },
      {
        id: 7,
        title: "React Workshop",
        platform: "Instagram",
      },
      {
        id: 8,
        title: "Company Hiring",
        platform: "LinkedIn",
      },
    ];
  }
);

const postsSlice = createSlice({
  name: "posts",

  initialState: postsAdapter.getInitialState({
    loading: false,
    error: null,
  }),

  reducers: {
    addPost: postsAdapter.addOne,
    updatePost: postsAdapter.updateOne,
    deletePost: postsAdapter.removeOne,
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        postsAdapter.setAll(state, action.payload);
      })

      .addCase(fetchPosts.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch posts";
      });
  },
});

export const { addPost, updatePost, deletePost } =
  postsSlice.actions;

export default postsSlice.reducer;

export const postsSelectors =
  postsAdapter.getSelectors((state) => state.posts);