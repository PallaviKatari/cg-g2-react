import React from 'react';
import logo from '../Assets/react.png';
import '../Styles/Style.css';
// INLINE STYLING
const myComponentStyle = {
    color: 'red',
    padding: 5
}
const cardStyles = {
    container: {
        display: "flex",
        height:100,
        width: 400,
        boxShadow: "0 0 3px 2px #cec7c759",
        alignItems: "center",
        padding: 20,
        borderRadius: 20,
        marginLeft:500 ,
    },
    profilePicture: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "orange",
        color: "white",
        height: 20,
        width: 20,
        borderRadius: "50%",
        padding: 10,
        fontWeight: "bold",
    },
    bio: {
        marginLeft: 10,
    },
    userName: {
        fontWeight: "bold",
    },
};
function Home() {

    return <p style={{ color: 'blue', marginTop: 100, padding: 2 }}>Welcome to Functional Component</p>;
}
function MyComponent() {

    return <div style={myComponentStyle}> Inline Styled Component </div>
}

function userCardComponent() {
    return (
        <header>
            <Home />
            <MyComponent />
            <div style={cardStyles.container}>
                <span style={cardStyles.profilePicture}><img src={logo} className="App-logo" alt="logo" /></span>
                <div style={cardStyles.bio}>
                    <p style={cardStyles.userName}>Hello Team</p>
                    <p>React Styling</p>
                </div>
            </div>
        </header>
    );
}
export default userCardComponent;