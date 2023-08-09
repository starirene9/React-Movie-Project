import {useEffect, useState} from "react";
import Detail from "./Detail";
import data from "../data";
import {useNavigate} from "react-router-dom";

function Main(props) {

    // let [modal, setModal] = useState(false);
    let navigate = useNavigate();
    //  페이지 이동을 도와줌
    let [alert, setAlert] = useState(true);

    useEffect(() => {
        // mount(페이지 장착), update(재랜더링시 : 수정/변경), unmount (삭제 시 실행)
        // useEffect 다른 코드 모두 랜더링이 끝나고 동작 실행 : 오래 걸리는 for 문을 이 곳에서 실행
        // 시간이 걸리는 어려운 연산, setTimeout, 서버에서 정보 가져올때 사용

        // let a = setTimeout(()=>{setAlert(false)}, 2000) <- 변수에 담아서~
        setTimeout(() => {
            // document.querySelector('.alert').style.display = 'block';
            // display 를 block 으로 해야 함. but React 는 이렇게 쓰지않고 스위치..!
            setAlert(false);
        }, 20000)
        // 추가2.
        // return () => {
        //     useEffect 동작하기 전에 특정코드를 실행하고 싶으면 return ()=>{} 안에
        //     // 기존 타이머를 제거해 주세요 : 재 생성되는 비효율을 막고 버그를 방지
        //     ClearTimeout(a)  // <- 타이머 제거는 다음과 같이 한다. : clean up function
        // clean up function에는 타이머제거, socket 연결요청제거, ajax요청 중단 이런 코드를 많이 작성합니다.
        // 컴포넌트 unmount 시에도 clean up function 안에 있던게 1회 실행됩니다.
        // }

    }, []);
    // useEffect(()=>{ 실행할코드 }, [count])
    // []안에 state 나 변수 넣기 가능 <- [변수]가 변경이 될 때 실행이 된다.
    // useEffect(()=>{ 실행할코드 }, [])
    // [] 비어 있으면 mount 시 1회만 작동

    return (
        <>
            <div className="body-area">
                <section>
                    <div className="main-area">
                        {
                            alert ?
                                <div className="alert alert-warning" style={{fontWeight: 'bold', color: 'red'}}>한정 파격
                                    특가! 20초 이내 예매하기 누르면 영화 반값! </div> : null
                        }
                        <bold>이번 주 인기 영화 TOP 10</bold>
                        {/*이건 부트 스트랩 끌어 옴 */}
                        {/*컴포넌트화 해서 map으로 돌려보기 */}
                        <div className="container">
                            <div className="row">
                                {
                                    props.movie.map((a, i) => {
                                        return (
                                            <div className="col-md-4"
                                                 onClick={() => {
                                                     navigate(`/movie/${i}`)
                                                 }}
                                            >
                                                <img src={process.env.PUBLIC_URL + `/image${i + 1}.png`}
                                                     alt={props.movie[i].title} width="90%"/>
                                                {/* 서브 경로에 발행시 문제가 될 수 있으니 위의 경로로 코드를 짜면 됨 */}
                                                <h2>{props.movie[i].id}</h2>
                                                <button>예매하기</button>
                                            </div>
                                        );
                                    })
                                }
                                {/*    <Card shoes={shoes[i]} i={i}*/}
                            </div>
                        </div>
                        {/*{*/}
                        {/*    modal === true ? <Detail movie={data}/> : null*/}
                        {/*    //     props.i 로 사용*/}
                        {/*}*/}
                    </div>
                </section>
            </div>
        </>
    );
}

export default Main

