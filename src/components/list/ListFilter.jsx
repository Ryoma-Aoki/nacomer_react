import React from "react";
import "../../styles/list.css"
export default function ListFilter(props) {

    const periodItemList = [
        {
            periodId: 1,
            hours: 2
        },
        {
            periodId: 2,
            hours: 8
        },
        {
            periodId: 3,
            hours: 24
        }
    ]

    const setFilterValue = (e) => {


        if (props.filterdPeriod.includes(e.target.value)) {
            props.setFilteredPeriod(
                props.filterdPeriod.filter(item => item !== e.target.value)
            );
        } else {
            props.setFilteredPeriod(
                [...props.filterdPeriod, e.target.value].sort()
            )
        }
    };




    const filterItem = (
        <>
            <div className="filterItem">
                所要時間
                {periodItemList.map((element) => {
                return (
                    <p key={element.periodId}>
                        <input
                            type="checkbox"
                            name="period"
                            value={element.periodId}
                            onClick={setFilterValue}
                        />
                        {element.hours}時間
                    </p>)
            })}
            </div>
        </>
    );

    return (<>{filterItem}</>)
}