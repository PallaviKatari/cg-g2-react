import React from 'react';

function ListItem(props) {
    const item = props.item;
    return (
        // No need to specify the key here.  
        <li> {item} </li>
    );
}
function NameList(props) {
    const myLists = props.myLists;
    const listItems = myLists.map((strLists) =>
        // The key should have been specified here.  
        <ListItem key={myLists.toString()} item={strLists} />
    );
    return (
        <div style={{ color: 'blue', marginTop: 100}}>
            <h2>React Keys</h2>
            <ol>{listItems}</ol>
            <MenuBlog data={data} />
        </div>
    );
}

function MenuBlog(props) {
    const titlebar = (
        <ol>
            {props.data.map((show) =>
                <li key={show.id}>
                    {show.title}
                </li>
            )}
        </ol>
    );
    const content = props.data.map((show) =>
        <div key={show.id}>
            <h3>{show.title}: {show.content}</h3>
        </div>
    );
    return (
        <div>
            {titlebar}
            <hr />
            {content}
        </div>
    );
}
const data = [
    { id: 1, title: 'Props', content: 'Welcome to ReactJS Map!!' },
    { id: 2, title: 'Map', content: 'Welcome to ReactJS Props!!' },
];

export default NameList;  