import Link from 'next/link'
import { useEffect, useState } from 'react'
  
  //default 붙으면 대표선수
export default function Layout({children}){
    const [topics, setTopics] = useState([])
    useEffect(()=> {
        fetch('http://localhost:9999/topics')
        .then(res => res.json())
        .then(result =>{
            setTopics(result);
        })
    },[]);
    
    // const lis = [
    //     <li><Link href="/read/1">html</Link></li>,
    //     <li><Link href="/read/2">css</Link></li>
    // ]

    // const lis = [];
    // for(let i = 0 ; i < topics.length; i++){
    //     lis.push(<li key = {topics[i].id}>{topics[i].title}</li>);
    // }
    // const lis = topics.map((e) => {
    //     return <li key={e.id}>{e.title}</li>
    // })

    // component의 content를 정의할 수 이는 것이 children
    return <>
        <h1>
            <Link href="/">WEB</Link>
          </h1>
          <ol>
            {topics.map(e=><li key={e.id}><Link href={"/read/"+e.id}>{e.title}</Link></li>)}
          </ol>
        <article>
          {children}
        </article>
        <ul>
          <li><Link href="/create">Create</Link></li>
          <li><Link href="/update">Update</Link></li>
          <li><Link href="/delete">Delete</Link></li>
        </ul>   
      </>
  }
  

  //single page application - 페이지전환을 최소화하는 application 
//a : 페이지 리로딩 됨. 페이지를 리로딩하게 되면 사용자입장에서도 화면이 깜박거리고 데이터도 유지어려윰, 서버 호출도 반복됨
//Link : 페이지 리로딩 안됨. 서버호출x

//private layout
function Layout3(){
    return <>Layout3</>
  }
  
//export 가능한데 {} 형태로 import함 e.g. import layout2 from 
export function Layout2(){
    return <>Layout3</>
  }