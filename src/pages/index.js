import Link from 'next/link'
np
export default function Home() {
  return (
    <>
      <h1>
          <Link href="/">WEB</Link>
        </h1>
        <ol>
          <li><a href="/read/1">html</a></li>
          <li><a href="/read/2">css</a></li>
        </ol>
      <article>
        <h2>Welcome</h2>
        Hello, WEB!!
      </article>
      <ul>
        <li><a href="/create">Create</a></li>
        <li><a href="/update">Update</a></li>
        <li><a href="/delete">Delete</a></li>

      </ul>
        

    </>
  )
}
