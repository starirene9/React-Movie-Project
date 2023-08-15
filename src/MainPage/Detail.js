import {useEffect, useState} from "react";
import './Detail.Module.css';
import {useParams} from "react-router-dom";
import {clear} from "@testing-library/user-event/dist/clear";

function Detail(props) {

    let [count, setCount] = useState(0);

    let {id} = useParams(); // 현재 url의 파라미터가 남음(id)
    // console.log(id); // 1이 남음
    // let foundMovie = props.movie.find(function(x){
    //     return x.id === id
    // }); // 사용시 foundMovie.title

    // let [tab, setTab] = useState(0); 탭전환시 이렇게 사용
    let [trailer, setTrailer] = useState(true);
    let [modal, setModal] = useState(false);

    let [like, setLike] = useState(0);
    let [star, setStar] = useState("⭐");
    let [fade, setFade] = useState('');

    useEffect(() => {
        let a = setTimeout(() => {
            setFade('end') // 2. 미세한 시간차를 둬야지 보임
        }, 100)

        return () => {
            clearTimeout(a); // setTimeout 이니까 clear
            setFade('') // 1.
        }
    }, [modal])
    // modal state 가 변할 떄 end css 부착

    useEffect(() => {
        let a = setTimeout(() => {
            setFade('end') // 2. 미세한 시간차를 둬야지 보임
        }, 100)

        return () => {
            clearTimeout(a); // setTimeout 이니까 clear
            setFade('') // 1.
        }
    }, []) // detail 전체 페이지에 한 번 줘 봄

    return (
        <>
            <div className={`start ${fade}`}>
                <section>
                    {/*<Trailer/>*/}
                    <h1>{props.movie[id].title}</h1>
                    <img src={process.env.PUBLIC_URL + `/image${props.movie[id].id}.png`} alt={props.movie[id].title}
                         width="90%"/>
                    <h2>{props.movie[id].totalRate} ({props.movie[id].reviewCount}) · 영상시간 · 12+ · 2022</h2>
                    <button>예매하기</button>
                </section>
                <section>
                    {/*<Explain/>*/}
                    <p>{props.movie[id].content}</p>
                    <div>
                        <ul>
                            <li>출연</li>
                            <li>{props.movie[id].actors}</li>
                        </ul>
                        <ul>
                            <li>장르</li>
                            <li>{props.movie[id].genre}</li>
                        </ul>
                    </div>
                    <button className="tab" onClick={(e) => {
                        e.stopPropagation();
                        setTrailer(!trailer)
                    }}>미리보기
                    </button>
                    <button className="tab" onClick={(e) => {
                        e.stopPropagation();
                        setModal(!modal)
                    }}>리뷰
                    </button>
                </section>
                <section>
                    {
                        trailer === true ?
                            <>
                                <iframe
                                    width="100%"
                                    height="800px"
                                    src={props.movie[id].src}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </> : null
                    }
                    {
                        modal === true ?

                            <>
                                <div className={`start ${fade}`}>
                                    <div className="left-review">
                                        <h1>{props.movie[id].totalRate}</h1>
                                        <div>{star}</div>
                                        <div>{props.movie[id].reviewCount}개 평점</div>
                                    </div>
                                    <div className="right-review">
                                        <select>
                                            <option>베스트순</option>
                                            <option>최신순</option>
                                            <option>높은 평점순</option>
                                            <option>낮은 평점순</option>
                                        </select>
                                        <div>⭐⭐⭐⭐⭐</div>
                                        <div>영화가 너무 즐거웠습니다.</div>
                                        <div>로그인아이디, 날짜</div>
                                        <span onClick={(e) => {
                                            e.stopPropagation();
                                            setLike(like + 1)
                                        }}>👍</span>&nbsp;{like}
                                    </div>
                                </div>
                            </> : null
                    }
                </section>
            </div>
        </>
    );
}

// 전환 애니메이션은?
// 1. 동작 전 className 만들기 : 0
// 2. 동작 후 className 만들기 : 0
// 3. className 에 transition 속성 추가 : 0
// 4. 원할 떄 2번 className 부착
// useEffect 로 state 변환시 setTimeout 탈 부착

// 컴포넌트화해서 안에 if문 적을 수 있음 : 대신 return 문 꼭 써야 함
// function TabContent({tab}){ // {props 전달할 이름을 쓰면 굳이 이렇게 안 써도 됨}
//     if (tab === 0) {
//        return <div>내용0</div>
//     }
//     if (tab === 1) {
//        return <div>내용1</div>
//     }
// // return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭] // 이렇게 사용해도 됨
// }

// let copy = [...영화타이틀];
// copy[0] = '뽀로로'
// set영화타이틀(copy); 보다는 원본은 보존하는게 더 안전함 <- 기존 state랑 다르기 때문에

// react는 똑같으면 변경을 해주지 않음.
// array, object의 특징 => 가리키는 화살표만 있다.

// const Modal =()=>{}  // 에러를 더 잘 띄워 주긴함.

// modal 만드는 법
// 1. html css 디자인 완성
// 2. ui state 현재상태 저장
// 3. state에 따라 어떻게 보일지

// let[modal, setModal] =useState(false); // 스위치
// {
//    modal == true ? <Modal 작명={작명}/> : null  // 기계 => props 전달 방아서 'props.작명' 쓰면 props 전송
// }
// }
// 제목 누르면 modal state를 true로 바꾸는 코드는?
// onClick={()=>{setModal(!modal)}} // 느낌표 우측 자료를 반대로 바꿔줍니다.

// [1,2,3].map(function(){ // array 자료 갯수만큼 함수안의 코드 실행해줌
// return 시 array로 담아줌
// })

// props : 부모에서 자식으로
// < Modal 작명={작명}/> props 받아서 props.작명 해서 쓰면 됨
// 중요 state 만드는 곳은 state를 사용하는 컴포넌트 들 중 최상위 컴포넌트에서 만들어서 props 로 전송, 즉 App 에서 만들 것

// let[입력값, set입력값] = useState('');
// <input type="date"/> <textArea/> 큰 인풋박스 onChange={(e)=>{console.log(e.target.value)}}, onInput, onMouseover, onScroll 등 이벤트 핸들러가 있음
// input 에서 입력한 값 가져오기 -> e 넣어주기
// 따봉 눌러도 상위로 퍼지는 경우를 막고 싶으면 onClick={(e)=>{ e.stopPropagation();
// <input onChange={(e)=>{set입력값(e.target.value); console.log(입력값)}}

// <button onCLick={()=>{
//  let copy = [...글제목];
//  copy.unshift(입력값); // 삭제는 copy.splice(i, 1); // 누른 해당 글이 삭제가 됨
//  set글제목(copy)
// }}> 글발행 </button>

// Detail.module.css 해서 import 하여 사용하면 됨

export default Detail
