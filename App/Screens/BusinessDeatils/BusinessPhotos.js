import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import Heading from '../../Components/Heading'

const BusinessPhotos = ({business}) => {
  return (
    <View style={{marginLeft:15,marginTop:15}}>
      <Heading text={"Photos"}/>
      <FlatList
        data={business.images}
        renderItem={({item})=>(
            <Image source={{uri:item.url}}
                style={{width:150,height:120,resizeMode:'contain'}}
            />
        )}
      />
    </View>
  )
}

export default BusinessPhotos