import React, { useState } from 'react';

function BasicTemplate2(props) {
    const userInput = props.userInput;
    // const userInput = {
    //     pageTitle : "USER INPUT PAGE TITLE",
    //     text : "USER INPUT TEXT",
    // }
    console.log(userInput);

    return (
        <>
        <div>
        <h1>HELLO WORLD {userInput.pageTitle}</h1>
        <p>My first paragraph</p>
        <h2>Subeading 1</h2>
        <p>My first paragraph {userInput.text}</p>
        <h2>Subeading 1</h2>
        <p>My first paragraph</p>
        </div>

        </>
    );
}

export default BasicTemplate2;