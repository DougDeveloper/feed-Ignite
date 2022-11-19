import { Post } from "./Post"
import { Header } from "./components/Header"

// ----- IMPORTS CSS ----- //

import "./global.css"
import styles from "./App.module.css"
import { Sidebar } from "./components/Sidebar"

// ----- IMPORTS CSS ----- //

export function App() {
  return (
    <div>
      <Header />
    
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post 
          author="Douglas"
          content="ngkadnlkasdlkfmlsdmlksdmlksdlknckadsnfvjadsjk"
          />
        </main>

      </div>
    </div>
  )
}