import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


//npm run dev or yarn dev or pnpm dev

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Enter Youtube/Spotify/Apple Music playlist URL!</h1>
      <form onSubmit= {() =>  {let url = document.querySelector('#url').value
        if (!url) {
          alert('Please enter your name.')
          return ""
        }

        
        alert('URLLLLLLLLLLL: ' + url)
        console.log("URLLLLLLLLLLL: " + url)
        return url}
      }>
      <div>
        <label htmlFor="url">  URL</label>
        <input type="text" id="url" name="url" size={80}/>
      </div>
      <div>
        <button type="submit">Submit</button> 
      </div>
      </form>
      <script></script>
    
    </div>
  
  )
}

export default Home
