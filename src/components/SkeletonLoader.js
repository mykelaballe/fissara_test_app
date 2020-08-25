import React from 'react'
import {Dimensions} from 'react-native'
import ContentLoader, {Rect, Circle} from 'react-content-loader/native'

const {width} = Dimensions.get('window')

export default () => (
    <ContentLoader height={200}>
        <Circle cx="31" cy="31" r="27" />
        <Rect x="64" y="15" width='170' height="15" /> 
        <Rect x="64" y="38" width='100' height="12" />
    
        <Rect x="0" y="63" width={width} height="1" /> 

        <Circle cx="31" cy="97" r="27" />
        <Rect x="64" y="81" width="170" height="15" /> 
        <Rect x="64" y="104" width="100" height="12" />

        <Rect x="0" y="130" width={width} height="1" />

        <Circle cx="31" cy="164" r="27" />
        <Rect x="64" y="148" width="170" height="15" /> 
        <Rect x="64" y="171" width="100" height="12" />
    </ContentLoader>
)