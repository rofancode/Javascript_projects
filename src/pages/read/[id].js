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

정적인 이미지 다운 받고, 사용자와 주고 받기위한 jscript를 덧칠해주는 형태로 동작한다.
덧칠해주는 형태 = 하이버네이트
*/
export async function getServerSideProps(context) {
  //해당 function에서는 router가 존재하지 않기 때문에 context.params.id 를 활용한다.
  console.log('getServerSideProps');
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL+'topics/'+context.params.id);
  const result = await res.json();
  return {
    props: {
      topic: result
    }, // will be passed to the page component as props
  }
}
export default function Read({topic}) {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>{topic.title}</h2>
      {topic.body}
      <button onClick={()=>{
        setCount(count+1);
      }}>Like({count})</button>
    </>
  )
}

/*   */