/// <reference types='nativewind/types' />
import React from 'react';
import {useState} from 'react';
import {Text, View, TouchableOpacity, Modal, TextInput} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface props {
    isVisible: boolean;
}

const Home = (props: props): JSX.Element => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const passwordRef = React.createRef<TextInput>();
    const loginRef = React.createRef<TouchableOpacity>();
    const visible: boolean = props.isVisible;
    return (
        <Modal visible={visible}>
            <KeyboardAwareScrollView>
                <View className="flex flex-col w-screen h-screen justify-end">
                    <View className="basis-1/2 bg-[#2c3e1b]/70 rounded-t-2xl">
                        <Text className="text-2xl self-center m-5 text-white">
                            Welcome to the App!
                        </Text>
                        <View className="flex flex-col w-72 mx-auto">
                            <View className="divide-y-2 divide-slate-700">
                                <TextInput
                                    className="text-black bg-white rounded-t-lg"
                                    placeholder="Username"
                                    onChangeText={setUsername}
                                    returnKeyType="next"
                                    blurOnSubmit={true}
                                    autoFocus={true}
                                    value={username}
                                    onSubmitEditing={_ => {
                                        passwordRef.current?.focus();
                                    }}
                                />
                                <TextInput
                                    className="text-black bg-white rounded-b-lg"
                                    onChangeText={setPassword}
                                    placeholder="Password"
                                    ref={passwordRef}
                                    autoFocus={true}
                                    value={password}
                                    onSubmitEditing={_ => {
                                        // loginRef.current?.click();
                                    }}
                                />
                            </View>
                            <Text className="text-white self-end mx-4 mt-1">
                                Forgot the password?
                            </Text>
                            <TouchableOpacity
                                className="m-5 p-3 rounded-full bg-[#df7515]"
                                ref={loginRef}>
                                <Text className="self-center text-white">
                                    Log in
                                </Text>
                            </TouchableOpacity>
                            <View className="flex flex-row w-full">
                                <Text className="grow text-white">
                                    Don't have an account?
                                </Text>
                                <Text className="text-white">
                                    Register now!
                                </Text>
                            </View>
                        </View>
                        {/* <Button title="Sign Up" /> */}
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </Modal>
    );
};

export default Home;
