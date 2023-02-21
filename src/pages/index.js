import Layout from '../components/layout'

export default function Home() {
  console.log('home');
  return (
    <Layout>
      <h2>Welcome</h2>
      Hello, WEB
    </Layout>
  )
  // layout이란 태그(component) 를 지정하면 그 하위에 있는게 children으로 인지
}