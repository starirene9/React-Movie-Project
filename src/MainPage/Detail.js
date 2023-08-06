import {useState} from "react";
import './Detail.Module.css';

function Detail() {
    return (
        <>
            <section>
                <Trailer/>
            </section>
            <section>
                <Explain/>
            </section>
            <section>
                <Review/>
            </section>
        </>
    );
}

function Trailer() {
    return (
        <>
            <h1>비상선언</h1>
            <img  alt={"비상선언 포스터"}/>
            <h2>평점(리뷰개수) · 영상시간 · 12+ · 2022</h2>
            <button>예매하기</button>
        </>
    );
}

function Explain() {
    return (
        <>
            <h1>영화 설명</h1>
            <div>
                <ul>
                    <li>출연</li>
                    <li>송강호, 이병헌, 전도연, 김남길, 임시완, 김소진, 박해준</li>
                </ul>
                <ul>
                    <li>장르</li>
                    <li>드라마 장르</li>
                </ul>
            </div>
            <button className="tab">리뷰</button>
            <button className="tab">미리보기</button>
        </>
    )
        ;
}

function Review() {
    let [star, setStar] = useState("⭐");
    let [review, setReview] = useState(0);
    let [like, setLike] = useState(0);
    // let [movieTitle, setMovieTitle] = useState(['날아라 차차', '응가맨', '도라이몽']) // 이렇게 배열로 사용
    // let copy = [...영화타이틀];
    // copy[0] = '뽀로로'
    // set영화타이틀(copy); 보다는 원본은 보존하는게 더 안전함 <- 기존 state랑 다르기 때문에

    // react는 똑같으면 변경을 해주지 않음.
    // array, object의 특징 => 가리키는 화살표만 있다.

    // const Modal =()=>{}  // 에러를 더 잘 띄워 주긴함.

    // modal 1. html css 디자인 완성 2. ui state 현재상태 저장 3. state에 따라 어떻게 보일지
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
    // 중요 state 만드는 곳은 state를 사용하는 컴포넌트 들 중 최상위 컴포넌트에서 만들어서 props 로 전송 즉 App 에서 만들 것

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

     return (
        <>
            <div className="left-review">
                <h1>평점</h1>
                <div>{star}</div>
                <div>{review}개 평점</div>
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
                <span onClick={(e)=>{ e.stopPropagation(); setLike(like + 1)}}>👍</span>&nbsp;{like}
            </div>
        </>
    );
}

export default Detail
