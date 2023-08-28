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

    // localStorage
    let obj = {name: 'Gu'}
    //JSON.stringify(obj) : 사용시 array, obj에 따옴표를 다 쳐줌
    localStorage.setItem('data', JSON.stringify(obj));
    let 꺼낸거 = localStorage.getItem('data'); //  {"name":"Gu"}
    console.log(JSON.parse(꺼낸거)); // JSON.parse 다시 따옴표를 베껴 줌
    // 상세페이지에서 봤던 상품의 번호들을 localStorage에 저장하기가 숙제
    // 자료의 이름 watched, array 형태로. 본것에 대해 id를 저장하기 + 주의점! 중복번호는 막기 -> set자료형 사용하면 됨

    useEffect(() => {
        // mount(페이지 장착), update(재랜더링시 : 수정/변경), unmount (삭제 시 실행)
        // useEffect 다른 코드 모두 랜더링이 끝나고 동작 실행 : 오래 걸리는 for 문을 이 곳에서 실행
        // 시간이 걸리는 어려운 연산, setTimeout, 서버에서 정보 가져올때 사용

        localStorage.setItem('watched', JSON.stringify([]))

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


    // function 함수(){
    //     return 반복문10억번돌린결과
    // }
    // let result = useMemo(()=>{ return 함수() }, [])
    // useMemo 안에 넣어두면 컴포넌트 로드시 1회만 실행

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
                                                     // 클릭 한 것을 localsotrage, watched 에 배열의 형태로 값을 추가한다.setItem
                                                     // 상단에 띄워 지게 하는 html, css 먼저 작성
                                                     // getItem 을 상단에 올린다.
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

// 서버에 ajax 요청 : json 을 잘 변환 해줌
// 1. 방법 (GET/POST) : ajax 를 사용 해서 요청
// 2. 어떤 자료 (URL) : 서버 개발자에게 물어보기 => 적어 보내라
// 1.XMLHttpRequest 2.fetch() 3. axios 라이브러리 사용 : sudo npm install axios
// ajax Get 요청은 axios.get('url').then((result)=>{result.data}).catch(()=>{//실패했을 때 코드})
// 전송시에는 axios.post('url', {name : 'GU'}) 이렇게 사용하면 됨

// url 두개 보내고 싶으면?
// Promise.all([axios.get('/url1'), axios.get('/url2')]]
// .then(()=>{}) 이런 식으로 하면 됨
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


// session storage : 사이트 끄면 날라감 - 휘발성 있음
// local storage : 서버 없이도 반영구적으로 저장 가능, 브라우저 안에 있음
// 개발자 도구 - Application - Local Storage :
// 1. key & value 형태로 데이터 저장 가능
// 2. 문자만 저장 가능 - 최대 5mb 까지
// 3. 사이트 재접속해도 남아 있음 (브라우저 청소하면 삭제됨)
//
// localStorage.setItem('age', '30')
// localStorage.getItem('age');  // 30
// .removeItem() 하면 삭제 됨
//
// 데이터 수정하는 문법은 없어서 꺼내서 수정하고 저장하면 됨
// array, object 저장은 불가한데, json 형태로 바꾸면 저장 가능 : JSON.stringify, JSON.parse
