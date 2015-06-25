/*!
 * react-flynn-azure-tutorial 0.1.0 (dev build at Thu, 25 Jun 2015 16:04:27 GMT) - 
 * MIT Licensed
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),n.ReactFlynnAzureTutorial=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var React = (window.React);

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
},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvYXp1cmV0dXRvcmlhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBSZWFjdCA9ICh3aW5kb3cuUmVhY3QpO1xuXG52YXIgQXp1cmVDcmVhdGVBcHBUdXRvcmlhbCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJBenVyZUNyZWF0ZUFwcFR1dG9yaWFsXCIsXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4vKiAgICAgICAgdmFyIHN0eWxlRWwgPSBTaGVldC5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIG1hcmdpblRvcDogJzFyZW0nLFxuICAgICAgICAgICAgc2VsZWN0b3JzOiBbXG4gICAgICAgICAgICAgICAgWyc+IGxpID4gaW1nJywge1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAndGV4dC10b3AnLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgIzMzMydcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBbJ2lucHV0W2RhdGEtc2VsZWN0YWJsZV0nLCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTsqL1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdHlsZUVsOiBzdHlsZUVsXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVkaXJlY3RVUkkgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nKyB3aW5kb3cubG9jYXRpb24uaG9zdCArICcvb2F1dGgvYXp1cmUnLFxuICAgICAgICAgICAgdHV0b3JpYWxTbGlkZSwgdHV0b3JpYWxTbGlkZXMgPSBbXTtcblxuICAgICAgICB0dXRvcmlhbFNsaWRlcy5wdXNoKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7aWQ6IFwidHV0b3JpYWwtMDFcIn0sIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge3NyYzogQXNzZXRQYXRoc1tcImF6dXJlLWFwcC0wLnBuZ1wiXSwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMTlcbiAgICAgICAgICAgICAgICB9fSksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRXh0ZXJuYWxMaW5rLCB7aHJlZjogXCJodHRwczovL21hbmFnZS53aW5kb3dzYXp1cmUuY29tXCJ9LCBcIlNpZ24gaW50byB0aGUgQXp1cmUgTWFuYWdlbWVudCBQb3J0YWxcIiksIFwiIGFuZCBzZWxlY3QgdGhlIFxcXCJBY3RpdmUgRGlyZWN0b3J5XFxcIiBuYXZpZ2F0aW9uIGl0ZW0gb24gdGhlIGxlZnQuXCIpXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG5cbiAgICAgICAgdHV0b3JpYWxTbGlkZXMucHVzaChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2lkOiBcInR1dG9yaWFsLTAyXCJ9LCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtzcmM6IEFzc2V0UGF0aHNbXCJhenVyZS1hcHAtMS5wbmdcIl0sIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjM4XG4gICAgICAgICAgICAgICAgfX0pLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIkNsaWNrIG9uIFxcXCJEZWZhdWx0IERpcmVjdG9yeVxcXCJcIilcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcblxuICAgICAgICB0dXRvcmlhbFNsaWRlcy5wdXNoKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7aWQ6IFwidHV0b3JpYWwtMDNcIn0sIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge3NyYzogQXNzZXRQYXRoc1tcImF6dXJlLWFwcC0yLnBuZ1wiXSwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTVcbiAgICAgICAgICAgICAgICAgICAgfX0pLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtzcmM6IEFzc2V0UGF0aHNbXCJhenVyZS1hcHAtMi0yLnBuZ1wiXSwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY1OSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDJcbiAgICAgICAgICAgICAgICB9fSksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiQ2xpY2sgdGhlIFxcXCJBRERcXFwiIGJ1dHRvbiBhdCB0aGUgYm90dG9tXCIpXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG5cbiAgICAgICAgdHV0b3JpYWxTbGlkZXMucHVzaChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2lkOiBcInR1dG9yaWFsLTA0XCJ9LCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtzcmM6IEFzc2V0UGF0aHNbXCJhenVyZS1hcHAtMy5wbmdcIl0sIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NTksXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDk4XG4gICAgICAgICAgICAgICAgfX0pLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIkNsaWNrIFxcXCJBZGQgYW4gYXBwbGljYXRpb24gbXkgb3JnYW5pemF0aW9uIGlzIGRldmVsb3BpbmdcXFwiXCIpXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG5cbiAgICAgICAgdHV0b3JpYWxTbGlkZXMucHVzaChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2lkOiBcInR1dG9yaWFsLTA1XCJ9LCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtzcmM6IEFzc2V0UGF0aHNbXCJhenVyZS1hcHAtNC5wbmdcIl0sIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NTksXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDcxXG4gICAgICAgICAgICAgICAgfX0pLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIkdpdmUgdGhlIGFwcGxpY2F0aW9uIGEgbmFtZSBzdWNoIGFzIFxcXCJmbHlubi1pbnN0YWxsZXJcXFwiXCIpLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIlNlbGVjdCB0aGUgXFxcIk5BVElWRSBDTElFTlQgQVBQTElDQVRJT05cXFwiIG9wdGlvblwiKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJDbGljayB0aGUgYXJyb3cgaW4gdGhlIGJvdHRvbSByaWdodCBvZiB0aGUgbW9kYWwgdG8gY29udGludWVcIilcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcblxuICAgICAgICB0dXRvcmlhbFNsaWRlcy5wdXNoKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7aWQ6IFwidHV0b3JpYWwtMDZcIn0sIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge3NyYzogQXNzZXRQYXRoc1tcImF6dXJlLWFwcC01LnBuZ1wiXSwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY1OSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NzFcbiAgICAgICAgICAgICAgICB9fSksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiU2V0IFxcXCJcIiwgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHt0eXBlOiBcInRleHRcIiwgdmFsdWU6IHJlZGlyZWN0VVJJLCBcImRhdGEtc2VsZWN0YWJsZVwiOiB0cnVlLCBvbkNsaWNrOiB0aGlzLl9faGFuZGxlUmVkaXJlY3RVUklJbnB1dENsaWNrLCBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IE1hdGguY2VpbCgoKHJlZGlyZWN0VVJJLmxlbmd0aCAqIDE2KSAvIDIpIC0gMjIpICsgJ3B4J1xuICAgICAgICAgICAgICAgICAgICB9fSksIFwiXFxcIiBhcyB0aGUgXFxcIlJFRElSRUNUIFVSSVxcXCJcIiksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiQ2xpY2sgdGhlIGNoZWNrbWFyayBpbiB0aGUgYm90dG9tIHJpZ2h0IHRvIGNvbnRpbnVlXCIpXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG5cbiAgICAgICAgdHV0b3JpYWxTbGlkZXMucHVzaChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2lkOiBcInR1dG9yaWFsLTA3XCJ9LCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtzcmM6IEFzc2V0UGF0aHNbXCJhenVyZS1hcHAtNi5wbmdcIl0sIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NTksXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjc4XG4gICAgICAgICAgICAgICAgfX0pLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgbnVsbCwgXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiQ2xpY2sgdGhlIFxcXCJDT05GSUdVUkVcXFwiIHRhYlwiKSwgXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiQ29weSB0aGUgXFxcIkNMSUVOVCBJRFxcXCIgaW50byB0aGUgaW5wdXQgYmVsb3dcIilcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuXG4gICAgICAgIHR1dG9yaWFsU2xpZGVzLnB1c2goXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtpZDogXCJ0dXRvcmlhbC0wOFwifSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7c3JjOiBBc3NldFBhdGhzW1wiYXp1cmUtYXBwLTcucG5nXCJdLCBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjU5LFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1NVxuICAgICAgICAgICAgICAgIH19KSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJTY3JvbGwgdG8gdGhlIGJvdHRvbSBvZiB0aGUgY29uZmlndXJhdGlvbiBwYWdlXCIpLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIkNsaWNrIHRoZSBncmVlbiBcXFwiQWRkIGFwcGxpY2F0aW9uXFxcIiBidXR0b25cIilcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcblxuICAgICAgICB0dXRvcmlhbFNsaWRlcy5wdXNoKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7aWQ6IFwidHV0b3JpYWwtMDlcIn0sIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge3NyYzogQXNzZXRQYXRoc1tcImF6dXJlLWFwcC03LnBuZ1wiXSwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY1OSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTVcbiAgICAgICAgICAgICAgICB9fSksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiU2Nyb2xsIHRvIHRoZSBib3R0b20gb2YgdGhlIGNvbmZpZ3VyYXRpb24gcGFnZVwiKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJDbGljayB0aGUgZ3JlZW4gXFxcIkFkZCBhcHBsaWNhdGlvblxcXCIgYnV0dG9uXCIpXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG5cbiAgICAgICAgdHV0b3JpYWxTbGlkZXMucHVzaChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2lkOiBcInR1dG9yaWFsLTEwXCJ9LCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtzcmM6IEFzc2V0UGF0aHNbXCJhenVyZS1hcHAtOS5wbmdcIl0sIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NTksXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDE1XG4gICAgICAgICAgICAgICAgfX0pLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIkNsaWNrIHRoZSBcXFwiV2luZG93cyBBenVyZSBTZXJ2aWNlIC4uLlxcXCIgb3B0aW9uXCIpLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIkNsaWNrIHRoZSBjaGVja21hcmsgaW4gdGhlIGJvdHRvbSByaWdodCB0byBjb250aW51ZVwiKVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuXG4gICAgICAgIHR1dG9yaWFsU2xpZGVzLnB1c2goXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtpZDogXCJ0dXRvcmlhbC0xMVwifSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7c3JjOiBBc3NldFBhdGhzW1wiYXp1cmUtYXBwLTEwLnBuZ1wiXSwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY1OSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNjlcbiAgICAgICAgICAgICAgICB9fSksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiQ2xpY2sgdGhlIFxcXCJEZWxlZ2F0ZWQgUGVybWlzc2lvbnNcXFwiIGRyb3Bkb3duXCIpLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIkNoZWNrIFxcXCJBY2Nlc3MgQXp1cmUgU2VydmljZSBNYW5hZ2VtZW50XFxcIlwiKVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuXG4gICAgICAgIHR1dG9yaWFsU2xpZGVzLnB1c2goXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtpZDogXCJ0dXRvcmlhbC0xMlwifSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7c3JjOiBBc3NldFBhdGhzW1wiYXp1cmUtYXBwLTExLnBuZ1wiXSwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY1OSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5M1xuICAgICAgICAgICAgICAgIH19KSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJDbGljayB0aGUgXFxcIlNhdmVcXFwiIGJ1dHRvblwiKVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuXG4gICAgICAgIHR1dG9yaWFsU2xpZGVzLnB1c2goXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtpZDogXCJ0dXRvcmlhbC0xM1wifSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7c3JjOiBBc3NldFBhdGhzW1wiYXp1cmUtYXBwLTEyLnBuZ1wiXSwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY1OSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0ODZcbiAgICAgICAgICAgICAgICB9fSksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiQ2xpY2sgb24gdGhlIGJhY2sgYXJyb3cgYnV0dG9uIHRvIGdvIGJhY2sgdG8gdGhlIFxcXCJBUFBMSUNBVElPTlNcXFwiIHRhYiBjbGljayBhbmQgdGhlIFxcXCJFTkRQT0lOVFNcXFwiIGJ1dHRvbiBhdCB0aGUgYm90dG9tXCIpLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIkNvcHkgeW91ciBPQXV0aCAyLjAgVG9rZW4gRW5kcG9pbnQgaW50byB0aGUgaW5wdXQgYmVsb3dcIilcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcblxuICAgICAgICB0dXRvcmlhbFNsaWRlID0gKHRoaXMuc3RhdGUudHV0b3JpYWxTbGlkZSkgPyB0dXRvcmlhbFNsaWRlc1t0aGlzLnN0YXRlLnR1dG9yaWFsU2xpZGVdIDogbnVsbDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7aWQ6IHRoaXMuc3RhdGUuc3R5bGVFbC5pZH0sIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2lkOiBcImF6dXJlLXR1dG9yaWFsLWludHJvXCJ9LCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIlRvIHVzZSBpbnN0YWxsZXIsIHlvdSBmaXJzdCBuZWVkIHRvIGNyZWF0ZSBhbiBBenVyZSBhcHBsaWNhdGlvbiBhYmxlIHRvIGNvbnRyb2xsIHlvdXIgcmVzb3VyY2VzIG9uIEZseW5ucyBiZWhhbGYuXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge29uQ2xpY2s6IHRoaXMuX19oYW5kbGVBZHZhbmNlVHV0b3JpYWxDbGlja30sIFwiQ2xpY2sgaGVyZSBmb3IgYSBzdGVwLWJ5LXN0ZXAgdHV0b3JpYWxcIiksIFwiIG9yIGVudGVyIHlvdXIgZXhpc3RpbmcgY29uZmlndXJhdGlvbiBiZWxvdzpcIilcbiAgICAgICAgICAgICAgICApLCBcblxuICAgICAgICAgICAgICAgIHR1dG9yaWFsU2xpZGUsIFxuXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7aWQ6IFwiYXp1cmUtdHV0b3JpYWwtaW5wdXRzXCJ9LCBcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtuYW1lOiBcImNsaWVudF9pZFwiLCB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiQ0xJRU5UIElEXCJ9KSwgXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7bmFtZTogXCJlbmRwb2ludFwiLCB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tL3t5b3VyLXVpZH0vb2F1dGgyL3Rva2VuP2FwaS12ZXJzaW9uPTEuMFwifSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuc3R5bGVFbC5jb21taXQoKTtcbiAgICB9LFxuXG4gICAgX19oYW5kbGVBZHZhbmNlVHV0b3JpYWxDbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmICghc3RhdGUudHV0b3JpYWxTbGlkZSkge1xuICAgICAgICAgICAgc3RhdGUudHV0b3JpYWxTbGlkZSA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0ZS50dXRvcmlhbFNsaWRlID0gc3RhdGUudHV0b3JpYWxTbGlkZSArIDE7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICB9LFxuXG4gICAgX19oYW5kbGVSZWRpcmVjdFVSSUlucHV0Q2xpY2s6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIElucHV0U2VsZWN0aW9uLnNlbGVjdEFsbChlLnRhcmdldCk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXp1cmVDcmVhdGVBcHBUdXRvcmlhbDsiXX0=
