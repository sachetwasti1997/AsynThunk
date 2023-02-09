import React from 'react'
import Header from '../Header/Header'
import AlbumList from './AlbumList/AlbumList'

const AlbumContainer = ({id}) => {
  return (
    <div>
      <Header title={"Albums"} btnTxt={"Add Album"}/>
      <AlbumList id={id}/>
    </div>
  )
}

export default AlbumContainer