import { createSelector } from "@reduxjs/toolkit";
import { postsSelectors } from "../features/posts/postsSlice";

export const selectAllPosts =
  postsSelectors.selectAll;

export const selectInstagramPosts = createSelector(
  [selectAllPosts],
  (posts) =>
    posts.filter(
      (post) => post.platform === "Instagram"
    )
);