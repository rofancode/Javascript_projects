import { useRouter } from 'next/router';
//주소바뀌면 바뀐 주소에 해당하는 페이지를 알아서 라우팅해준다. 
export default function Create() {
  const router = useRouter();
  return (
    <>
      <h2>Create</h2>
      {/* onSubmit은 호출할 때마다 콜백함수에 event객체를 전달함,*/}
      <form onSubmit={(evt)=>{
        evt.preventDefault();// 클릭할 때 마다 페이지리로딩 막음 
        const title = evt.target.title.value;
        const body = evt.target.body.value;
        console.log('title',title,'/body',body);
        //이번트 발생 시점에 
        const options = {
          method : 'POST',
          headers : {'Content-Type':'application/json'},
          body: JSON.stringify({
            title: title,
            body: body
          })
        }
        fetch(process.env.NEXT_PUBLIC_API_URL+'topics',options)
        .then(res=>res.json())
        .then(result=>{
          console.log('result', result);
          router.push('/read/'+result.id);
        } )
      }}>
        <p><input type="text" name="title" placeholder="title"/></p>
        <p><textarea name="body" placeholder="body"></textarea></p>
        <p><input type="submit" value="create"/></p>
      </form>
    </>
  )
}