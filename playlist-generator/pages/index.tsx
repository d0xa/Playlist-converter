import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


//npm run dev or yarn dev or pnpm dev

const Home: NextPage = () => {
  return (
    
    <div className={styles.container}>
      <h1>Enter Youtube/Spotify/Apple Music playlist URL!</h1>
      <form onSubmit= {(e: React.FormEvent<HTMLFormElement>) =>  {
        e.preventDefault()

        let url = document.querySelector('#url').value
        if(!url){
          alert("please enter valid URL")
        }
        else{
          alert("URL: " + url)
        }
        

      }}>

      <div>
        <label htmlFor="url">  URL</label>
        <input type="text" id="url" name="url" size={80}/>
      </div>
      <div>
        <button type="submit">Submit</button> 
      </div>
      </form>
   
    </div>
  
  
  )
}

export default Home
