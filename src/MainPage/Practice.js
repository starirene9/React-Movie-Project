import {useDeferredValue, useState, useTransition} from "react";

let a = new Array(10000).fill(0);
// 0이 만개 정도 채워진 array 가 남음

function Practice(){
    let [name, setName] = useState('');
    let [isPending, startTransition] = useTransition();
    // 보통 이 두개로 작명을 많이 함
    let state = useDeferredValue(name)
    // state나 props 사용 가능 : 늦게 처리 됨
    // 사용시 {name}
    return(
        <div>
            <input onChange={(e) => {
                startTransition(()=>{
                // 콜백함수로 넣어서 감싸주면 됨 : 이 안에 있는 코드를 늦게 실행
                setName(e.target.value)
                })
            }}/>
            {
                // isPending 은 여기에서 씀 : true로 사용
                isPending ? '로딩중' :
                a.map(()=>{
                    return <div>{name}</div>
            //  만번 돌려서 성능이 느려짐
            })
            }
        </div>
    )
}