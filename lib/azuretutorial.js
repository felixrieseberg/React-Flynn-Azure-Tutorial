"use strict";

var React = require('react');

var tutorialSlides = [''];

tutorialSlides.push(
    React.createElement("div", {id: "tutorial-01"}, 
        React.createElement("img", {src: AssetPaths["azure-1.gif"], style: {
                width: 699,
                height: 378
            }}), 
        React.createElement("p", null, React.createElement("a", {href: "https://manage.windowsazure.com"}, "Sign into the Azure Management Portal"), " and select the \"Active Directory\" navigation item on the left.")
    )
);

tutorialSlides.push(
    React.createElement("div", {id: "tutorial-02"}, 
        React.createElement("img", {src: AssetPaths["azure-2.gif"], style: {
                width: 699,
                height: 378
            }}), 
        React.createElement("p", null, "Click on \"Default Directory\" (or the one you want to use) and select the \"Applications\" navigation tab.")
    )
);

tutorialSlides.push(
    React.createElement("div", {id: "tutorial-03"}, 
    React.createElement("img", {src: AssetPaths["azure-3.gif"], style: {
                width: 699,
                height: 378
            }}), 
        React.createElement("p", null, "Click the \"Add\" button at the bottom and select \"Add an application my organization is developing\". For the name, choose \"flynn-installer\" (or something else), then select \"Native Client Application\".")
    )
);

tutorialSlides.push(
    React.createElement("div", {id: "tutorial-04"}, 
    React.createElement("img", {src: AssetPaths["azure-4.gif"], style: {
                width: 699,
                height: 378
            }}), 
        React.createElement("p", null, "As Redirect URI, use the value below, and create the application by hitting the checkmark in the lower right.")
    )
);

tutorialSlides.push(
    React.createElement("div", {id: "tutorial-05"}, 
    React.createElement("img", {src: AssetPaths["azure-5.gif"], style: {
                width: 699,
                height: 378
            }}), 
        React.createElement("p", null, "Click the \"Configure\" tab and copy the \"Client ID\" into the input field below.")
    )
);

tutorialSlides.push(
    React.createElement("div", {id: "tutorial-06"}, 
        React.createElement("img", {src: AssetPaths["azure-6.gif"], style: {
                width: 699,
                height: 402
            }}), 
        React.createElement("p", null, "Next, we need to allow the created app to control your Azure account. Scroll to the bottom of the configuration page and click the green \"Add application\" button. In the popup, select the \"Windows Azure Service Management API\" and click the checkmark in the lower right.")
    )
);

tutorialSlides.push(
    React.createElement("div", {id: "tutorial-07"}, 
        React.createElement("img", {src: AssetPaths["azure-7.gif"], style: {
                width: 699,
                height: 402
            }}), 
        React.createElement("p", null, "Click the \"Delegated Permissions\" dropdown and check \"Access Azure Service Management\". Then, save the configuration.")
    )
);

tutorialSlides.push(
    React.createElement("div", {id: "tutorial-08"}, 
        React.createElement("img", {src: AssetPaths["azure-8.gif"], style: {
                width: 699,
                height: 472
            }}), 
        React.createElement("p", null, "Click on the back arrow button to go back to the \"APPLICATIONS\" tab and click and the \"ENDPOINTS\" button at the bottom. Then, copy your OAuth 2.0 Token Endpoint into the input below.")
    )
);

tutorialSlides.push(
    React.createElement("div", {id: "tutorial-09"}, 
        React.createElement("img", {src: AssetPaths["azure-done.png"], style: {
                width: 699,
                height: 256
            }}), 
        React.createElement("p", null, "You now created an appliation able to control your Azure resources - one that this Flynn installer can use. You can connect this installer and your new app by clicking \"Authenticate\" below - lets install Flynn!")
    )
);

