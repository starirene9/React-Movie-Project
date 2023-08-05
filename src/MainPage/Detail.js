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
            <img alt={""}/>
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
    let [like, setLike] = useState(1);

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
                <span>👍</span><span>&nbsp;{like}</span>
            </div>
        </>
    );
}

export default Detail
