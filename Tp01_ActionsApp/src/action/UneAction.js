import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import BoutonAction from './BoutonAction'

/**
 * Composant représentant une action.
 *
 * TODO modifier le code pour afficher le titre de l'action et les boutons associés.
 */


renderButtonTerminer = (id, action, finirAction) => {
    if(!action.done){
            
        return (<Button
            color="#00a600"
            title="Terminer"
            onPress={() => finirAction(id)}
        />)
    }
}

const UneAction = ({id, action, supprimerAction, finirAction}) => (
    
    <View style={styles.conteneurUneAction}>
        <Text style={styles.texteUneAction}>
            {`${action.name}`}
        </Text>
        <View style={styles.boutons}>
            {/* <BoutonAction nom="Terminer" id={id} supprimerAction={(id) => supprimerAction(id)}/>
            <BoutonAction nom="Supprimer" id={id} supprimerAction={(id) => supprimerAction(id)}/> */}
            {renderButtonTerminer(id, action, finirAction)}

            <Button title="Supprimer"
            color="#770101"
            onPress={() => supprimerAction(id)}
            />
        </View>
    </View>
)

const styles = StyleSheet.create({
    conteneurUneAction: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: '#ededed',
        paddingLeft: 14,
        paddingTop: 7,
        paddingBottom: 7,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 },
        flexDirection: 'row',
        alignItems: 'center'
    },
    texteUneAction: {
        fontSize: 17
    },
    boutons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
})
export default UneAction