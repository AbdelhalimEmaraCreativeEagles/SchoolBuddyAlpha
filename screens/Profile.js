import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Container, Header, Content, Card, CardItem, H2, Thumbnail, Text, Button, Icon, Left, Body, Right, H3, H4 } from 'native-base';
import { connect } from 'react-redux'
import Firebase from '../config/Firebase'
import CoursesGrades from '../components/CourseComponents/CoursesGrades';
import TopRatedCourses from '../components/CourseComponents/TopRatedCourses';

class Profile extends React.Component {
	handleSignout = () => {
		Firebase.auth().signOut()
		this.props.navigation.navigate('Login')
	}

	render() {
		return (
			<Container>
				<Content style={{ paddingTop: 20 }}>
					<Card style={{ marginLeft: 20, marginRight: 20, marginTop: 20, paddingVertical: 20 }}>
						<CardItem>
							<Left>
								<Thumbnail style={{ height: 100, width: 100, borderRadius: 50 }} source={{ uri: this.props.user.avatar }} />

							</Left>
							<Right>
								<Text style={{ flex: 1, }}>{this.props.user.description}</Text>
							</Right>
						</CardItem>
						<CardItem>
							<Left>
								<Text>{this.props.user.name}</Text>
							</Left>
						</CardItem>
						<CardItem>
							<Left>
								<Button bordered dark  onPress={() => this.props.navigation.navigate('EditProfile')}>

									<Text>Edit Profile</Text>
								</Button>
							</Left>
							<Right>
								<Button bordered dark onPress={this.handleSignout}>
									<Text>Logout</Text>
								</Button>
							</Right>
						</CardItem>
					</Card>

					<View style={{ paddingLeft: 20, paddingTop: 20 }}>
						<H3>Completed Courses</H3>
					</View>

					<View style={{ paddingTop: 20 }}>

						<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
							<CoursesGrades imageUri={require('../assets/logo.png')} name='Grade: A+' />
							<CoursesGrades imageUri={require('../assets/logo.png')} name='Grade: A+' />
							<CoursesGrades imageUri={require('../assets/logo.png')} name='Grade: A+' />
							<CoursesGrades imageUri={require('../assets/logo.png')} name='Grade: A+' />
							<CoursesGrades imageUri={require('../assets/logo.png')} name='Grade: A+' />
							<CoursesGrades imageUri={require('../assets/logo.png')} name='Grade: A+' />
							<CoursesGrades imageUri={require('../assets/logo.png')} name='Grade: A+' />


						</ScrollView>
					</View>
					<View style={{ paddingLeft: 20, paddingTop: 20 }}>
						<H3>Top rated Courses</H3>
					</View>

					<View style={{ paddingTop: 20 }}>

						<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
							<TopRatedCourses imageUri={require('../assets/images/Top_Courses.png')} title='English Course' describtion='Lorem ipsumLorem ipsumLorem ipsumLorem ipsum ' />
							<TopRatedCourses imageUri={require('../assets/images/Top_Courses.png')} title='Arabic Course' describtion='Lorem ipsumLorem ipsumLorem ipsumLorem ipsum ' />
							<TopRatedCourses imageUri={require('../assets/images/Top_Courses.png')} title='Math Course' describtion='Lorem ipsumLorem ipsumLorem ipsumLorem ipsum ' />
							<TopRatedCourses imageUri={require('../assets/images/Top_Courses.png')} title='German Course' describtion='Lorem ipsumLorem ipsumLorem ipsumLorem ipsum ' />
							<TopRatedCourses imageUri={require('../assets/images/Top_Courses.png')} title='French Course' describtion='Lorem ipsumLorem ipsumLorem ipsumLorem ipsum ' />
							<TopRatedCourses imageUri={require('../assets/images/Top_Courses.png')} title='English Course' describtion='Lorem ipsumLorem ipsumLorem ipsumLorem ipsum ' />
							<TopRatedCourses imageUri={require('../assets/images/Top_Courses.png')} title='English Course' describtion='Lorem ipsumLorem ipsumLorem ipsumLorem ipsum ' />
							
						</ScrollView>
					</View>
				</Content>
			</Container>




		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
})

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(Profile)
