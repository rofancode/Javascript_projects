import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  console.log('_app.js');
  // return <>Hello haha</>
  //return <Component {...pageProps} /> 
  return <div style ={{border:'10px solid red'}}><Component {...pageProps} /> </div>
  //app.js가 return 하는 것이 output이 되는 구나 // index.js가 component형태로 app의 매개변수로 들어옴
  // 모든 routing의 진입점. 글로벌하게 적용하는 곳
}
