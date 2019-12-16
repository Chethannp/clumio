import React, { useEffect } from "react";
import "./home.css";

/**
 * Redux - Thunk Imports
 * To read state values and to Dispatch an action to the reducer
 */
import { connect } from "react-redux";
import { fetchPosts } from "../../../actions/postActions";

const Home = ({ fetchPosts, postList = [] }) => {
  useEffect(() => {
    fetchPosts();
    console.log(fetchPosts());
  }, []);

  return (
    <div className="body-wrapper">
      <div className="main-layout">
        <div className="content-holder">
          <header>
            <div className="logo">Discover</div>
            <nav>
              <ul>
                <li>
                  <a href="#" className="selected">
                    Popular
                  </a>
                </li>
                <li>
                  <a href="#">Trend</a>
                </li>
                <li>
                  <a href="#">Newest</a>
                </li>
                <li>
                  <a href="#">Top Rated</a>
                </li>
              </ul>
            </nav>
            <form className="search-form">
              <input type="text" name="search" placeholder="Search.." />
            </form>
          </header>

          <div className="main-content">
            <div className="movie-deck">
              {postList &&
                postList.map((list, i) => (
                  <div className="card" key={i}>
                    <div className="card-body">
                      <img
                        src={`http://image.tmdb.org/t/p/w185${list.poster_path}`}
                      />
                    </div>
                    <div className="card-footer">
                      <p>{list.title}</p>
                      <h6>Action, 2013</h6>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* <!-- End of body --> */}
        </div>
        <div className="filter-holder">
          <h2>Discover Option</h2>

          <div className="custom-select" style={{ width: "200px" }}>
            <lable>Type</lable> <br /> <br />
            <select>
              <option value="0">Movies</option>
              <option value="1">The Begining</option>
              <option value="2">The Middle</option>
              <option value="3">The end</option>
            </select>
          </div>

          <br />
          <div className="custom-select" style={{ width: "200px" }}>
            <lable>Genre</lable> <br /> <br />
            <select>
              <option value="0">Action</option>
              <option value="1">Thriller</option>
              <option value="2">Horror</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    postList: state.posts.list
  };
};

export default connect(mapStateToProps, dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
}))(Home);
