import { useRouter } from "next/router"
import { useEffect, useState } from 'react';

//서버사이드 랜더링 SSR
// 검색엔진, 스크립핑, 등 javascript 동작안하는 환경에서도 사용자와 interaction은 안되지만 content에 내용은 채워진상태로 응답가능하게 함
// 상법 3가지
/**
 * getServerSideProps
 * 사용자가 접속했을 때 서버 쪽에서 클라이언트 모르게 실행되는 함수입니다. 
그래서 브라우저 콘솔에서는 아무것도 안뜨지만
서버쪽인 터미널에서는 출력이 되고 있는 것입니다.

 * 
클라이언트가 서버에 접속하면 getServerSideProps 실행됨
서버에서 db에서 데이터 가져온다음 props로 result 전달
-> 그럼 useState, useEffect 필요없음 
*/
export async function getServerSideProps(context) {
  //해당 function에서는 router가 존재하지 않기 때문에 context.params.id 를 활용한다.
  console.log('getServerSideProps');
  const res = await fetch('http://localhost:9999/topics/'+context.params.id);
  const result = await res.json();
  // console.log('result',result);
  
  return {
    props: {
      topic: result
    }, // will be passed to the page component as props
  }
}

export default function Read(props) {
  console.log('props',props);
  //http://localhost:9999/topics/id로 접속해서
  //데이터 가져온다
  //id는 어떻게 가져올까?
  const router = useRouter();
  // console.log('## DEBUG ##','Read 컴포넌트 호출됨');
  //각 라우터 id를 조회할 수 있고 해당 id를 통해 resource에 접속할 수 있다.
  
  useEffect(()=>{
    // console.log('## DEBUG ##',1,'# ',router.query.id);
    if(router.query.id !== undefined){
      // console.log('## DEBUG ##',2,'# ', router.query.id);
      fetch('http://localhost:9999/topics/'+router.query.id)
      .then(res => res.json())
      .then(result => {
        // console.log('## DEBUG ##','result',result);
        setTopic(result);//서버에서 가져온 데이터 세팅한다. 
      })
    }
  },[router.query.id]);//처음 랜더링 아이디 없음. 랜더링 아이디 생기면 다시 컴포넌트 실행된다. 
  // console.log('## DEBUG ##',"topic : ",topic);
  if(topic === null) {
    console.log('## DEBUG ##',topic);
    return <>Loading...</>
  }
  return (
    <>
      <h2>{topic.title}</h2>
      {topic.author}
    </>
  )
}

