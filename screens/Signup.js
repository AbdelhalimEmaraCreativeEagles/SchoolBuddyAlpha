import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button, Image } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail,updateName, updatePassword, signup } from '../actions/user'
import { H3 } from 'native-base'

class Signup extends React.Component {
	handleSignUp = () => {
		this.props.signup()
		this.props.navigation.navigate('Profile')
	}

	render() {
		return (
			<View style={styles.container}>
				<Image source={require('../assets/logo.png')} style={styles.image} />
				<H3> Welcome back!</H3>
				<TextInput
					style={styles.inputBox}
					value={this.props.user.name}
					onChangeText={name => this.props.updateName(name)}
					placeholder='Name'
					autoCapitalize='none'
				/>
				<TextInput
					style={styles.inputBox}
					value={this.props.user.email}
					onChangeText={email => this.props.updateEmail(email)}
					placeholder='Email'
					autoCapitalize='none'
				/>
				<TextInput
					style={styles.inputBox}
					value={this.props.user.password}
					onChangeText={password => this.props.updatePassword(password)}
					placeholder='Password'
					secureTextEntry={true}
				/>
				<TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
					<Text style={styles.buttonText}>Signup</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	inputBox: {
		width: '85%',
		margin: 10,
		padding: 15,
		fontSize: 16,
		borderColor: '#EA677F',
		borderBottomWidth: 1,
		textAlign: 'center'
	},
	button: {
		marginTop: 30,
		marginBottom: 20,
		paddingVertical: 10,
		alignItems: 'center',
		backgroundColor: '#EA677F',
		borderColor: '#EA677F',
		borderWidth: 1,
		borderRadius: 5,
		width: 300
	},
	buttonText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#fff'
	},
	label: {
		color: '#EA677F',
		textAlign:'right',
		alignItems:'flex-end'
	  },
	image: {
		width: 128,
		height: 128,
		marginBottom: 12,
	},
	buttonSignup: {
		fontSize: 12
	}
})

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ updateEmail, updateName, updatePassword, signup }, dispatch)
}

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Signup)
