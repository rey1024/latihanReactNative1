import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
const heartIcon = require('./images/plain-heart.png');

class MainApp extends Component { 
	
	state = {
		liked : false
	};
	_onPressButton = () => {
		this.setState(
			{liked : !this.state.liked,}
		);
	}
	render() {
		
		const likedStyles= this.state.liked?styles.liked:null;
		return ( 
			<View style={styles.container}> 
				
	
					<TouchableHighlight 
					style={styles.btn} 
						onPress = {this._onPressButton}
						underlayColor="#fefefe"> 
						<Image source={heartIcon} 
							style={[styles.icon, likedStyles]} /> 
					</TouchableHighlight> 
					<Text style={styles.text}>Do you like this app?</Text>
				
			</View>
		);

	};

};

const styles = StyleSheet.create({ 
	container: { 
		marginTop: 50, 
		alignItems: 'center',

	}, 

	title: { 
		fontSize: 18, 
		fontWeight: '200', 
		color: '#fff', 
		position: 'absolute', 
		backgroundColor: 'transparent', 
		top: 12, 
		left: 10,


	}, 
	subtitle: { 
		fontWeight: 'bold',
	},
	content: {
		fontSize: 20, 
		color:'#3f51b5',
		fontWeight: 'bold',
		textAlign: 'center'
	},
	btn: { 
		borderRadius: 5, 
		padding: 10,
	}, 
	icon: { 
		width: 180, 
		height: 180, 
		tintColor: '#f1f1f1',
	}, 
	liked: { 
		tintColor: '#e74c3c',
	}, 
	text: { 
		marginTop: 20,
	}, 
});

export default MainApp;