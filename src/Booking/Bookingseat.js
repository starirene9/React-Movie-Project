import button from "bootstrap/js/src/button";
import {Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {addCount} from "../store";
import './Bookingseat.Module.css';
import {useState} from "react";

function Bookingseat() {

    let state = useSelector((state) => state); // 일단 전체를 가져와 보자
    // console.log(state.people); // [{},{},{},{}]
    let dispatch = useDispatch(); // state 변경시 필수! <- useDispatch()

    let [divStyle, setDivStyle] = useState({
        backgroundColor: 'gray',
        width: '2vh',
        height: '2vh'
    });

    return (
        <>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>{state.user.name} 님의 예매 현황</tr>
                <tr>
                    <th colSpan="3" style={{textAlign: 'center'}}>인원 / 좌석</th>
                    <th colSpan="3" style={{textAlign: 'center'}}>예약 현황</th>
                </tr>
                </thead>
                <tbody  style={{ textAlign : 'center'}}>
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

                            </td>
                        </tr>
                    )
                }
                <tr>
                    <td colSpan="3">좌석 선택 이미지</td>
                    <td colSpan="1">좌석 설명</td>
                </tr>
                <tr>
                    <td colSpan="3">좌석들..</td>
                    <td rowSpan="3" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{...divStyle, backgroundColor : 'red'}}></div>
                        <span>선택</span>
                        <div style={divStyle} ></div>
                        <span>예매 완료</span>
                        <div style={divStyle} >X</div>
                        <span>선택 불가</span>
                        <div style={{...divStyle, backgroundColor : 'green'}} ></div>
                        <span>장애인석</span>
                    </td>
                </tr>
                </tbody>
            </Table>
        </>
    )
        ;
}


export default Bookingseat;




