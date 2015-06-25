"use strict";

var React = require('react');

var AzureCreateAppTutorial = React.createClass({
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
            //styleEl: styleEl
        };
    },

    render: function () {
        var redirectURI = window.location.protocol + '//'+ window.location.host + '/oauth/azure',
            tutorialSlides = [''],
            inputStyles = this.__getInputStyles(),
            s = this.state,
            intro, nextButton, tutorialSlide;

        tutorialSlides.push(
            <div id="tutorial-01">
                <p><a href="https://manage.windowsazure.com">Sign into the Azure Management Portal</a> and select the "Active Directory" navigation item on the left.</p>
            </div>
        );

        tutorialSlides.push(
            <div id="tutorial-02">
                <p>Click on "Default Directory"</p>
            </div>
        );

        tutorialSlides.push(
            <div id="tutorial-03">
                <p>Click the "ADD" button at the bottom</p>
            </div>
        );

        tutorialSlides.push(
            <div id="tutorial-04">
                <p>Click "Add an application my organization is developing"</p>
            </div>
        );

        tutorialSlides.push(
            <div id="tutorial-05">
                <p>Give the application a name such as "flynn-installer"</p>
                <p>Select the "NATIVE CLIENT APPLICATION" option</p>
                <p>Click the arrow in the bottom right of the modal to continue</p>
            </div>
        );

        tutorialSlides.push(
            <div id="tutorial-06">
                <p>Set "<input type="text" value={redirectURI} data-selectable onClick={this.__handleRedirectURIInputClick} style={{
                        width: Math.ceil(((redirectURI.length * 16) / 2) - 22) + 'px'
                    }} />" as the "REDIRECT URI"</p>
                <p>Click the checkmark in the bottom right to continue</p>
            </div>
        );

        tutorialSlides.push(
            <div id="tutorial-07">
                <label>
                    <p>Click the "CONFIGURE" tab</p>
                    <p>Copy the "CLIENT ID" into the input below</p>
                    
                </label>
            </div>
        );

        tutorialSlides.push(
            <div id="tutorial-08">
                <p>Scroll to the bottom of the configuration page</p>
                <p>Click the green "Add application" button</p>
            </div>
        );

        tutorialSlides.push(
            <div id="tutorial-09">
                <p>Scroll to the bottom of the configuration page</p>
                <p>Click the green "Add application" button</p>
            </div>
        );

        tutorialSlides.push(
            <div id="tutorial-10">
                <p>Click the "Windows Azure Service ..." option</p>
                <p>Click the checkmark in the bottom right to continue</p>
            </div>
        );

        tutorialSlides.push(
            <div id="tutorial-11">
                <p>Click the "Delegated Permissions" dropdown</p>
                <p>Check "Access Azure Service Management"</p>
            </div>
        );

        tutorialSlides.push(
            <div id="tutorial-12">
                <p>Click the "Save" button</p>
            </div>
        );

        tutorialSlides.push(
            <div id="tutorial-13">
                <p>Click on the back arrow button to go back to the "APPLICATIONS" tab click and the "ENDPOINTS" button at the bottom</p>
                <p>Copy your OAuth 2.0 Token Endpoint into the input below</p>
            </div>
        );

        intro = (
            <div id="azure-tutorial-intro">
                <p>To use the installer, you first need to create an Azure application able to controll your resources on Flynns behalf.</p>
                <button onClick={this.__handleAdvanceTutorialClick}>Walk me through it</button>
                <button onClick={this.__skipTutorial}>Skip tutorial</button>
            </div>
        );

        intro = (s.tutorialSlide || s.skipTutorial) ? null : intro;
        tutorialSlide = (s.tutorialSlide) ? tutorialSlides[s.tutorialSlide] : null;

        if (s.tutorialSlide && s.tutorialSlide < 13) {
            nextButton = <a id="azureTutNext" onClick={this.__handleAdvanceTutorialClick} href="#">Next</a>
        }

        return (
            <div>
                {intro}
                {tutorialSlide}
                {nextButton}

                <div id="azure-tutorial-inputs">
                    <input name="client_id" type="text" placeholder="CLIENT ID" style={inputStyles.clientId} />
                    <input name="endpoint" type="text" placeholder="https://login.microsoftonline.com/{your-uid}/oauth2/token?api-version=1.0" style={inputStyles.endpoint} />
                </div>
            </div>
        );
    },

    componentDidMount: function () {
        // this.state.styleEl.commit();
    },

    __handleAdvanceTutorialClick: function () {
        var s = this.state;

        if (!s.tutorialSlide || s.tutorialSlide >= 13) {
            s.tutorialSlide = 1;
        } else {
            s.tutorialSlide = s.tutorialSlide + 1;
        }

        this.setState(s);
    },

    __handleRedirectURIInputClick: function (e) {
        InputSelection.selectAll(e.target);
    },

    __getInputStyles: function () {
        var s = this.state,
            clientId = (s.skipTutorial || s.showClientIDInput) ? {} : {display: 'none', visibility: 'collapse'},
            endpoint = (s.skipTutorial || s.showEndpointInput) ? {} : {display: 'none', visibility: 'collapse'};

        return {
            clientId: clientId,
            endpoint: endpoint
        }
    },

    __skipTutorial: function () {
        var s = this.state;

        s.skipTutorial = true;

        this.setState(s);
    }
});

module.exports = AzureCreateAppTutorial;