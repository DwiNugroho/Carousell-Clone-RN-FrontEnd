import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import Activity from './activity';
import Group from './group';
import User from './user';
import Explore from './explore';

import Header from '../components/header'



export default class Home extends Component {

	// State
	state = {
	    index: 0,
	    routes: [
	      { key: 'Explore', title: 'Explore' },
	      { key: 'Group', title: 'Group' },
	      { key: 'Activity', title: 'Activity' },
	      { key: 'User', title: 'User' },
	    ],
	 };

	render() {
		return(
			<React.Fragment>
				<Header navigation={this.props.navigation} />
				<TabView
			        navigationState={this.state}
			        labelStyle={{backgroundColor: 'red'}}
			        renderScene={SceneMap({
			          Explore: Explore,
			          Group: Group,
			          Activity: Activity,
			          User: User,
			        })}
			        onIndexChange={index => this.setState({ index })}
			        initialLayout={{ width: Dimensions.get('window').width }}
			        renderTabBar={props =>
	                    <TabBar
	                        {...props}
	                        indicatorStyle={{backgroundColor: 'white'}}
	                        style={styles.tabNav}
	                    />
	                }
				    />
			</React.Fragment>
		)
	}
}

const styles = StyleSheet.create({
    tabNav: {
    	backgroundColor: '#c22727'
    },
})