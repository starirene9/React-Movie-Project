import button from "bootstrap/js/src/button";
import {Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {addCount} from "../store";

function Bookingseat() {

    let state = useSelector((state) => state); // 일단 전체를 가져와 보자
    console.log(state.people); // [{},{},{},{}]

    let dispatch = useDispatch(); // state 변경시 필수! <- useDispatch()

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
                <tbody>
                {
                    state.people.map((a, i) =>
                        <tr key = {i}>
                            <td>{state.people[i].type}</td>
                            <td>{state.people[i].count}</td>
                            <td>
                                <button onClick={()=>{
                                    dispatch(addCount(i))
                                }}> + </button>
                            </td>
                        </tr>
                    )
                }
                {/*예약 현황에 booking 에 있는 자료들을 끌고 와야함 오키?*/}
                <tr>
                    <td colSpan="3" style={{textAlign: 'center'}}>좌석 선택 이미지</td>
                    <td colSpan="1" style={{textAlign: 'center'}}>좌석 설명</td>
                </tr>
                </tbody>
            </Table>
        </>
    )
        ;
}


export default Bookingseat;




