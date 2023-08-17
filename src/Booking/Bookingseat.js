import button from "bootstrap/js/src/button";
import {Table} from "react-bootstrap";
import {useSelector} from "react-redux";

function Bookingseat() {

    let user = useSelector((state) => state.user)

    return (
        <>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>{user.name} 님의 예매 현황</tr>
                <tr>
                    <th colSpan="4" style={{textAlign: 'center'}}>인원 / 좌석</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td colSpan="2">
                        좌석 선택
                    </td>
                    <td colSpan="2">
                        영화 이름, 상영관, 날짜, 시간대 뿌리기
                    </td>
                </tr>
                <tr>
                    <td colSpan="3">좌석 선택 이미지</td>
                    <td colSpan="1">좌석 설명</td>
                </tr>
                </tbody>
            </Table>
        </>
    );
}


export default Bookingseat;