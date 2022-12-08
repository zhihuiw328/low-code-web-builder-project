import React, { useState } from 'react';
import { StyleSheet, View } from "react-native";
import './BasicTemplate.css';

class BasicTemplate2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSection : null,

            pageContent : {
                pageTitle : {
                    name: "pageTitle",
                    text: "USER INPUT PAGE TITLE",
                    style: "div_hover",
                    textColor: "black",
                    backgroundColor: "white"

                },
                titleText : {
                    name: "titleText",
                    text: "TITLE TEXT",
                    style: "div_hover",
                    textColor: "black",
                    backgroundColor: "white"

                },
                subTitle1 : {
                    name: "subTitle1",
                    text:"SUB TITLE 1",
                    style: "div_hover",
                    textColor: "black",
                    backgroundColor: "white"

                },
                subText1 : {
                    name: "subText1",
                    text:"SUB TITLE TEXT 1",
                    style: "div_hover",
                    textColor: "black",
                    backgroundColor: "white"

                },
                subTitle2 : {
                    name: "subTitle2",
                    text:"SUB TITLE TEXT 2",
                    style: "div_hover",
                    textColor: "black",
                    backgroundColor: "white"

                },
                subText2 : {
                    name: "subText2",
                    text:"SUBTEXT TEXT 2",
                    style: "div_hover",
                    textColor: "black",
                    backgroundColor: "white"

                }
            }
        };
    }

    passTextToParent = (text) => {
        this.props.updateText(text)
    }

    passTextColorToParent = (color) => {
        this.props.updateColor(color)
    }

    passBackgroundColorToParent = (color) => {
        this.props.updateBackgroundColor(color)
    }

    resetSection = () => {
        // Reset hover status for all sections
        this.setState((prevState, props) => {
            let newPageContent = {
                pageTitle : {
                    ...prevState.pageContent.pageTitle ,
                    style: "div_hover"

                },
                titleText : {
                    ...prevState.pageContent.titleText ,
                    style: "div_hover"

                },
                subTitle1 : {
                    ...prevState.pageContent.subTitle1 ,
                    style: "div_hover"

                },
                subText1 : {
                    ...prevState.pageContent.subText1 ,
                    style: "div_hover"

                },
                subTitle2 : {
                    ...prevState.pageContent.subTitle2 ,
                    style: "div_hover"

                },
                subText2 : {
                    ...prevState.pageContent.subText2 ,
                    style: "div_hover"

                }
            }
            return {pageContent:newPageContent}
        })

        // Pass empty strings and texts to parent
        this.passTextToParent("")
        this.passTextColorToParent("")
        this.passBackgroundColorToParent("")
    };

    updateClickedSection = (section) => {
        this.setState(prevState => {
            let newPageContent = Object.assign({}, prevState.pageContent)
            newPageContent[section] = {
                ...prevState.pageContent[section],
                style: "div_clicked"
            }
            return {currentSection:section, pageContent:newPageContent}
        })
    };


    handleSectionClick(e, section) {
        this.resetSection()
        if (this.state.currentSection == section) {
            this.setState({currentSection:null})
        } else {
            this.updateClickedSection(section)
            // console.log(this.state.pageContent[section].style)
        }
    };
    
    updateSectionInfo = (section, newText, newColor, newBackgroundColor) => {
        console.log(newText)
        this.setState(prevState => {
            let newPageContent = Object.assign({}, prevState.pageContent)
            newPageContent[section] = {
                ...prevState.pageContent[section],
                text: newText,
                color: newColor,
                backgroundColor: newBackgroundColor
            }
            return {currentSection:section, pageContent:newPageContent}
        })
    }

    componentDidUpdate(previousProps, previousState) {
        if (this.state.currentSection !== null) {
            if (previousProps.text !== this.props.text) {
                this.updateSectionInfo(this.state.currentSection,
                    this.props.text,
                    this.state.pageContent[this.state.currentSection].color,
                    this.state.pageContent[this.state.currentSection].backgroundColor)
            }
            if (previousProps.color !== this.props.color) {
                this.updateSectionInfo(this.state.currentSection,
                    this.state.pageContent[this.state.currentSection].text,
                    this.props.color,
                    this.state.pageContent[this.state.currentSection].backgroundColor)
            }

            if (previousProps.backgroundColor !== this.props.backgroundColor) {
                this.updateSectionInfo(this.state.currentSection,
                    this.state.pageContent[this.state.currentSection].text,
                    this.state.pageContent[this.state.currentSection].color,
                    this.props.backgroundColor)
            }
        }
    };

    render() {
        return (
            
            <>
            <div id='container'>
                <div onClick={(e) => this.handleSectionClick(e, "pageTitle")} className={this.state.pageContent.pageTitle.style}  style={{textAlign:"center", backgroundColor: "pink"}}>
                    <h1>{this.state.pageContent.pageTitle.text}</h1>
                </div>

                <div onClick={(e) => this.handleSectionClick(e, "titleText")} className={this.state.pageContent.titleText.style}>
                    <p>{this.state.pageContent.titleText.text}</p>
                </div>

                <div onClick={(e) => this.handleSectionClick(e, "subTitle1")} className={this.state.pageContent.subTitle1.style}>
                    <h2>{this.state.pageContent.subTitle1.text}</h2>
                </div>

                <div onClick={(e) => this.handleSectionClick(e, "subText1")} className={this.state.pageContent.subText1.style}>
                    <p>{this.state.pageContent.subText1.text}</p>
                </div>

                <div onClick={(e) => this.handleSectionClick(e, "subTitle2")} className={this.state.pageContent.subTitle2.style}>
                    <h2>{this.state.pageContent.subTitle2.text}</h2>
                </div>

                <div onClick={(e) => this.handleSectionClick(e, "subText2")} className={this.state.pageContent.subText2.style}>
                    <p>{this.state.pageContent.subText2.text}</p>
                </div>
            </div>

            </>
        );
    };
}



export default BasicTemplate2;