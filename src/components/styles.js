import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
		padding: 8,
	},
	spacer: {
		minHeight: 40,
	},
	whiteBg: {
		backgroundColor: 'white',
	},
	blackBg: {
		backgroundColor: 'black',
	},
	greyBg: {
		backgroundColor: '#302c2c',
	},
	whiteText: {
		color: '#ffff',
	},
	blackText: {
		color: '#0000',
	},
	greyText: {
		color: '#828282',
	},
	mainText: {
		letterSpacing: 1,
		fontSize: 40,
		fontWeight: 'bold',
	},
	importantText: {
		letterSpacing: 1,
		fontSize: 20,
	},
	titleLayoutContainer: {
		flex: 0.6,
		marginBottom: '10%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	logoContainer: {
		marginTop: '10%',
	},
	nameTitleContainer: {
		marginTop: '30%',
	},
	logoImage: {},
	newGameInfoContainer: {
		justifyContent: 'center',
		alignContent: 'center',
		flex: 0.7,
		marginBottom: '10%',
	},
	input: {
		backgroundColor: '#ffff',
		height: 50,
		borderColor: '#232323',
		borderWidth: 2,
		borderRadius: 6,
		paddingLeft: 12,
		marginLeft: '20%',
		marginEnd: '20%',
		marginBottom: '5%',
		marginTop: '5%',
		justifyContent: 'center',
	},
	inputText: {
		color: '#ffff',
		marginLeft: '10%',
		marginEnd: '10%',
		marginBottom: '5%',
		marginTop: '10%',
		justifyContent: 'center',
		fontSize: 14,
		alignContent: 'center',	
		textAlign: 'center',
	},
	divider: {
		height: 1,
		backgroundColor: 'grey',
		marginLeft: '20%',
		marginRight: '20%',
	},
	buttonContainer: {
		alignItems: 'center',
		flex: 0.2,
		marginBottom: '5%',
		justifyContent: 'space-between',
	},
	buttonBlock: {
		alignItems: 'center',
		marginBottom: '5%',
		flexDirection:'row',
		justifyContent: 'space-around',
	},
	button: {
		borderWidth: 15,
		borderRadius: 15,
		marginTop: '5%',
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: '20%',
		marginRight: '20%',
	},
	titleLobbyContainer: {
		flex: 0.3,
		margin: '10%',
		marginTop: '30%',
	},
	playersContainer: {
		flex: 0.6,
		marginLeft: '10%',
		marginEnd: '10%',
	},
	blackCardContainer: {
		flex: 0.1,
		margin: '10%',
		marginBottom: 80,
	},
	whiteCardsContainer: {
		flex: 0.7,
		marginLeft: '10%',
		marginRight: '10%',
		marginBottom: '5%',
		marginTop: 20,
	},
	header: {
		flex: 0.1,
		padding: 20,
		justifyContent: 'space-between',
		flexDirection: 'row',
		paddingStart: '0%',
		backgroundColor: 'black',
		marginLeft: '10%',
		marginRight: '10%',
		alignItems: 'center',
	},
	infoHeader: {
		flexDirection: 'row',
	},
	card: {
		padding: 20,
		alignContent: 'center',
		marginVertical: 8,
		height: 60,
		borderRadius: 6,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.5,
		shadowRadius: 5,
		elevation: 5,
	},
	blackCard: {
		padding: 20,
		height: 100,
		borderRadius: 6,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.5,
		shadowRadius: 5,
		elevation: 5,
		backgroundColor: 'black',
	},
	bodyGame: {
		backgroundColor: '#302c2c',
		padding: '0%',
		flex: 1,
	},
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 20,
	  },
	  modalView: {
		marginVertical: 50,
		marginLeft: 30,
		marginRight: 30,
		marginTop: 150,
		backgroundColor: "black",
		borderRadius: 20,
		paddingTop: 200,
		paddingBottom: 200,
		alignItems: "center",
		shadowColor: "white",
		shadowOffset: {
		  width: 5,
		  height: 5,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 2
	  },
	  modalText: {
		margin: 5,
		textAlign: "center",
		color: 'white',
		fontSize: 20,
	  },
	  modal:{

	  },
})

export default Styles
