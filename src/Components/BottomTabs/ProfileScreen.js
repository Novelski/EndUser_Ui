import {
  Avatar,
  Caption,
  Text,
  Title,
  TouchableRipple,
} from 'react-native-paper';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image source={require('../../assets/img/2.png')} size={80} />
          <View style={{marginLeft: 20, marginTop: 15, marginBottom: 5}}>
            <Title style={styles.title}>Bharat</Title>
            <Caption style={styles.caption}>@abd032</Caption>
          </View>
        </View>
      </View>
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icons name="map-marker-radius" size={25} color="#777777" />
          <Text style={{color: '#777777', marginLeft: 20, fontSize: 20}}>
            Hyderabad
          </Text>
        </View>
        <View style={styles.row}>
          <Icons name="map-marker-radius" size={25} color="#777777" />
          <Text style={{color: '#777777', marginLeft: 20, fontSize: 20}}>
            Telangana
          </Text>
        </View>
        <View style={styles.row}>
          <Icons name="phone" size={25} color="#777777" />
          <Text style={{color: '#777777', marginLeft: 20, fontSize: 20}}>
            +91-9999888800
          </Text>
        </View>
        <View style={styles.row}>
          <Icons name="email" size={25} color="#777777" />
          <Text style={{color: '#777777', marginLeft: 20, fontSize: 20}}>
            abcd@gmail.com
          </Text>
        </View>
      </View>
      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {borderRightColor: '#dddddd', borderRightWidth: 1},
          ]}>
          <Title>100</Title>
          <Caption>Site Viewed</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>10</Title>
          <Caption>Site Visited</Caption>
        </View>
      </View>
      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icons name="heart-outline" color="#ff6347" size={25} />
            <Text style={styles.menuItemText}>Your Places Visited</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icons name="account-check-outline" color="#ff6347" size={25} />
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="settings-outline" color="#ff6347" size={25} />
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
