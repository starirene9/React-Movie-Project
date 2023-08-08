import {useState} from "react";
import Detail from "./Detail";
import data from "../data";
import {useNavigate} from "react-router-dom";

function Main(props) {

    let [modal, setModal] = useState(false);
    let navigate = useNavigate();
    //  페이지 이동을 도와줌

    return (
        <>
            <div className="body-area">
                <section>
                    <div className="main-area">
                        <bold>이번 주 인기 영화 TOP 10</bold>
                        {/*이건 부트 스트랩 끌어 옴 */}
                        {/*컴포넌트화 해서 map으로 돌려보기 */}
                        <div className="container">
                            <div className="row">
                                {
                                    props.movie.map((a, i) => {
                                        return (
                                            <div className="col-md-4"
                                                 onClick={()=>{navigate(`/movie/${i}`)}}
                                            >
                                                <img src={process.env.PUBLIC_URL + `/image${i + 1}.png`}
                                                     alt={props.movie[i].title} width="90%"/>
                                                {/* 서브 경로에 발행시 문제가 될 수 있으니 위의 경로로 코드를 짜면 됨 */}
                                                <h2>{props.movie[i].id}</h2>
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

