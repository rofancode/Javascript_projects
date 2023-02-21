import Link from 'next/link'

export default function Create() {
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
        <h2>Create</h2>
        Hello, create!!
      </article>
      <ul>
        <li><a href="/create">Create</a></li>
        <li><a href="/update">Update</a></li>
        <li><a href="/delete">Delete</a></li>

      </ul>
        

    </>
  )
}
