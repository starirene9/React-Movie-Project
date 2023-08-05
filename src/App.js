/*eslint-disable*/
import './App.css';
import Footer from "./MainPage/Footer";
import Detail from "./MainPage/Detail";

function App() {

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
                            <li>영화</li>
                            <li style={{color: 'red', fontWeight: "bold"}}>예매</li>
                            <li>혜택</li>
                            <li>Together Cinema</li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className="body-area">
                <section>
                    <div className="main-area">
                        <bold>이번 주 인기 영화 TOP 10</bold>
                        <div>
                            <ul>
                                <li>3 * 3 사진 공간</li>
                                <li>3 * 3 사진 공간</li>
                            </ul>
                        </div>
                        <Detail/>
                    </div>
                </section>
                <Footer/>
            </div>
        </>
    )
        ;
}



export default App;
