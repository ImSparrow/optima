import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";
export const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [
      {
        id: "p1",
        name: "Jun",
        email: "test@test.com",
        post: "My first Post ever!",
        creatorId: "u1",
      },
      {
        id: "p2",
        name: "Hao",
        email: "test2@test.com",
        post: "This is an amazing site, hope more people will join!",
        creatorId: "u2",
      },
      {
        id: "p3",
        name: "Jun",
        email: "test@test.com",
        post: "Shout out to the other user!",
        creatorId: "u1",
      },
      {
        id: "p4",
        name: "Jun",
        email: "test@test.com",
        post: "I love Reactjs!",
        creatorId: "u1",
      },
      {
        id: "p5",
        name: "Jun",
        email: "test@test.com",
        post: "hmm... I think this site should have multiple colour layout.",
        creatorId: "u1",
      },
    ],
    users: [
      {
        id: "u1",
        name: "Jun",
        email: "test@test.com",
        posts: ["p1", "p2", "p4", "p5"],
      },
      {
        id: "u2",
        name: "Hao",
        email: "test2@test.com",
        posts: ["p3"],
      },
    ],
    comments: [
      {
        id: "c1",
        name: "Hao",
        email: "test2@test.com",
        comment: "I love Reactjs!",
        postId: "p1",
      },
      {
        id: "c2",
        name: "Bob",
        email: "test3@test.com",
        comment: "Another Comment!",
        postId: "p1",
      },
    ],
  },
  reducers: {
    addPost: (state, action) => {
      const findUser = state.posts.filter(
        (post) => post.email === action.payload.email
      );
      if (findUser[0]) {
        state.posts.push({
          ...action.payload,
          creatorId: findUser[0].creatorId,
        });
        const existingUser = state.users.filter(
          (user) => user.id === findUser[0].creatorId
        );
        existingUser[0].posts.push(action.payload.id);
        console.log(existingUser);
      } else {
        const creatorId = uuid();
        state.posts.push({ ...action.payload, creatorId: creatorId });
        state.users.push({
          id: creatorId,
          name: action.payload.name,
          email: action.payload.email,
          posts: [action.payload.id],
        });
      }
    },
    deletePost: (state, action) => {
      const creatorId = action.payload.creatorId;
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
      const user = state.users.filter((user) => user.id === creatorId);
      const index = user[0].posts.find((post) => post.id !== action.payload.id);
      user[0].posts.pop(index);
    },
    addComment: (state, action) => {
      state.comments.push(action.payload);
    },
  },
});
export const postAction = postSlice.actions;
export const postReducer = postSlice.reducer;
