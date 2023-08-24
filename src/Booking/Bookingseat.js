import button from "bootstrap/js/src/button";
import {Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {addCount} from "../store";
import './Bookingseat.Module.css';
import {useState} from "react";
import {useLocation} from 'react-router-dom';

// eslint-disable-next-line

function Bookingseat() {

    let state = useSelector((state) => state); // 일단 전체를 가져와 보자
    // console.log(state.people); // [{},{},{},{}]
    let dispatch = useDispatch(); // state 변경시 필수! <- useDispatch()

    let [divStyle, setDivStyle] = useState({
        backgroundColor: 'gray',
        width: '3vh',
        height: '3vh'
    });

    // Create a 2D array to represent the seat map : 2차원 배열 생성하기
    const rows = 10;
    const columns = 10;

    // new Array(rows)는 rows 개수만큼의 원소를 가진 배열을 생성
    const seatMap = new Array(rows).fill(null).map(() =>
        new Array(columns).fill(null)
    );

    // JSX for rendering the seat map
    const seatMapJSX = seatMap.map((row, rowIndex) => ( //  각 행을 JSX로 변환 :  실제로 좌석을 나타내는 <td> 엘리먼트들을 생성하는 작업
        <tr key={rowIndex}>
            {
                row.map((_, columnIndex) => { // JavaScript에서 _는 보통 "무시하고 싶은 값"
                    // 각 행 내부의 열을 순회하며 JSX로 변환
                    // 알파벳 부분 : 각각 'A'와 'J'의 유니코드 값
                    const alphabet = String.fromCharCode(columnIndex < 10 ? columnIndex + 65 : columnIndex + 54);
                    // 숫자 부분
                    const number = rowIndex + 1;
                    const seatLabel = `${number}${alphabet}`;
                    return (
                        <td key={columnIndex}>
                            <div style={divStyle}>{seatLabel}</div>
                        </td>
                    );
                })}
        </tr>
    ));

    //받는 쪽 라우트 컴포넌트에서는 location.state를 통해 전달받은 데이터에 접근
    const location = useLocation();
    const receivedData = location.state;
    console.log(receivedData);

    if (receivedData && receivedData.canNavigate) {
        console.log('canNavigate is true in received data.');
    } else {
        console.log('canNavigate is not true in received data.');
    }


    return (
        <>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>{state.user.name} 님의 예매 현황</tr>
                <tr>영화, 상영관, 날짜, 시간 읽어오기</tr>
                <tr>
                    <th colSpan="3" style={{textAlign: 'center'}}>인원 / 좌석</th>
                    <th colSpan="3" style={{textAlign: 'center'}}>예약 현황</th>
                </tr>
                </thead>
                <tbody style={{textAlign: 'center'}}>
                {
                    state.people.map((a, i) =>
                        <tr key={i}>
                            <td>{state.people[i].type}</td>
                            <td>{state.people[i].count}</td>
                            <td>
                                <button onClick={() => {
                                    dispatch(addCount(i))
                                }}> +
                                </button>
                            </td>
                            <td colSpan="3">
                                <div>
                                    {
                                        state.people[i].count >= 1 ?
                                            (<p>
                                                <strong>{state.people[i].type}&nbsp;{state.people[i].count}</strong> 을
                                                선택하셨습니다.</p>) : null
                                    }
                                </div>
                            </td>
                        </tr>
                    )
                }
                <tr>
                    <td colSpan="4">SCREEN</td>
                </tr>
                <tr>
                    <td colSpan="4">
                    <div style={{display:'flex', justifyContent:'flex-end'}}>
                        <table style={{margin: '0 auto' }}>
                            <tbody>
                            {seatMapJSX}
                            </tbody>
                        </table>
                        <SeatExplanation divStyle={divStyle}/>
                    </div>
                    </td>
                </tr>
                </tbody>
            </Table>
        </>
    )
        ;
}


function SeatExplanation({divStyle}){
    return(
        <section style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            // border:'2px solid blue'
        }}>
            <div className='seatDescribe'>
                <div style={{...divStyle, backgroundColor: 'red'}}></div>
                <span>선택</span>
            </div>
            <div className='seatDescribe'>
                <div style={divStyle}></div>
                <span>예매 완료</span>
            </div>
            <div className='seatDescribe'>
                <div style={divStyle}>X</div>
                <span>선택 불가</span>
            </div>
            <div className='seatDescribe'>
                <div style={{...divStyle, backgroundColor: 'green'}}></div>
                <span>장애인석</span>
            </div>
        </section>
    );
}

export default Bookingseat;




