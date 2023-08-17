import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Footer from "./MainPage/Footer";
import {useState} from "react";
import data from "./data";
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import Main from "./MainPage/Main";
import Detail from "./MainPage/Detail";
import Booking from "./Booking/Booking";
import Bookingseat from "./Booking/Bookingseat";


function App() {

    let [movie, setMovie] = useState(data);
    // console.log(movie); [{},{},{}]
    // 복잡한 기호도 시작 기호를 잘 보면 됨
    let navigate = useNavigate();

    return (
        <>
            <header className="black-nav">
                <div className="top-nav">
                    <h1 className="cine-title">Together Cinema&nbsp;<span
                        style={{color: 'lightgoldenrodyellow', fontSize: 'small'}}> ⭐  b i t n a r a</span></h1>
                    <nav className="top-main-nav1">
                        <ul className="top-main-nav2">
                            <li>로그인</li>
                            <li>회원가입</li>
                            <li>마이페이지</li>
                            <li>고객센터</li>
                        </ul>
                    </nav>
                </div>
                <div className="below-nav">
                    <nav>
                        <ul className="below-main-nav">
                            <li onClick={()=>{navigate('/movie')}}>영화</li>
                            <li style={{color: 'red', fontWeight: "bold"}} onClick={()=>{navigate('/booking')}}>예매</li>
                            <li onClick={()=>{navigate('/benefit')}}>혜택</li>
                            <li onClick={()=>{navigate('/about')}}>Together Cinema</li>
                        </ul>
                    </nav>
                </div>
            </header>
            {/* Routes 들을 Nav 바 밑으로 옮긴다 */}
            {/* element를 컴포넌트화 하면 좋음 */}
            <Routes>
                <Route path="/" element={<Main movie={data} />}/>
                <Route path="/movie" element={<Main movie={data} />}/>
                <Route path="/movie/:id" element={<Detail movie={data}/>}/>
                {/*영화의 아이디에 따라 Detail 상세 페이지가 전환되어 나타난다. Useparams 사용하면 Detail 페이지에서 id 사용 가능*/}
                <Route path="/booking" element={<Booking data={data}/>}/>
                <Route path="/booking/seat" element={<Bookingseat data={data}/>}/>
                <Route path="/benefit" element={<div>혜택 페이지임</div>}/>
                <Route path="/about" element={<div>Together Cinema란</div>}/>
                <Route path="*" element={<div>없는 페이지 입니다</div>}/>
            </Routes>
            <Footer/>
        </>
    )
        ;
}



export default App;
