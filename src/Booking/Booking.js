import {Nav, Tab, Table, Tabs} from "react-bootstrap";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {increase} from "../store";
import button from "bootstrap/js/src/button";

function Booking({data}) {

    let locations = useSelector((state) => state.locations)
    let user = useSelector((state) => state.user)
    // console.log(user);

    // 간단한 프로젝트는 props , 공유가 필요하고 복잡해 지는 것만 redux 사용
    // 모든 state를 의미해서 return state.user 하면 원하는 것만 가져다 쓸 수 있음
    // console.log(locations.서울[0]) //이촌동 이런식으로 가져다 쓰면 됨

    let dispatch = useDispatch();

    let [selectedMovie, setSelectedMovie] = useState('');
    let [selectedLocation, setSelectedLocation] = useState('');
    let [selectedDate, setSelectedDate] = useState(null);
    let [selectedTime, setSelectedTime] = useState('');

    let [buttonDisabled, setButtonDisabled] = useState(false);
    let [buttonStyle, setButtonStyle] = useState({ backgroundColor: 'blue' });

    const handleLocationClick = (location) => {
        setSelectedLocation(location);
    };

    const handleButtonClick = () => {
        if (!buttonDisabled) { // true
            dispatch(increase(10)); // 10 증가

            setButtonDisabled(true); // true 로 유지하고

            setButtonStyle({backgroundColor: 'gray'}) //배경을 gray 칼라로 변경
        }
    }

    return (
        <>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>{user.name} 님의 예매 현황
                    <br/>보유 포인트 : {user.point}점
                    <button style={buttonStyle}
                            onClick={handleButtonClick}
                            disabled={buttonDisabled}
                    >보너스 버튼!</button>
                </tr>
                <tr>
                    <th>영화</th>
                    <th>극장</th>
                    <th>예매 날짜</th>
                    <th>시간</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <Tabs
                            defaultActiveKey="예매율순"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="예매율순" title="예매율순">
                                {
                                    data.map((a, i) => {
                                        return (
                                            <>
                                                <div onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedMovie(e.target.textContent);
                                                }}>{a.id}. {a.title} &nbsp;
                                                    <span style={{
                                                        color: 'orange',
                                                        border: '2px solid red',
                                                        borderRadius: '5px',
                                                        padding: '3px'
                                                    }}>{a.age}
                                                    </span>
                                                </div>
                                            </>
                                        );
                                    })
                                }
                            </Tab>
                            <Tab eventKey="가나다순" title="가나다순">
                                {
                                    data
                                        .slice()
                                        .sort((a, b) => a.title.localeCompare(b.title))
                                        .map((a, i) => (
                                            <div key={a.id} onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedMovie(e.target.textContent);
                                                // console.log(e.target.textContent)
                                            }}>
                                                {a.title} &nbsp;
                                                <span style={{
                                                    color: 'orange',
                                                    border: '2px solid red',
                                                    borderRadius: '5px',
                                                    padding: '3px'
                                                }}>{a.age}</span>
                                            </div>
                                        ))
                                }
                            </Tab>
                        </Tabs>
                    </td>
                    <td>
                        <Tab.Container defaultActiveKey="경기">
                            <Nav variant="tabs">
                                {Object.keys(locations).map((region) => ( // 지역을 나타내는 값
                                    <Nav.Item key={region}>
                                        <Nav.Link eventKey={region}>{region}</Nav.Link>
                                    </Nav.Item>
                                ))}
                            </Nav>
                            <Tab.Content>
                                {Object.entries(locations).map(([region, places]) => (
                                    <Tab.Pane key={region} eventKey={region}>
                                        {places.map((place) => (  // 해당 지역에 속하는 장소를 나타내는 값
                                            <div key={place} onClick={(e) => {
                                                e.stopPropagation();
                                                handleLocationClick(place)
                                            }}>
                                                {place}
                                            </div>
                                        ))}
                                    </Tab.Pane>
                                ))}
                            </Tab.Content>
                        </Tab.Container>
                    </td>
                    <td>
                        {selectedLocation &&
                            <DatePicker
                                palceholder="예약하실 날짜를 선택하세요."
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                dateFormat="yyyy-MM-dd"
                            />
                        }
                    </td>
                    <td>
                        {selectedDate && (
                            <div>
                                <select value={selectedTime} onChange={(e) => {
                                    setSelectedTime(e.target.value);
                                }}>
                                    <option value="">시간대를 선택하세요</option>
                                    <option value="09:00">09:00</option>
                                    <option value="11:00">11:00</option>
                                    <option value="14:00">14:00</option>
                                    <option value="18:00">18:00</option>
                                    <option value="22:00">22:00</option>
                                </select>
                            </div>
                        )}
                    </td>
                </tr>
                <tr>
                    <td>
                        <span style={{color: 'yellow'}}>{selectedMovie}을 선택하셨습니다.</span>
                    </td>
                    <td>
                        <span style={{color: 'yellow'}}>{selectedLocation}</span>
                    </td>
                    <td>
                        <span
                            style={{color: 'yellow'}}>{selectedDate && selectedDate.toLocaleDateString('ko-KR')}</span>
                    </td>
                    <td>
                        <span style={{color: 'yellow'}}>{selectedDate && selectedTime}</span>
                    </td>
                </tr>
                </tbody>
            </Table>
        </>
    )
        ;
}

export default Booking