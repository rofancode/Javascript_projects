import '@/styles/globals.css'
import Layout from '../components/layout'

export default function App({ Component, pageProps }) {

  // return <>Hello haha</>
  //return <Component {...pageProps} /> 
  // return <div style ={{border:'10px solid red'}}><Component {...pageProps} /> </div>
  //app.js가 return 하는 것이 output이 되는 구나 // index.js가 component형태로 app의 매개변수로 들어옴
  // 모든 routing의 진입점. 글로벌하게 적용하는 곳
  return <Layout><Component {...pageProps} /></Layout> 
  // 이렇게 하면 페이지마다 Layout 에 감싸서 전달됨
}
