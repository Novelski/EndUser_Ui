import {Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {Card} from 'react-native-paper';
import React from 'react';

const CartScreen = ({navigation}) => {
  return (
    <View style={{padding: 10}}>
      <Card elevation={5} style={{padding: 10}}>
        <View style={{flexDirection: 'row'}}>
          <Card.Cover
            style={{height: 170, width: 170}}
            source={{
              uri: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            }}
          />
          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row', paddingLeft: 10}}>
              <Text style={{fontWeight: 'bold'}}>Price</Text>
              <Text style={{position: 'absolute', right: -35}}>2.15 Cr</Text>
            </View>
            <View style={{flexDirection: 'row', paddingLeft: 10}}>
              <Text style={{fontWeight: 'bold'}}>Builder</Text>
              <Text style={{position: 'absolute', right: -35}}>SrM</Text>
            </View>

            <View
              style={{flexDirection: 'row', paddingLeft: 10, paddingTop: 80}}>
              <Text style={{fontWeight: 'bold'}}>Price Per Visit</Text>
              <Text
                style={{
                  position: 'relative',
                  right: -35,
                  color: 'red',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                100 ₹
              </Text>
            </View>
          </View>
        </View>
      </Card>
      <View style={{paddingTop: 10}}>
        <Card elevation={5} style={{padding: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Card.Cover
              style={{height: 170, width: 170}}
              source={{
                uri: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              }}
            />
            <View style={{flexDirection: 'column'}}>
              <View style={{flexDirection: 'row', paddingLeft: 10}}>
                <Text style={{fontWeight: 'bold'}}>Price</Text>
                <Text style={{position: 'absolute', right: -35}}>2.15 Cr</Text>
              </View>
              <View style={{flexDirection: 'row', paddingLeft: 10}}>
                <Text style={{fontWeight: 'bold'}}>Builder</Text>
                <Text style={{position: 'absolute', right: -35}}>SrM</Text>
              </View>

              <View
                style={{flexDirection: 'row', paddingLeft: 10, paddingTop: 80}}>
                <Text style={{fontWeight: 'bold'}}>Price Per Visit</Text>
                <Text
                  style={{
                    position: 'relative',
                    right: -35,
                    color: 'red',
                    fontWeight: 'bold',
                    fontSize: 20,
                  }}>
                  100 ₹
                </Text>
              </View>
            </View>
          </View>
        </Card>
      </View>
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
          CheckOut
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {padding: 10, backgroundColor: 'white', width: 20},
  cover: {padding: 10, backgroundColor: 'white'},
});
