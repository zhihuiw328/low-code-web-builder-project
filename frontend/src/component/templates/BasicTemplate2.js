import React, { useState } from 'react';
import { StyleSheet, View } from "react-native";
// import './BasicTemplate.css';

class BasicTemplate2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSection : null,
            pageTitle : "USER INPUT PAGE TITLE",
            titleText : "TITLE TEXT",
            subTitle1 : "SUB TITLE TEXT 1",
            subText1 : "SUBTEXT TEXT 1",
            subTitle2 : "SUB TITLE TEXT 2",
            subText2 : "SUBTEXT TEXT 2",
        };
    }

    handleSubmit(e, section) {
        console.log('You clicked submit.');
        this.setState({currentSection:section});
        console.log(this.state.currentSection);
    };

    componentDidUpdate(previousProps, previousState) {
        if (previousProps.input !== this.props.input) {
            if (this.state.currentSection === "pageTitle") {
                this.setState((state, props) => ({ pageTitle: props.input}));
                console.log('updated.');
            } else if (this.state.currentSection === "titleText") {
                this.setState((state, props) => ({ titleText: props.input}));
                console.log('updated.');
            } else if (this.state.currentSection === "subTitle1") {
                this.setState((state, props) => ({ subTitle1: props.input}));
                console.log('updated.');
            } else if (this.state.currentSection === "subText1") {
                this.setState((state, props) => ({ subText1: props.input}));
                console.log('updated.');
            } else if (this.state.currentSection === "subTitle2") {
                this.setState((state, props) => ({ subTitle2: props.input}));
                console.log('updated.');
            } else if (this.state.currentSection === "subText2") {
                this.setState((state, props) => ({ subText2: props.input}));
                console.log('updated.');
            } 
        }
    }

    render() {
        return (
            
            <>
            <div>
                <div onClick={(e) => this.handleSubmit(e, "pageTitle")} className="div_hover">
                    <h1>{this.state.pageTitle}</h1>
                </div>

                <div onClick={(e) => this.handleSubmit(e, "titleText")} className="div_hover">
                    <p>{this.state.titleText}</p>
                </div>

                <div onClick={(e) => this.handleSubmit(e, "subTitle1")} className="div_hover">
                    <h2>{this.state.subTitle1}</h2>
                </div>

                <div onClick={(e) => this.handleSubmit(e, "subText1")} className="div_hover">
                    <p>{this.state.subText1}</p>
                </div>

                <div onClick={(e) => this.handleSubmit(e, "subTitle2")} className="div_hover">
                    <h2>{this.state.subTitle2}</h2>
                </div>

                <div onClick={(e) => this.handleSubmit(e, "subText2")} className="div_hover">
                    <p>{this.state.subText2}</p>
                </div>
            </div>

            </>
        );
    }
}



export default BasicTemplate2;