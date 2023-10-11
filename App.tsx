/// <reference types='nativewind/types' />
import React from 'react';
import {View} from 'react-native';
// import {useState} from 'react';
// import {Text, View, TouchableOpacity, Modal, TextInput} from 'react-native';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Home from './Component/Home/Home';

function App(): JSX.Element {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const passwordRef = React.createRef<TextInput>();
    // const loginRef = React.createRef<TouchableOpacity>();

    return (
        <React.StrictMode>
            <View>
                <Home isVisible={true} />
                <Home isVisible={true} />
            </View>
        </React.StrictMode>
    );
}

export default App;
