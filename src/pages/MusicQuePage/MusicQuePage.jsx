import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Index from '../Index/Index'
import axios from 'axios'

function MusicQuePage() {
  const [songsData,setSongsData]=useState([])
  const readSongData = async()=>{
    try {
      
      const res= await axios.get('http://localhost:3001/api/songs/read')
      const data=res.data
      setSongsData(data)
      console.log(songsData)
    } catch (error) {
      console.log(error)
      
    }

  }

  useEffect(()=>{
    readSongData()
  },[])

  return (
    <div><h1>favorite song page</h1>

    <div>
      {songsData.length?
      songsData.map((song,index)=>{
        return (
          <div>
            <h3>{song.name}</h3>
            <h3>{song.genre}</h3>
            <h3>{song.artist}</h3>
          </div>
        )
      })
      :<div></div>}
    </div>



    </div>
  )
}


export default MusicQuePage