import React, { Component } from 'react';
import "./App.css";

import Card from "./component/cards.js";
import Header from "./component/Header.js";

import{connect} from 'react-redux'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: "none"
    };
  }
  // add movie to state
  add = () => {
    if (
      this.state.name !== "" &&
      this.state.img !== "" &&
      this.state.review !== ""
    ) {
      this.setState({
        movies: [
          ...this.state.movies,
          {
            name: this.state.name,
            img: this.state.img,
            review: this.state.review
          }
        ]
      });
    } else {
      alert("* Required fields!!");
    }
  };
  addplus = () => {
    this.setState({
      class: "addmovie"
    });
  };
  addName = e => {
    this.setState({
      name: e.target.value
    });
  };
  addImage = e => {
    this.setState({
      img: e.target.value
    });
  };
  addReview = e => {
    this.setState({
      review: e.target.value
    });
  };
  // close AddMovie Section
  remove = () => {
    this.setState({
      class: "none"
    });
  };

  // search = e => {
  //   this.setState({
  //     search: e.target.value
  //   });
  // };

  // searchStar1 = () => {
  //   this.setState({ stars: 1 });
  // };
  // searchStar2 = () => {
  //   this.setState({ stars: 2 });
  // };
  // searchStar3 = () => {
  //   this.setState({ stars: 3 });
  // };
  // searchStar4 = () => {
  //   this.setState({ stars: 4 });
  // };
  // searchStar5 = () => {
  //   this.setState({ stars: 5 });
  // };

  render() {
    return (
      <div className="App">
       <Header text="Movie App By HCH" />
        <header className="header">
          <div className="searchBar">
            <input
              placeholder="Movie's name.."
              type="text"
              className="search"
              onChange={e => {
                this.props.search(e);
              }}
            />
            <span
              className="search-btn"
              onClick={() => {
                this.props.searchName();
              }}
            >
              Search
            </span>
          </div>
          <p className="stars">
            <i
              class="far fa-star"
              onClick={() => {
                this.props.searchStar1();
              }}
            />
            <i
              class="far fa-star"
              onClick={() => {
                this.props.searchStar2();
              }}
            />
            <i
              class="far fa-star"
              onClick={() => {
                this.props.searchStar3();
              }}
            />
            <i
              class="far fa-star"
              onClick={() => {
                this.props.searchStar4();
              }}
            />
            <i
              class="far fa-star"
              onClick={() => {
                this.props.searchStar5();
              }}
            />
          </p>
        </header>
        <main>
          <Card />
          <div
            onClick={() => {
              this.props.addplus();
            }}
            className="card addbtn"
          >
            +
          </div>
          <div className={this.state.class}>
            <input
              className="addInput"
              type="text"
              placeholder="Movie's name.."
              onChange={e => {
                this.props.addName(e);
              }}
            />
            <input
              className="addInput"
              type="text"
              placeholder="Movie's URL.."
              onChange={e => {
                this.props.addImage(e);
              }}
            />
            <input
              className="addInput"
              type="text"
              placeholder="Movie's review.."
              onChange={e => {
                this.props.addReview(e);
              }}
            />
            <span
              className="remove-m"
              onClick={() => {
                this.props.remove();
              }}
            >
              X
            </span>
            <span
              className="add-m"
              onClick={() => {
                this.props.add();
              }}
            >
              ADD MOVIE
            </span>
          </div>
        </main>
      </div>
    );
  }
}

const MapDispatchToProps=dispatch=>{
  return {
    search: (e) => {
      dispatch({
        type: 'SEARCH_INPUT',
        search: e.target.value
      })
    },
    searchStar1: () => {
      dispatch({
        type: 'SEARCH_STARS',
        stars: 1
      })
    },
    searchStar2: () => {
      dispatch({
        type: 'SEARCH_STARS',
        stars: 2
      })
    },
    searchStar3: () => {
      dispatch({
        type: 'SEARCH_STARS',
        stars: 3
      })
    },
    searchStar4: () => {
      dispatch({
        type: 'SEARCH_STARS',
        stars: 4
      })
    },
    searchStar5: () => {
      dispatch({
        type: 'SEARCH_STARS',
        stars: 5
      })
    },
  }
}

const mapStateToProps = state => {
  return {
    searchInput: state.searchInput
    }
  }



export default connect(
  mapStateToProps,
  MapDispatchToProps
)(App);
