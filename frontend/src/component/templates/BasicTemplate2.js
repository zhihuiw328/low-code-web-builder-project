import React, { useState } from 'react';
import { StyleSheet, View } from "react-native";
import './BasicTemplate.css';

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
            pageTitleStyle: "div_hover",
            titleTextStyle : "div_hover",
            subTitle1Style : "div_hover",
            subText1Style : "div_hover",
            subTitle2Style : "div_hover",
            subText2Style : "div_hover",
        };
    }

    resetStyle = () => {
        this.setState({
            pageTitleStyle: "div_hover",
            titleTextStyle : "div_hover",
            subTitle1Style : "div_hover",
            subText1Style : "div_hover",
            subTitle2Style : "div_hover",
            subText2Style : "div_hover",
        })
    }
    passTextToParent = (text) => {
        this.props.updateParentCallback(text)
    }

    handleSubmit(e, section) {
        console.log('You clicked submit.');
        if (section === "pageTitle") {
            if (this.state.currentSection == section) {
                this.setState({currentSection:null, pageTitleStyle: "div_hover"});
                this.passTextToParent("")
            } else {
                this.resetStyle();
                this.setState({currentSection:section, pageTitleStyle: "div_clicked"});
                this.passTextToParent(this.state.pageTitle)
            }
            
        } else if (section === "titleText") {
            if (this.state.currentSection == section) {
                this.setState({currentSection:null, titleTextStyle: "div_hover"});
                this.passTextToParent("")
            } else {
                this.resetStyle();
                this.setState({currentSection:section, titleTextStyle: "div_clicked"});
                this.passTextToParent(this.state.titleText)
            }
        } else if (section === "subTitle1") {
            if (this.state.currentSection == section) {
                this.setState({currentSection:null, subTitle1Style: "div_hover"});
                this.passTextToParent("")
            } else {
                this.resetStyle();
                this.setState({currentSection:section, subTitle1Style: "div_clicked"});
                this.passTextToParent(this.state.subTitle1)
            }
        } else if (section === "subText1") {
            if (this.state.currentSection == section) {
                this.setState({currentSection:null, subText1Style: "div_hover"});
                this.passTextToParent("")
            } else {
                this.resetStyle();
                this.setState({currentSection:section, subText1Style: "div_clicked"});
                this.passTextToParent(this.state.subText1)
            }
        } else if (section === "subTitle2") {
            if (this.state.currentSection == section) {
                this.setState({currentSection:null, subTitle2Style: "div_hover"});
                this.passTextToParent("")
            } else {
                this.resetStyle();
                this.setState({currentSection:section, subTitle2Style: "div_clicked"});
                this.passTextToParent(this.state.subTitle2)
            }
        } else if (section === "subText2") {
            if (this.state.currentSection == section) {
                this.setState({currentSection:null, subText2Style: "div_hover"});
                this.passTextToParent("")
            } else {
                this.resetStyle();
                this.setState({currentSection:section, subText2Style: "div_clicked"});
                this.passTextToParent(this.state.subText2)
            }
        }
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
            <div id='container'>
                <div onClick={(e) => this.handleSubmit(e, "pageTitle")} className={this.state.pageTitleStyle}  style={{textAlign:"center", backgroundColor: "pink"}}>
                    <h1>{this.state.pageTitle}</h1>
                </div>

                <div onClick={(e) => this.handleSubmit(e, "titleText")} className={this.state.titleTextStyle}>
                    <p>{this.state.titleText}</p>
                </div>

                <div onClick={(e) => this.handleSubmit(e, "subTitle1")} className={this.state.subTitle1Style}>
                    <h2>{this.state.subTitle1}</h2>
                </div>

                <div onClick={(e) => this.handleSubmit(e, "subText1")} className={this.state.subText1Style}>
                    <p>{this.state.subText1}</p>
                </div>

                <div onClick={(e) => this.handleSubmit(e, "subTitle2")} className={this.state.subTitle2Style}>
                    <h2>{this.state.subTitle2}</h2>
                </div>

                <div onClick={(e) => this.handleSubmit(e, "subText2")} className={this.state.subText2Style}>
                    <p>{this.state.subText2}</p>
                </div>
            </div>

            </>
        );
    }
}



export default BasicTemplate2;