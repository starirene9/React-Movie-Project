import {Nav, Tab, Table, Tabs} from "react-bootstrap";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {useState} from "react";

function Booking({data}) {

    let [selectedMovie, setSelectedMovie] = useState('');
    let [selectedLocation, setSelectedLocation] = useState('');
    let [selectedDate, setSelectedDate] = useState(null);
    let [selectedTime, setSelectedTime] = useState('');

    const locations = {
        서울: ['이촌동', '태릉입구', '명동', '강남역'],
        경기: ['남양주', '안산', '용인'],
        강원: ['춘천', '화천', '철안 군부대'],
        부산: ['서면역', '해운대 바다극장', '부산대'],
    };

    const handleLocationClick = (location) => {
        setSelectedLocation(location);
    };

    return (
        <>
            <Table striped bordered hover variant="dark">
                <thead>
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
                                                <div>{a.id}. {a.title} &nbsp;
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
                                            <div key={a.id}>
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
    );
}

export default Booking