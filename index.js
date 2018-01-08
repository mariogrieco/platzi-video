import React from 'react'
import { render } from 'react-dom'
import Playlist from './src/playlist/components/Playlist.js'
import Pause from './src/icons/components/Pause.js'
import data from './src/api.json'
import Play from './src/icons/components/Play.js'
import Volume from './src/icons/components/Volume.js'
import FullScreen from './src/icons/components/FullScreen'

const app = document.getElementById('app')
const holaMundo = (
    <div>
      <h1>Hola Mundo</h1>
      <Play size={20} color="#22bc03"/>
      <Pause size={20} color="#22bc03"/>
      <Volume size={20} color="#22bc03"/>
      <FullScreen size={20} color="#22bc03"/>
      <Playlist data={data}/>
    </div>
  )

// parms (que [elm react, componente], donde)
render(holaMundo, app)
