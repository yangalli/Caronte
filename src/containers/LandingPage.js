import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import TabBarMenu from '../components/TabBarMenu';

const Eventos = () => (
  <View style={[styles.container, { backgroundColor: '#ff4081' }]} />
);
const Carros = () => (
  <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
);

var { height, width } = Dimensions.get('window');

export default class LandingPage extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Eventos' },
      { key: 'second', title: 'Meus Carros' }
    ],
  };

  _renderTabBar = props => (
    <TabBar
      {...props}
      renderIcon={this._renderIcon}
      style={this.props.style}
      navigationState={this.state}
      renderScene={this._renderScene}
      renderFooter={this._renderFooter}
      renderTabBar={this._renderTabBar}
      tabBarPosition="bottom"
      onIndexChange={this._handleIndexChange}
    />
  );
    

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: Eventos,
          second: Carros
        })}
        renderHeader={this._renderHeader}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: width, height: height }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});