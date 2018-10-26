import React from 'react'
import {View, Text, FlatList} from 'react-native'
import UneAction from './UneAction'


generateActions = (actions, supprimerAction, finirAction) => {
    actionObjects = []
    for(var i=0; i<actions.length; i++){
        actionObjects.push(
            <UneAction id={i} action={actions[i]} 
            supprimerAction={(id) => supprimerAction(id)}
            finirAction={(id) => finirAction(id)}/>
        )
    }
    return actionObjects
    
}

const ListeActions = ({actions, supprimerAction, finirAction}) => {
    return (
        <View>
           {generateActions(actions, supprimerAction, finirAction)}
        </View>
    )
}

export default ListeActions