var AzureCreateAppTutorial = React.createClass({displayName: "AzureCreateAppTutorial",
    getInitialState: function () {
        var styleEl = Sheet.createElement({
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
                }],
                ['input', {
                    margin: '0 0 5px 0'
                }]
            ]
        });

        return {
            styleEl: styleEl,
            tutorialSlide: null
        };
    },

    render: function () {
        var redirectURI = window.location.protocol + '//'+ window.location.host + '/oauth/azure';
        var inputStyles = this.__getInputStyles();
        var state = this.state;
        var pagination = {};
        var intro;
        var tutorialSlide;

        intro = (
            React.createElement("div", {id: "azure-tutorial-intro"}, 
                React.createElement("p", null, "To use the installer, you first need to create an Azure application able to control your resources on Flynns behalf."), 
                React.createElement("button", {onClick: this.__handleAdvanceTutorialClick}, "Walk me through it"), React.createElement("br", null), 
                React.createElement("button", {onClick: this.__skipTutorial}, "Skip tutorial")
            )
        );

        intro = (state.tutorialSlide || state.skipTutorial) ? null : intro;
        tutorialSlide = (state.tutorialSlide) ? tutorialSlides[state.tutorialSlide] : null;

        if (state.tutorialSlide || state.skipTutorial) {
            pagination.prev = (state.skipTutorial && !state.tutorialSlide) ? React.createElement("button", {id: "azureTutPrev", onClick: this.__skipTutorial}, "Back") : '';
            pagination.prev = (state.tutorialSlide > 1) ? React.createElement("button", {id: "azureTutPrev", onClick: this.__handleGoBackTutorialClick}, "Back") : pagination.prev;
            pagination.next = (state.tutorialSlide < 9) ? React.createElement("button", {id: "azureTutNext", onClick: this.__handleAdvanceTutorialClick}, "Next") : '';
            pagination.submit = (state.skipTutorial || state.tutorialSlide === 9) ? React.createElement("button", {type: "submit", style: {margin: "0 0 0 503px"}}, "Authenticate") : '';
        }

        return (
            React.createElement("div", {id: this.state.styleEl.id}, 
                intro, 
                tutorialSlide, 

                React.createElement("div", {id: "azure-tutorial-inputs"}, 
                    React.createElement("label", {htmlFor: "redirectURI", style: inputStyles.redirectURI}, "Redirect URI"), 
                    React.createElement("input", {ref: "redirectURI", name: "redirectURI", type: "text", value: redirectURI, onClick: this.__handleRedirectURIInputClick, style: inputStyles.redirectURI}), 
                    React.createElement("label", {htmlFor: "client_id", style: inputStyles.clientId}, "App Client ID"), 
                    React.createElement("input", {ref: "client_id", name: "client_id", type: "text", placeholder: "ab7c1052-1fe7-4642-91f6-065c94de25d4", style: inputStyles.clientId}), 
                    React.createElement("label", {htmlFor: "endpoint", style: inputStyles.endpoint}, "OAuth 2.0 Token Endpoint"), 
                    React.createElement("input", {ref: "endpoint", name: "endpoint", type: "text", placeholder: "https://login.microsoftonline.com/{your-uid}/oauth2/token?api-version=1.0", style: inputStyles.endpoint})
                ), 

                pagination.prev, " ", pagination.next, " ", pagination.submit
            )
        );
    },

    componentDidMount: function () {
        this.state.styleEl.commit();
    },

    /**
     * Modifies the state's `tutorialSlide` variable, advancing in the tutorial's walkthrough.
     */
    __handleAdvanceTutorialClick: function () {
        var state = this.state;

        console.log(this.refs);

        // Validate Inputs
        if (state.tutorialSlide === 5 && this.refs.client_id.getDOMNode().value === '') {
            this.refs.client_id.getDOMNode().focus();
            return;
        } else if (state.tutorialSlide === 8 && this.refs.client_id.getDOMNode().value === '') {
            this.refs.client_id.getDOMNode().focus();
            return;
        }

        if (!state.tutorialSlide || state.tutorialSlide >= tutorialSlides.length) {
            state.tutorialSlide = 1;
        } else {
            state.tutorialSlide = state.tutorialSlide + 1;
        }

        state.showRedirectURI = (state.tutorialSlide === 4);
        state.showClientIDInput = (state.tutorialSlide === 5);
        state.showEndpointInput = (state.tutorialSlide === 8);
        state.done = (state.tutorialSlide === tutorialSlides.length || state.skipTutorial);

        this.setState(state);
    },

    /**
     * Modifies the state's `tutorialSlide` variable, stepping back in the tutorial's walkthrough.
     */
    __handleGoBackTutorialClick: function () {
        var state = this.state;

        state.tutorialSlide = state.tutorialSlide - 1;

        state.showRedirectURI = (state.tutorialSlide === 4);
        state.showClientIDInput = (state.tutorialSlide === 5);
        state.showEndpointInput = (state.tutorialSlide === 8);

        this.setState(state);
    },

    /**
     * Select's the current's input contents for easier copying.
     * @param  {event} e
     */
    __handleRedirectURIInputClick: function (e) {
        InputSelection.selectAll(e.target);
    },

    /**
     * Returns the styles the individual input fields, depending on whether or not they should
     * be visible or not.
     * @return {object} A on object with three keys (redirectURI, clientID, endpoint) with styles
     */
    __getInputStyles: function () {
        var state = this.state,
            redirectURI = (state.skipTutorial || state.showRedirectURI) ? {} : {display: 'none', visibility: 'collapse'},
            clientId = (state.skipTutorial || state.showClientIDInput) ? {} : {display: 'none', visibility: 'collapse'},
            endpoint = (state.skipTutorial || state.showEndpointInput) ? {} : {display: 'none', visibility: 'collapse'};

        return {
            redirectURI: redirectURI,
            clientId: clientId,
            endpoint: endpoint
        };
    },

    /**
     * Skips the tutorial. The tutorial is already skipped and this method is called again, it
     * resets the tutorial.
     */
    __skipTutorial: function () {
        if (this.state.skipTutorial) {
            return this.setState({skipTutorial: null});
        } else {
            this.setState({
                skipTutorial: true,
                tutorialSlide: undefined
            });
        }
    }
});

module.exports = AzureCreateAppTutorial;