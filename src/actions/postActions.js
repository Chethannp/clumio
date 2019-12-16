import { FETCH_POST } from "./types";
import axios from "axios";

let url =
  "https://api.themoviedb.org/3/discover/movie?api_key=3a94078fb34b772a31d9a1348035bed7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";

export const fetchPosts = () => dispatch => {
  // return dispatch => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then(res => res.json())
  //     .then(posts => {
  //       debugger;
  // dispatch({
  //   type: FETCH_POST,
  //   payload: posts
  // });
  //     });
  // };

  axios
    .get(url)
    .then(function(response) {
      // handle
      dispatch(saveFetchedList(response.data));
      // dispatch({
      //   type: FETCH_POST,
      //   payload: response.data
      // });
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
};

// export { fetchPosts };

const saveFetchedList = res => dispatch => {
  dispatch({
    type: FETCH_POST,
    payload: res
  });
};
