"use strict";

var React = require('react');

var AzureCreateAppTutorial = React.createClass({
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
                }]
            ]
        });

        return {
            styleEl: styleEl
        };
    },

    render: function () {
        var redirectURI = window.location.protocol + '//'+ window.location.host + '/oauth/azure',
            tutorialSlides = [''],
            inputStyles = this.__getInputStyles(),
            s = this.state,
            intro, pagination = {}, tutorialSlide;

        tutorialSlides.push(
            <div id="tutorial-01">
                <img src={AssetPaths["azure-1.gif"]} style={{
                        width: 699,
                        height: 378
                    }} /> 
                <p><a href="https://manage.windowsazure.com">Sign into the Azure Management Portal</a> and select the "Active Directory" navigation item on the left.</p>
            </div>
        );

        tutorialSlides.push(
            <div id="tutorial-02">
                <img src={AssetPaths["azure-2.gif"]} style={{
                        width: 699,
                        height: 378
                    }} />
                <p>Click on "Default Directory" (or the one you want to use) and select the "Applications" navigation tab.</p>
            </div>
        );

        tutorialSlides.push(
            <div id="tutorial-03">
            <img src={AssetPaths["azure-3.gif"]} style={{
                        width: 699,
                        height: 378
                    }} />
                <p>Click the "Add" button at the bottom and select "Add an application my organization is developing". For the name, choose "flynn-installer" (or something else), then select "Native Client Application".</p>
            </div>
        );

        tutorialSlides.push(
            <div id="tutorial-04">
            <img src={AssetPaths["azure-4.gif"]} style={{
                        width: 699,
                        height: 378
                    }} />
                <p>As Redirect URI, use the value below, and create the application by hitting the checkmark in the lower right.</p>
            </div>
        );


        tutorialSlides.push(
            <div id="tutorial-05">
            <img src={AssetPaths["azure-5.gif"]} style={{
                        width: 699,
                        height: 378
                    }} />
                <p>Click the "Configure" tab and copy the "Client ID" into the input field below.</p>
            </div>
        );

        tutorialSlides.push(
            <div id="tutorial-06">
                <img src={AssetPaths["azure-6.gif"]} style={{
                        width: 699,
                        height: 402
                    }} />
                <p>Next, we need to allow the created app to control your Azure account. Scroll to the bottom of the configuration page and click the green "Add application" button. In the popup, select the "Windows Azure Service Management API" and click the checkmark in the lower right.</p>
            </div>
        );


        tutorialSlides.push(
            <div id="tutorial-07">
                <img src={AssetPaths["azure-7.gif"]} style={{
                        width: 699,
                        height: 402
                    }} />
                <p>Click the "Delegated Permissions" dropdown and check "Access Azure Service Management". Then, save the configuration.</p>
            </div>
        );

        tutorialSlides.push(
            <div id="tutorial-08">
                <img src={AssetPaths["azure-8.gif"]} style={{
                        width: 699,
                        height: 472
                    }} />
                <p>Click on the back arrow button to go back to the "APPLICATIONS" tab click and the "ENDPOINTS" button at the bottom. Then, copy your OAuth 2.0 Token Endpoint into the input below.</p>
            </div>
        );

        tutorialSlides.push(
            <div id="tutorial-09">
                <img src={AssetPaths["azure-done.png"]} style={{
                        width: 699,
                        height: 256
                    }} />
                <p>You now created an appliation able to control your Azure resources - one that this Flynn installer can use. You can connect this installer and your new app by clicking "Authenticate" below - lets install Flynn!</p>
            </div>
        );

        intro = (
            <div id="azure-tutorial-intro">
                <p>To use the installer, you first need to create an Azure application able to controll your resources on Flynns behalf.</p>
                <button onClick={this.__handleAdvanceTutorialClick}>Walk me through it</button><br />
                <button onClick={this.__skipTutorial}>Skip tutorial</button>
            </div>
        );

        intro = (s.tutorialSlide || s.skipTutorial) ? null : intro;
        tutorialSlide = (s.tutorialSlide) ? tutorialSlides[s.tutorialSlide] : null;

        if (s.tutorialSlide || s.skipTutorial) {
            pagination.prev = (s.skipTutorial && !s.tutorialSlide) ? <button id="azureTutPrev" onClick={this.__skipTutorial}>Back</button> : '';
            pagination.prev = (s.tutorialSlide > 1) ? <button id="azureTutPrev" onClick={this.__handleAdvanceTutorialClick}>Back</button> : pagination.prev;
            pagination.next = (s.tutorialSlide < 9) ? <button id="azureTutNext" onClick={this.__handleAdvanceTutorialClick}>Next</button> : '';
            pagination.submit = (s.skipTutorial || s.tutorialSlide === 9) ? <button type="submit" style={{margin: "0 0 0 503px"}}>Authenticate</button> : '';
        }

        return (
            <div id={this.state.styleEl.id}>
                {intro}
                {tutorialSlide}

                <div id="azure-tutorial-inputs">
                    <label for="redirectURI" style={inputStyles.redirectURI}>Redirect URI</label>
                    <input name="redirectURI" type="text" value={redirectURI} onClick={this.__handleRedirectURIInputClick}  style={inputStyles.redirectURI} />
                    <label for="client_id" style={inputStyles.clientId}>App Client ID</label>
                    <input name="client_id" type="text" placeholder="ab7c1052-1fe7-4642-91f6-065c94de25d4" style={inputStyles.clientId} />
                    <label for="endpoint" style={inputStyles.endpoint}>OAuth 2.0 Token Endpoint</label>
                    <input name="endpoint" type="text" placeholder="https://login.microsoftonline.com/{your-uid}/oauth2/token?api-version=1.0" style={inputStyles.endpoint} />
                </div>

                {pagination.prev} {pagination.next} {pagination.submit}
            </div>
        );
    },

    componentDidMount: function () {
        this.state.styleEl.commit();
    },

    __handleAdvanceTutorialClick: function (e) {
        var s = this.state;

        // Validate Inputs
        if (s.tutorialSlide === 5 && document.querySelector('[name=client_id]').value === '') {
            document.querySelector('[name=client_id]').focus();
            return;
        } else if (s.tutorialSlide === 8 && document.querySelector('[name=endpoint]').value === '') {
            document.querySelector('[name=endpoint]').focus();
            return;
        }

        if (!s.tutorialSlide || s.tutorialSlide >= 13) {
            s.tutorialSlide = 1;
        } else {
            s.tutorialSlide = (e.target.id === 'azureTutNext') ? s.tutorialSlide + 1 : s.tutorialSlide - 1;
        }

        s.showRedirectURI = (s.tutorialSlide === 4);
        s.showClientIDInput = (s.tutorialSlide === 5);
        s.showEndpointInput = (s.tutorialSlide === 8);
        s.done = (s.tutorialSlide === 9 || s.skipTutorial);

        this.setState(s);
    },

    __handleRedirectURIInputClick: function (e) {
        InputSelection.selectAll(e.target);
    },

    __getInputStyles: function () {
        var s = this.state,
            redirectURI = (s.skipTutorial || s.showRedirectURI) ? {margin: '0 0 5px 0'} : {display: 'none', visibility: 'collapse'},
            clientId = (s.skipTutorial || s.showClientIDInput) ? {margin: '0 0 5px 0'} : {display: 'none', visibility: 'collapse'},
            endpoint = (s.skipTutorial || s.showEndpointInput) ? {margin: '0 0 5px 0'} : {display: 'none', visibility: 'collapse'};

        return {
            redirectURI: redirectURI,
            clientId: clientId,
            endpoint: endpoint
        }
    },

    __skipTutorial: function () {
        if (this.state.skipTutorial) {
            return this.setState({skipTutorial: false});
        } else {
            this.setState({
                skipTutorial: true,
                tutorialSlide: undefined
            });
        }
    }
});

module.exports = AzureCreateAppTutorial;