import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {RadioButton, Card} from 'react-native-paper';

const CheckOut = () => {
  const [checked, setChecked] = React.useState('first');

  return (
    <View>
      <View style={{padding: 15}}>
        <View style={{flexDirection: 'row'}}>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
          />
          <Text style={{paddingTop: 2, fontSize: 20, fontWeight: 'bold'}}>
            Pay On Delivery
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <RadioButton
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
          />
          <Text style={{paddingTop: 2, fontSize: 20, fontWeight: 'bold'}}>
            Pay Online
          </Text>
        </View>
      </View>
      <View style={{padding: 20}}>
        <Card elevation={5} style={{padding: 10}}>
          <Text style={{fontWeight: 'bold', fontSize: 15}}>Amount Details</Text>
          <View
            style={{
              borderTopColor: '#dddddd',
              borderTopWidth: 1.7,
              marginTop: 4,
            }}>
            <View style={{flexDirection: 'row', paddingLeft: 10}}>
              <Text style={{fontWeight: 'bold'}}>Amount</Text>
              <Text
                style={{position: 'absolute', right: 0, fontWeight: 'bold'}}>
                200 ₹
              </Text>
            </View>
            <View style={{flexDirection: 'row', paddingLeft: 10}}>
              <Text style={{fontWeight: 'bold'}}>G.S.T(18.5%)</Text>
              <Text
                style={{position: 'absolute', right: 0, fontWeight: 'bold'}}>
                37 ₹
              </Text>
            </View>
          </View>
          <View
            style={{
              borderTopColor: '#dddddd',
              borderTopWidth: 1.7,
              marginTop: 4,
            }}>
            <View style={{flexDirection: 'row', paddingLeft: 10}}>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>
                Total Amount
              </Text>
              <Text
                style={{position: 'absolute', right: 0, fontWeight: 'bold'}}>
                237 ₹
              </Text>
            </View>
          </View>
        </Card>
        <TouchableOpacity
          style={{
            padding: 15,
            borderRadius: 10,
            backgroundColor: '#d02860',
            alignItems: 'center',
            marginTop: 10,
          }}
          onPress={() => navigation.navigate('CheckOut')}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckOut;
