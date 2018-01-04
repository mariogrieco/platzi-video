import React from 'react'
import { render } from 'react-dom'
import Playlist from './src/playlist/components/Playlist.js'
import data from './src/api.json'

const app = document.getElementById('app')
const holaMundo = (
    <div>
      <h1>Hola Mundo</h1>
      <Playlist data={data}/>
    </div>
  )

// parms (que [elm react, componente], donde)
render(holaMundo, app)
