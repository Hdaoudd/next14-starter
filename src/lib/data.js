import { Post, User } from "./models";
import { connectToDB } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  try {
    connectToDB();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failde to fetch posts!");
  }
};
export const getPost = async (slug) => {
  try {
    connectToDB();
    const post = Post.findOne({ slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failde to fetch post!");
  }
};

export const getUsers = async () => {
  try {
    connectToDB();
    const user = User.find();
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failde to fetch user!");
  }
};

export const getUser = async (id) => {
  try {
    noStore();
    connectToDB();
    const user = User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failde to fetch users!");
  }
};
