import React, { useState } from 'react';
import { View } from "react-native";

function BasicTemplate2(props) {
    const userInput = props.userInput;
    // const userInput = {
    //     pageTitle : "USER INPUT PAGE TITLE",
    //     text : "USER INPUT TEXT",
    // }
    console.log(userInput);

    return (
        <>
        <View style={{
            // Try setting `flexDirection` to `"row"`.
            flexDirection: "column"
            }}>
                
        <h1>HELLO WORLD {userInput.pageTitle}</h1>
        <p>My first paragraph</p>
        <h2>Subeading 1</h2>
        <p>My first paragraph {userInput.text}</p>
        <h2>Subeading 1</h2>
        <p>My first paragraph</p>
        </View>

        </>
    );
}

export default BasicTemplate2;