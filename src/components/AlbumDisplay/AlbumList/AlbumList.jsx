import React, { useEffect, useReducer } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAlbums } from '../../../store/thunks/fetchAlbums'
import './AlbumList.css'

const AlbumList = ({id}) => {

  const dispatch = useDispatch()

  const {data} = useReducer((state) => state.albums)

  console.log(data)

  useEffect(() => {
    dispatch(fetchAlbums(id))
  }, [dispatch])

  return (
    <div className='contentBox'>AlbumList</div>
  )
}

export default AlbumList