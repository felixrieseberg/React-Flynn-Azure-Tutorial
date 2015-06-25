"use strict";

var React = require('react');

var AzureCreateAppTutorial = React.createClass({displayName: "AzureCreateAppTutorial",
    getInitialState: function () {
/*        var styleEl = Sheet.createElement({
            marginTop: '1rem',
            selectors: [
                ['> li > img', {
                    verticalAlign: 'text-top',
                    border: '1px solid #333'
                }],
                ['input[data-selectable]', {
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: 'inherit',
                    textAlign: 'center',
                    padding: 0
                }]
            ]
        });*/

        return {
            styleEl: styleEl
        };
    },

    render: function () {
        var redirectURI = window.location.protocol + '//'+ window.location.host + '/oauth/azure',
            tutorialSlide, tutorialSlides = [];

        tutorialSlides.push(
            React.createElement("div", {id: "tutorial-01"}, 
                React.createElement("img", {src: AssetPaths["azure-app-0.png"], style: {
                    width: 300,
                    height: 219
                }}), 
                React.createElement("p", null, React.createElement(ExternalLink, {href: "https://manage.windowsazure.com"}, "Sign into the Azure Management Portal"), " and select the \"Active Directory\" navigation item on the left.")
            )
        );

        tutorialSlides.push(
            React.createElement("div", {id: "tutorial-02"}, 
                React.createElement("img", {src: AssetPaths["azure-app-1.png"], style: {
                    width: 300,
                    height: 238
                }}), 
                React.createElement("p", null, "Click on \"Default Directory\"")
            )
        );

        tutorialSlides.push(
            React.createElement("div", {id: "tutorial-03"}, 
                React.createElement("img", {src: AssetPaths["azure-app-2.png"], style: {
                    width: 300,
                    height: 355
                    }}), 
                React.createElement("img", {src: AssetPaths["azure-app-2-2.png"], style: {
                    width: 659,
                    height: 102
                }}), 
                React.createElement("p", null, "Click the \"ADD\" button at the bottom")
            )
        );

        tutorialSlides.push(
            React.createElement("div", {id: "tutorial-04"}, 
                React.createElement("img", {src: AssetPaths["azure-app-3.png"], style: {
                    width: 659,
                    height: 498
                }}), 
                React.createElement("p", null, "Click \"Add an application my organization is developing\"")
            )
        );

        tutorialSlides.push(
            React.createElement("div", {id: "tutorial-05"}, 
                React.createElement("img", {src: AssetPaths["azure-app-4.png"], style: {
                    width: 659,
                    height: 471
                }}), 
                React.createElement("p", null, "Give the application a name such as \"flynn-installer\""), 
                React.createElement("p", null, "Select the \"NATIVE CLIENT APPLICATION\" option"), 
                React.createElement("p", null, "Click the arrow in the bottom right of the modal to continue")
            )
        );

        tutorialSlides.push(
            React.createElement("div", {id: "tutorial-06"}, 
                React.createElement("img", {src: AssetPaths["azure-app-5.png"], style: {
                    width: 659,
                    height: 471
                }}), 
                React.createElement("p", null, "Set \"", React.createElement("input", {type: "text", value: redirectURI, "data-selectable": true, onClick: this.__handleRedirectURIInputClick, style: {
                        width: Math.ceil(((redirectURI.length * 16) / 2) - 22) + 'px'
                    }}), "\" as the \"REDIRECT URI\""), 
                React.createElement("p", null, "Click the checkmark in the bottom right to continue")
            )
        );

        tutorialSlides.push(
            React.createElement("div", {id: "tutorial-07"}, 
                React.createElement("img", {src: AssetPaths["azure-app-6.png"], style: {
                    width: 659,
                    height: 278
                }}), 
                React.createElement("label", null, 
                    React.createElement("p", null, "Click the \"CONFIGURE\" tab"), 
                    React.createElement("p", null, "Copy the \"CLIENT ID\" into the input below")
                    
                )
            )
        );

        tutorialSlides.push(
            React.createElement("div", {id: "tutorial-08"}, 
                React.createElement("img", {src: AssetPaths["azure-app-7.png"], style: {
                    width: 659,
                    height: 155
                }}), 
                React.createElement("p", null, "Scroll to the bottom of the configuration page"), 
                React.createElement("p", null, "Click the green \"Add application\" button")
            )
        );

        tutorialSlides.push(
            React.createElement("div", {id: "tutorial-09"}, 
                React.createElement("img", {src: AssetPaths["azure-app-7.png"], style: {
                    width: 659,
                    height: 155
                }}), 
                React.createElement("p", null, "Scroll to the bottom of the configuration page"), 
                React.createElement("p", null, "Click the green \"Add application\" button")
            )
        );

        tutorialSlides.push(
            React.createElement("div", {id: "tutorial-10"}, 
                React.createElement("img", {src: AssetPaths["azure-app-9.png"], style: {
                    width: 659,
                    height: 415
                }}), 
                React.createElement("p", null, "Click the \"Windows Azure Service ...\" option"), 
                React.createElement("p", null, "Click the checkmark in the bottom right to continue")
            )
        );

        tutorialSlides.push(
            React.createElement("div", {id: "tutorial-11"}, 
                React.createElement("img", {src: AssetPaths["azure-app-10.png"], style: {
                    width: 659,
                    height: 169
                }}), 
                React.createElement("p", null, "Click the \"Delegated Permissions\" dropdown"), 
                React.createElement("p", null, "Check \"Access Azure Service Management\"")
            )
        );

        tutorialSlides.push(
            React.createElement("div", {id: "tutorial-12"}, 
                React.createElement("img", {src: AssetPaths["azure-app-11.png"], style: {
                    width: 659,
                    height: 93
                }}), 
                React.createElement("p", null, "Click the \"Save\" button")
            )
        );

        tutorialSlides.push(
            React.createElement("div", {id: "tutorial-13"}, 
                React.createElement("img", {src: AssetPaths["azure-app-12.png"], style: {
                    width: 659,
                    height: 486
                }}), 
                React.createElement("p", null, "Click on the back arrow button to go back to the \"APPLICATIONS\" tab click and the \"ENDPOINTS\" button at the bottom"), 
                React.createElement("p", null, "Copy your OAuth 2.0 Token Endpoint into the input below")
            )
        );

        tutorialSlide = (this.state.tutorialSlide) ? tutorialSlides[this.state.tutorialSlide] : null;

        return (
            React.createElement("div", {id: this.state.styleEl.id}, 
                React.createElement("div", {id: "azure-tutorial-intro"}, 
                React.createElement("p", null, "To use installer, you first need to create an Azure application able to controll your resources on Flynns behalf."), 
                    React.createElement("p", null, React.createElement("a", {onClick: this.__handleAdvanceTutorialClick}, "Click here for a step-by-step tutorial"), " or enter your existing configuration below:")
                ), 

                tutorialSlide, 

                React.createElement("div", {id: "azure-tutorial-inputs"}, 
                    React.createElement("input", {name: "client_id", type: "text", placeholder: "CLIENT ID"}), 
                    React.createElement("input", {name: "endpoint", type: "text", placeholder: "https://login.microsoftonline.com/{your-uid}/oauth2/token?api-version=1.0"})
                )
            )
        );
    },

    componentDidMount: function () {
        this.state.styleEl.commit();
    },

    __handleAdvanceTutorialClick: function () {
        var state = this.state;

        if (!state.tutorialSlide) {
            state.tutorialSlide = 0;
        } else {
            state.tutorialSlide = state.tutorialSlide + 1;
        }

        this.setState(state);
    },

    __handleRedirectURIInputClick: function (e) {
        InputSelection.selectAll(e.target);
    }
});

module.exports = AzureCreateAppTutorial;