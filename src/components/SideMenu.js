import React, { Component } from "react";
import { connect } from "react-redux";

import { setDateFilter } from "../actions/filters";
import { giveArrayOfMonths } from "../utilities/utilites";



class SideMenu extends Component {

    // handleSetDateFilter = () => {
    //     const monthButton = document.getElementById(`${date[0]}-${date[1]}`)
    //     const month = monthButton.dataset.month;
    //     const year = monthButton.dataset.year;
    //     this.props.setDateFilter({ month, year })
    // }


    render() {
        const arrayOfMonths = giveArrayOfMonths(this.props.posts);

        return (
            <div>

                {this.props.posts &&
                    arrayOfMonths.map(date => {
                        const id = `${date[0]}-${date[1]}`;

                        return (<button
                            id={`${date[0]}-${date[1]}`}
                            data-month={date[0]}
                            data-year={date[1]}
                            onClick={() => this.props.setDateFilter({ month: date[0], year: date[1] })}
                        >{date[0]}</button>)
                    }
                    )}


            </div>
        )
    }
};


const mapDispatchToProps = (dispatch) => ({
    setDateFilter: filterDate => dispatch(setDateFilter(filterDate))
})

const mapStateToProps = (state) => ({
    posts: state.posts
})


export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);