import React from 'react';
import { Image, View, Text } from 'react-native';
import { HeaderStyle } from './styles';
import logo from '../../../../assets/logo.png';
import { loadHeader } from '../../../../services/loadData';

class Header extends React.Component {
  state = {
    header: {
      welcome: '',
      caption: '',
    },
  };

  updateHeader() {
    const callback = loadHeader();
    this.setState( { header: callback });
  }

  componentDidMount() {
    this.updateHeader();
  }

  render() {
    return (
      <View style = { HeaderStyle.header }>
        <Image source = { logo } style = { HeaderStyle.image } />
        <Text style = { HeaderStyle.welcome } > { this.state.header.welcome } </Text>
        <Text style = { HeaderStyle.caption }> { this.state.header.caption } </Text>
      </View>
    );
  }

}

export default Header;
