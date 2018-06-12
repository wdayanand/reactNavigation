import React, { Component } from 'react';
import App from './App';
import { COLOR, ThemeProvider } from 'react-native-material-ui';

// you can set your style right here, it'll be propagated to application
const uiTheme = {
    palette: {
        primaryColor: '#3D4246',
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
};

export default class Main extends Component {
    render() {
        return (
            <ThemeProvider uiTheme={uiTheme}>
                <App />
            </ThemeProvider>
        );
    }
}