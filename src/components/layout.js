import Link from 'next/link'

//private layout
function Layout3(){
    return <>Layout3</>
  }
  
  //export 가능한데 {} 형태로 가져와야함 
  export function Layout2(){
    return <>Layout3</>
  }
  
  //default 붙으면 대표선수
export default function Layout({children}){
    // component의 content를 정의할 수 이는 것이 children
    return <>
        <h1>
            <Link href="/">WEB</Link>
          </h1>
          <ol>
            <li><a href="/read/1">html</a></li>
            <li><a href="/read/2">css</a></li>
          </ol>
        <article>
          {children}
        </article>
        <ul>
          <li><a href="/create">Create</a></li>
          <li><a href="/update">Update</a></li>
          <li><a href="/delete">Delete</a></li>
  
        </ul>   
      </>
  }
  