import React from 'react';
import { Component } from 'react';
import Toolbar from '../Toolbar/Toolbar';
import Data from './Data';

class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.data = Data;
        this.selected = 'All';
        this.defaultFilters = ['All', 'Websites', 'Flayers', 'Business Cards']
        this.state =  {activeFilter: 'All', allFilters: this.defaultFilters};
        this.onSelectedFilter = this.onSelectedFilter.bind(this)
    }

    onSelectedFilter(filter) {
        this.selected = filter;
        this.setState({
            ...this.state,
            activeFilter: this.selected
        })
    }

    render() {
        return (
            <React.Fragment>
                <Toolbar activeFilter= {this.state.activeFilter}  allFilters = {this.state.allFilters} eventFunc = {this.onSelectedFilter}></Toolbar>
                <div className='portfolio-wrap'>
                    {this.data.map((item, i) => {
                        if  (item.category === this.selected && this.selected !== 'All') {
                            return (
                                <div key={i} className='portfolio-item' data-category={item.category}>
                                    <img src={item.img} alt={item.category + ' img'} />
                                </div>
                            )
                        }
                        else if (this.selected === 'All') {
                            return (
                                <div key={i} className='portfolio-item' data-category={item.category}>
                                    <img src={item.img} />
                                </div>
                            )
                        }
                    })}

                </div>
               
            </React.Fragment>
        )
        
    }
}

export default Portfolio