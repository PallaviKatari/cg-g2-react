import React from 'react';

const properties = (props) => {
    return (
        <p style={{ color: 'blue', lineHeight: 10, padding: 2 }}>Hello {props.company1} and {props.company2} participants</p>
    );
}
export default properties;