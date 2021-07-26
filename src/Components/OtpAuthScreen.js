import {
  Button,
  FlatList,
  KeyboardAvoidingView,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

export function OtpAuth({navigation}) {
  let textInput = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState();
  const [focusInput, setFocusInput] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const onShowHiddenModal = () => {
    setModalVisible(!modalVisible);
  };
  const onChangePhone = number => {
    setPhoneNumber(number);
  };

  const onChangeFocus = () => {
    setFocusInput(true);
  };

  const onChangeBlur = () => {
    setFocusInput(false);
  };

  const onPressContinue = () => {
    if (phoneNumber) {
      navigation.navigate('Otp');
    }
  };

  useEffect(() => {
    textInput.focus();
  }, []);
  const filterInputStyle = value => {};

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={50}
        behavior={'padding'}
        style={styles.containerAvoidView}>
        <Text style={styles.textTitle}>
          {'Please Enter Your Mobile Number'}
        </Text>
        <View
          style={[
            styles.containerInput,
            {
              borderBottomColor: focusInput ? '#244DB7' : '#ffffff',
            },
          ]}>
          <TouchableOpacity onPress={onShowHiddenModal}>
            <View style={styles.openDialog}>
              <Text>{'+91 |'}</Text>
            </View>
          </TouchableOpacity>
          <TextInput
            ref={input => (textInput = input)}
            style={styles.phoneInput}
            placeholder="994 656 5698"
            keyboardType="number-pad"
            value={phoneNumber}
            onChangeText={onChangePhone}
            secureTextEntry={false}
            onFocus={onChangeFocus}
            onBlur={onChangeBlur}
            autoFocus={focusInput}
          />
        </View>
        <View style={styles.viewBottom}>
          <TouchableOpacity onPress={onPressContinue}>
            <View
              style={[
                styles.btnContinue,
                {
                  backgroundColor: phoneNumber ? '#244DB7' : 'grey',
                },
              ]}>
              <Text style={styles.textContinue}>Continue</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerAvoidView: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  textTitle: {
    marginBottom: 50,
    marginTop: 50,
    fontSize: 15,
  },
  containerInput: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    borderBottomWidth: 1.5,
  },
  openDialog: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneInput: {
    marginLeft: 5,
    flex: 1,
    height: 50,
    color: 'black',
  },
  viewBottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
    alignItems: 'center',
  },
  btnContinue: {
    width: 150,
    height: 50,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContinue: {
    color: '#ffffff',
    alignItems: 'center',
  },
  modalContainer: {
    paddingTop: 15,
    paddingLeft: 25,
    paddingRight: 25,
    flex: 1,
    backgroundColor: 'white',
  },
  filterInputStyle: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
    color: '#424242',
  },
});
