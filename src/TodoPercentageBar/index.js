import React from "react";

function TodoPercentageBar (props) {

    let bgColor = '';
    if (props.completedPercentage >= 90) {
        bgColor = '#60ff0a';
    } else if (props.completedPercentage < 50 && props.completedPercentage >= 1) {
        bgColor = 'red';
    } else if (props.completedPercentage >= 50) {
        bgColor = 'yellow';
    } else {
        bgColor = 'whitesmoke';
    }

    const percentageBar = {
        width: `${props.completedPercentage}%`,
        backgroundColor: bgColor,
        height: '100%',
        borderRadius: '40px',
        // display: 'flex',
        // alignItems: 'center',
        textAlign: 'right',
      }
    
      const percentageText = {
        padding: '0.5rem',
        color: 'black',
        fontWeight: 'bold',
        fontSize: '1.5rem'
      }

    return (
        <div className='percentage-container'>
        <div className='percentage-bar' style={percentageBar}>
          <span style={percentageText}>{props.completedPercentage}%</span>
        </div>
      </div>
    )
}

export { TodoPercentageBar };