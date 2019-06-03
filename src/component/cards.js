import React, { Component } from 'react';
import {
    connect
} from 'react-redux'

import './cards.css'
class Card extends Component {
 
        render() {
       
        return (
            <div className="movies">
                {this.props.tabMovies.map((el) => {
                    return (
                        <div className="card">
                            <img className="card-img" src={el.img} />
                            <p className="card-name">{el.name}</p>
                            <p className="card-review">{''.padEnd(el.review,'☆')}<span className='starGray'>{''.padEnd(5-el.review,'☆')}</span></p>
                           
                        </div>
                    )
                })}
            </div>
        );
    }
}
// map state to props, connect
const mapStateToProps = state => {
    return {
        tabMovies: state.listMovies
    }
}

export default connect(mapStateToProps, null)(Card);