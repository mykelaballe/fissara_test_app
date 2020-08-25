import React from 'react'
import {View, InteractionManager} from 'react-native'
import {connect} from 'react-redux'
import Actions from '../actions'
import {FlatList, ListItem} from '../components'
import {_} from '../utils'

const ItemUI = ({data, onPress}) => (
    <ListItem
        primaryText={data.name}
        subText={data.email}
        onPress={() => onPress(data)}
    />
)

class Scrn extends React.Component {

    static navigationOptions = {
        headerLeft:<View />,
        title:'Fissara'
    }

    componentDidMount = () => InteractionManager.runAfterInteractions(this.props.fetchEmployees)

    handleView = employee => this.props.navigation.navigate('EmployeeProfile',{employee})

    renderItem = ({item}) => <ItemUI data={item} onPress={this.handleView} />

    render() {

        const {list, fetching} = this.props

        return (
            <FlatList
                data={list}
                renderItem={this.renderItem}
                loading={fetching}
            />
        )
    }
}

const mapStateToProps = state => ({
    fetching: state.home.fetching,
    list: state.home.employees
})

const mapDispatchToProps = dispatch => ({
    fetchEmployees: () => dispatch(Actions.Creators.fetchEmployeesAttempt())
})

export default connect(mapStateToProps, mapDispatchToProps)(Scrn)