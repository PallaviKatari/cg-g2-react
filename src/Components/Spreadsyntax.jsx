import React from 'react';

function Spreadsyntax() {
const originalImage = { 
	src:"https://th.bing.com/th/id/OIP.yNOaibrXZ3bEEC8bfTkJtQHaHa?w=168&h=180&c=7&r=0&o=5&dpr=1.56&pid=1.7",
	alt:"This is a random image"
};
//The spread operator is very useful when you want to make an exact 
//copy of an existing array, you can use the spread operator to accomplish this quickly.
const formattedImage = {
	...originalImage,
	height:100,
	width: 100
}
return (
	<div style={{ marginTop: 100 }}>
	<Image {...formattedImage}/>
	</div>
);
}

function Image(props) {
    return (
        <div>
            <img {...props} />
        </div>
    );
}

export default Spreadsyntax;
