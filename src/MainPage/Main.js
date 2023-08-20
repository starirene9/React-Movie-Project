import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "../store";

function Main(props) {

    // let [modal, setModal] = useState(false);
    let navigate = useNavigate();
    //  페이지 이동을 도와줌
    let [alert, setAlert] = useState(true);

    let state = useSelector((state) => state);
    let dispatch = useDispatch();

    useEffect(() => {
        // mount(페이지 장착), update(재랜더링시 : 수정/변경), unmount (삭제 시 실행)
        // useEffect 다른 코드 모두 랜더링이 끝나고 동작 실행 : 오래 걸리는 for 문을 이 곳에서 실행
        // 시간이 걸리는 어려운 연산, setTimeout, 서버에서 정보 가져올때 사용

        // let a = setTimeout(()=>{setAlert(false)}, 2000) <- 변수에 담아서~
        setTimeout(() => {
            // document.querySelector('.alert').style.display = 'block';
            // display 를 block 으로 해야 함. but React 는 이렇게 쓰지않고 스위치..!
            setAlert(false);
        }, 10000)
        // 추가2.
        // return () => {
        // useEffect 동작하기 전에 특정코드를 실행하고 싶으면 return ()=>{} 안에
        // 기존 타이머를 제거해 주세요 : 재 생성되는 비효율을 막고 버그를 방지
        // ClearTimeout(a)  // <- 타이머 제거는 다음과 같이 한다. : clean up function
        // clean up function에는 타이머제거, socket 연결요청제거, ajax요청 중단 이런 코드를 많이 작성합니다.
        // 컴포넌트 unmount 시에도 clean up function 안에 있던게 1회 실행됩니다.
        // }

    }, []);
    // useEffect(()=>{ 실행할코드 }, [count])
    // []안에 state 나 변수 넣기 가능 <- [변수]가 변경이 될 때 실행이 된다.
    // useEffect(()=>{ 실행할코드 }, [])
    // [] 비어 있으면 mount 시 1회만 작동

    // 서버에 ajax 요청 : json 을 잘 변환 해줌
    // 1. 방법 (GET/POST) : ajax 를 사용 해서 요청
    // 2. 어떤 자료 (URL) : 서버 개발자에게 물어보기 => 적어 보내라
    // 1.XMLHttpRequest 2.fetch() 3. axios 라이브러리 사용 : sudo npm install axios
    // ajax Get 요청은 axios.get('url').then((result)=>{result.data}).catch(()=>{//실패했을 때 코드})
    // 전송시에는 axios.post('url', {name : 'GU'}) 이렇게 사용하면 됨
    // url 두개 보내고 싶으면?
    // Promise.all([axios.get('/url1'), axios.get('/url2')]]
    // .then(()=>{}) 이런 식으로 하면 됨


    return (
        <>
            <div className="body-area">
                <section>
                    <div className="main-area">
                        {
                            alert ?
                                <div className="alert alert-warning" style={{fontWeight: 'bold', color: 'red'}}>한정 파격
                                    특가! 10초 이내 예매하기 누르면 영화 반값! </div> : null
                        }
                        <h1 className="h1-style">이번 주 인기 영화 TOP 10</h1>
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
                                                <button onClick={(e) => {
                                                    e.stopPropagation()
                                                    navigate('/booking')
                                                    // dispatch(addItem({type: '테스트', count: 100}))
                                                }}>예매하기
                                                </button>
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

// axios.get('https://codingapple1.github.io/shop/data2.json')
//     .then((result) => {
//         console.log(result.data) // [{},{},{}]
//         console.log(props.movie) //  [{},{},{}]
//         // 목표는 object 추가하기, How? 대괄호 벗겨 주는 ...문법 사용
//         // let copy = [...props.movie, ...result.data];
//         // props.setMovie(copy);
//         // 로딩 중 UI 숨기기
//     })
//     .catch(() => {
//         // 로딩 중 UI 숨기기
//     console.log('가져오기 실패함');
//     //         movie에 데이터 몇개 추가해주세요 하면 html 도 알아서 생성 됨
// })