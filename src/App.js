import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Footer from "./MainPage/Footer";
import {lazy, Suspense, useState} from "react";
import data from "./data";
import {Routes, Route, useNavigate} from 'react-router-dom'
import Main from "./MainPage/Main";
// import Detail from "./MainPage/Detail";
import Booking from "./Booking/Booking";
import Bookingseat from "./Booking/Bookingseat";
import axios from "axios";
import {useQuery} from "react-query";

// 메인 페이지에서 바로 보여주지 않아도 되는 것은 lazy import 하면 됨
// 단점 Cart, Detail 컴포넌트 로딩시간 발생
const Detail = lazy(() => import('./MainPage/Detail'))

function App() {

    let [movie, setMovie] = useState(data);
    // console.log(movie); [{},{},{}]
    // 복잡한 기호도 시작 기호를 잘 보면 됨
    let navigate = useNavigate();


    // React-query 인 useQuery 의 장점 : 성공/실패/로딩 중 쉽게 파악 가능
    let result = useQuery('작명', () => {
        return axios.get('https://codingapple1.github.io/userdata.json')
            .then((a) => {
                // console.log('요청됨');
                return a.data
            }),
            {staleTime: 2000}
        // 매번 리프레시 되지 않게 이런 타이머 기능 같은 것도 설정 가능
        // 실패 했을 때 ajax 요청을 retry 재시도 해 줌
        // ajax 결과 캐싱 기능이 있음 : 기존 성공 결과를 보여주고 get 요청을 시작함

    })

    // result.data
    // result.isLoading // 로딩 중일때 true
    // result.error // 로딩 중일때 false


    return (
        <>
            <header className="black-nav">
                <div className="top-nav">
                    <h1 className="cine-title" onClick={() => {
                        navigate('/')
                    }}>Together Cinema&nbsp;<span
                        style={{color: 'lightgoldenrodyellow', fontSize: 'small'}}> ⭐  b i t n a r a</span></h1>
                    <nav className="top-main-nav1">
                        <ul className="top-main-nav2">
                            <li>로그인</li>
                            <li>회원가입</li>
                            <li>마이페이지</li>
                            <li>고객센터</li>
                            <li>
                                {/*React Query 구간*/}
                                {result.isLoading && '로딩 중입니다'}
                                {result.error && '에러 발생'}
                                {result.data && result.data.name}
                            </li>
                            {/*    result.isLoading && result.data.name 를 써도 똑같음 */}
                            {/*    {result.isLoading ? '로딩중' : result.data.name}*/}
                        </ul>
                    </nav>
                </div>
                <div className="below-nav">
                    <nav>
                        <ul className="below-main-nav">
                            <li onClick={() => {
                                navigate('/movie')
                            }}>영화
                            </li>
                            <li style={{color: 'red', fontWeight: "bold"}} onClick={() => {
                                navigate('/booking')
                            }}>예매
                            </li>
                            <li onClick={() => {
                                navigate('/benefit')
                            }}>혜택
                            </li>
                            <li onClick={() => {
                                navigate('/about')
                            }}>Together Cinema
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            {/* Routes 들을 Nav 바 밑으로 옮긴다 */}
            {/* element를 컴포넌트화 하면 좋음 */}

            {/*<Suspense>로 감싸면 로딩중 UI 넣기 가능~!*/}

            <Suspense fallback={<div>로딩중입니다</div>}>
            <Routes>
                <Route path="/" element={<Main movie={data}/>}/>
                <Route path="/movie" element={<Main movie={data}/>}/>
                <Route path="/movie/:id" element={<Detail movie={data}/>}/>
                {/*영화의 아이디에 따라 Detail 상세 페이지가 전환되어 나타난다. Useparams 사용하면 Detail 페이지에서 id 사용 가능*/}
                <Route path="/booking" element={<Booking data={data}/>}/>
                <Route path="/booking/seat" element={<Bookingseat data={data}/>}/>
                <Route path="/benefit" element={<div>혜택 페이지임</div>}/>
                <Route path="/about" element={<div>Together Cinema란</div>}/>
                <Route path="*" element={<div>없는 페이지 입니다</div>}/>
            </Routes>
            </Suspense>

            <Footer/>
        </>
    )
        ;
}


export default App;
