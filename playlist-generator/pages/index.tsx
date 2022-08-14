import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Enter Youtube/Spotify/Apple Music playlist URL</h1>
      <label>URL</label>
      <input type="text" id="fname" name="fname" size={80}/>
        <br/>
        <br/>
        <button type="button">Submit</button> 
    </div>
  )
}

export default Home
