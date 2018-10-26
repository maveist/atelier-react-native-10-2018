import React from 'react'
import { View, StyleSheet } from 'react-native'
import OptionMenu from './OptionMenu'

/**
 * Composant Menu.
 */
const Menu = ({changeShowMode, showMode}) => (
    <View style={styles.menu}>
        <OptionMenu nom="Toutes" changeShowMode={()=> changeShowMode('all')} selected={showMode=='all'}/>
        <OptionMenu nom="Actives" changeShowMode={()=> changeShowMode('actives')} selected={showMode=='actives'}/>
        <OptionMenu nom="Terminés" changeShowMode={()=> changeShowMode('finished')} selected={showMode=='finished'}/>
    </View>
)

const styles = StyleSheet.create({
    menu: {
        height: 70,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#dddddd'
    }
})
export default Menu