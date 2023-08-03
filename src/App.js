import './App.css';


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
                    </div>
                </section>
                <footer>
                    <div className="footer-area">
                        <li>☎️ 010 3394 9128 용인시 기흥구 구갈동</li>
                        <li>대표 책임자 : 구빛나</li>
                        <li>웹사이트 : <a href="https://bitnara999.com" target="_blank">https://bitnara999.com</a></li>
                        <li>깃허브 : <a href="https://github.com/starirene9"
                                     target="_blank">https://github.com/starirene9</a></li>
                        <li>© BITNARA All Rights Reserved</li>
                    </div>
                </footer>
            </div>
        </>
    )
        ;
}

export default App;
