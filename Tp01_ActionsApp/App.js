import React from 'react'
import {StyleSheet, View, ScrollView} from 'react-native'
import Entete from './src/Entete'
import Saisie from './src/Saisie'
import BoutonCreer from './src/BoutonCreer'
import ListeActions from './src/action/ListeActions'
import Menu from './src/menu/Menu'

/**
 * Composant d'entrée de l'application.
 */
export default class App extends React.Component {

    // état global de l'application
    // il y aura probalement d'autres informations à stocker
    state = {
        texteSaisie: '',
        actions: [],
        showMode:'all'  //it should be 'all', 'actives', 'finished'
    }

    /**
     * Méthode invoquée lorsque que la saisie change.
     *
     * @param nouvelleSaisie la valeur saisie
     */
    quandLaSaisieChange(nouvelleSaisie) {
        this.setState({texteSaisie: nouvelleSaisie})
        console.log('la saisie à changée', nouvelleSaisie)
    }

    /**
     * Méthode invoquée lors du clic sur le bouton `Valider`.
     */
    validerNouvelleAction() {
        
        this.setState({actions: this.state.actions.concat({'name': this.state.texteSaisie, 'done':false})})
        console.log('Vous avez cliqué sur Valider !')
    }

    finirAction(id) {
        newActions = this.state.actions
        newActions[id].done = true
        this.setState({actions: newActions})
    }

    supprimerId(id){
        newArray = []
        for(var i=0;i<this.state.actions.length; i++){
            if(i != id){
                newArray.push(this.state.actions[i])
            }
        }
        this.setState({actions: newArray})
    }

    filterListAction(){
        if (this.state.showMode == 'all'){
            return this.state.actions
        }else if (this.state.showMode == 'actives'){
            tmp = this.state.actions.filter(action => !action.done)
            return this.state.actions.filter(action => !action.done)
        }else if (this.state.showMode == 'finished'){
            tmp = this.state.actions.filter(action => action.done)
            return this.state.actions.filter(action => action.done)
        }
    }

    changeShowMode(nameMode){
        this.setState({showMode: nameMode})
    }

    render() {
        const {texteSaisie} = this.state.texteSaisie

        return (
            <View style={styles.conteneur}>
                <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
                    <Entete/>
                    <Saisie texteSaisie={texteSaisie} evtTexteModifie={(titre) => this.quandLaSaisieChange(titre)}/>
                    <ListeActions actions={this.filterListAction()} 
                    supprimerAction={(id) => this.supprimerId(id)} 
                    finirAction={(id) => this.finirAction(id)}/>
                    <BoutonCreer onValider={() => this.validerNouvelleAction()}/>
                </ScrollView>
                <Menu changeShowMode={(name) => this.changeShowMode(name)} showMode={this.state.showMode}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    conteneur: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    content: {
        flex: 1,
        paddingTop: 60,
    },
})