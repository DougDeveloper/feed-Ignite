// ----- IMPORTS COMPONENTS ----- //

import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

// ----- IMPORTS COMPONENTS ----- //

// ----- IMPORTS CSS ----- //

import "./global.css"
import styles from "./App.module.css"

// ----- IMPORTS CSS ----- //

// aqui temos os posts do feed
const posts = [
// cada post tem seu ID único
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat"
    },
  //agora precisamos do conteúdo do post
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"},
    ],
    publishedAt: new Date("22-05-03 20:00:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat"
    },
  //agora precisamos do conteúdo do post
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"},
    ],
    publishedAt: new Date("22-05-10 21:00:00")
  },
]

export function App() {
  return (
    <div>
      <Header />
    
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {/* o método map retorna o que se coloca como parâmetro */}
          {posts.map(post=>{
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />

            )
          })}
        </main>

      </div>
    </div>
  )
}