import { apiurl } from "../config.json";
import http from "./httpService";

export const getTotalPosts = () => {
   const apiEndPoint=`${apiurl}/posts/?key=8196190b08906dda0ebf6e6f5d`
 return http.get(`${apiEndPoint}`)
 }
 export const getTotalPages = () => {
    const apiEndPoint=`${apiurl}/pages/?key=8196190b08906dda0ebf6e6f5d`
  return http.get(`${apiEndPoint}`)
  }
  export const getTotalAuthors = () => {
    const apiEndPoint=`${apiurl}/authors/?key=8196190b08906dda0ebf6e6f5d`
  return http.get(`${apiEndPoint}`)
  }
  export const getTotalTags = () => {
    const apiEndPoint=`${apiurl}/tags/?key=8196190b08906dda0ebf6e6f5d`
  return http.get(`${apiEndPoint}`)
  }