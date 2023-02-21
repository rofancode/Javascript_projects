import { useRouter } from "next/router"
import { useEffect, useState } from 'react';

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
export default function Update({topic}) {
  const [title, setTitle] = useState(topic.title); //중요!! 없으면 수정안됨
  const [body, setBody] = useState(topic.body); //중요!! 없으면 수정안됨
  const router = useRouter();
  return (
    <>
      <h2>Update</h2>
      <form onSubmit={(evt)=>{
        evt.preventDefault();// 클릭할 때 마다 페이지리로딩 막음 
        const title = evt.target.title.value;
        const body = evt.target.body.value;
        //이번트 발생 시점에 
        const options = {
          method : 'PATCH',
          headers : {'Content-Type':'application/json'},
          body: JSON.stringify({
            title: title,
            body: body
          })
        }
        fetch(process.env.NEXT_PUBLIC_API_URL+'topics/'+router.query.id,options)
        .then(res=>res.json())
        .then(result=>{
          router.push('/read/'+result.id);
        } )
      }}>
        <p><input type="text" name="title" placeholder="title" value={title} onChange={evt =>{
          setTitle(evt.target.value); {/** useState이용해서 body가져온다. 이때 target 
          react 중요 소프트웨어의 단순성 
          form 데이터 바꿀 수 있다면 
          title state = html 이면 
          form html 이어야함 
          따라서 form 변경하려면 onChange를 통해 state값도 바꿔줘야 form도 변경할 수 있도록 한다. 
          정합성이 깨지는 것을 방지
        */}
        }}/></p> {/** onChange없으면 변경이 안됨  state값을 변경해줘야한다  */}
        <p><textarea name="body" placeholder="body" value={body} onChange={evt =>{
          setBody(evt.target.value);
        }}></textarea></p>
        <p><input type="submit" value="update"/></p>
      </form>
    </>
  )
} 


/*   */