import {Image, View} from 'react-native';

import React from 'react';
import {SearchBar} from 'react-native-elements';

export default class SearchBarCom extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({search});
  };

  render() {
    const {search} = this.state;

    return (
      <>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../../assets/img/1.png')}
            style={{width: 200, height: 50}}
          />
        </View>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
          cancelIcon
          lightTheme
          containerStyle={{borderRadius: 20}}
        />
      </>
    );
  }
}
