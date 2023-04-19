import React from "react";

const Toolbar = (props) => {
    let classFilter = undefined;
    return (
        <div className="filter-wrap">
            {props.allFilters.map((filter, i) => {
                props.activeFilter === filter ? classFilter = 'filter-btn-active': classFilter = 'filter-btn-wrap';
                return (
                    <div key={i} className={classFilter} onClick={() => {props.eventFunc(filter)}}>
                        <button>{filter}</button>
                    </div>
                );
            })}
        </div>
    )
}

export default Toolbar