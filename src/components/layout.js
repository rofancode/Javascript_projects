import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter} from 'next/router';
import { Container, Grid, Button, Box, Dialog} from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

//default 붙으면 대표선수
export default function Layout({children}){
    const [topics, setTopics] = useState([]);
    const router = useRouter();
    useEffect(()=> {
        fetch(process.env.NEXT_PUBLIC_API_URL+'topics')
        .then(res => res.json())
        .then(result =>{
            setTopics(result);
        })
    },[router.asPath]);//목록 부분 - 최초 routing될 떄 1번만 수행되므로 빈칸이 아니라 router path를 넣어서 해당 path가 달라질 때마다 리로딩하게 한다.
    
    const [openDelete, setOpenDelete] = useState(false);

    // component의 content를 정의할 수 이는 것이 children 
    return <Container maxWidth="sm">
        <h1>
            <Link href="/">WEB</Link>
        </h1>
        <Grid container> {/* 컬럼지정 */}
            <Grid item xs={12} sm={3} md={5}>
                <ol>
                    {topics.map(e=><li key={e.id}>
                        <Link href={"/read/"+e.id}>{e.title}</Link>
                    </li>)}
                </ol>
            </Grid>
            <Grid item xs={12} sm={9} md={7}>
                <article>
                    {children}
                </article>
                <Box sx={{
                    mt:1
                }}>
                <Button variant="contained" component={Link} href="/create" sx={{marginRight:1}}>Create</Button> {/** 링크 컴퍼넌트에 button디자인 씌워놓은 것이된다. 생긴건 버튼인데 링크다!*/}
                {router.query.id === undefined ? null : <> {/** 삼항연산자 추가 */}
                <Button variant="contained" component={Link} href={"/update/"+router.query.id} sx={{marginRight:1}}>Update</Button> 
                
                <Button variant="contained" sx={{marginRight:1}} onClick={()=> {
                    setOpenDelete(true);
                }}>Delete</Button> {/*버튼은 nativejs 컴파운드가 아니라 css가 바로 적용이 안됨 mui에서 지정된 format에 맞춰 css비슷하게 설정가능}
                {/* <li><Button><Link href="/update">Update</Link></Button></li> */}
                </>} {/** 삼항연산자 추가 */}
                </Box>
            </Grid>
        </Grid>
        <Dialog open={openDelete} onClick={()=> {setOpenDelete(false)}}>{/** delete 누르면 dialog 실행 */}
            <DialogTitle id="alert-dialog-title">
                Really?
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                한번 삭제는 영원한 삭제!
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={()=> {setOpenDelete(false)}}>취소</Button>
            <Button autoFocus onClick={()=>{
                console.log(router.query.id,router.asPath);
                fetch(process.env.NEXT_PUBLIC_API_URL+'topics/'+router.query.id,{
                    method:"DELETE"
                })
                .then(res=>res.json())
                .then(result=>{
                    router.push('/');
                    setOpenDelete(false);
                })
            }}>
                진짜삭제
            </Button>
            </DialogActions>
        </Dialog>
      </Container>
  }
  
//single page application - 페이지전환을 최소화하는 application 

//private layout
function Layout3(){
    return <>Layout3</>
  }
  
//export 가능한데 {} 형태로 import함 e.g. import layout2 from 
export function Layout2(){
    return <>Layout3</>
  }