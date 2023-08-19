import {configureStore, createSlice} from "@reduxjs/toolkit";
import {create} from "axios";

// createSlice 는 useState와 비슷
// { name : 'state이름', initialState : 'state값' } 필수이며, state 하나 생성


let people = createSlice({
    name: 'people',
    initialState: [
        {type: '일반', count: 0},
        {type: '청소년', count: 0},
        {type: '경로', count: 0},
        {type: '우대', count: 0},
    ],
    // addCount(3)하면 state[3].count 를 불러오는 것과 같음
    reducers: {
        addCount(state, action) { // 파라미터인 action 전달, 데리고 올때 action.payload
            // findIndex 사용하기! array 에서만 사용 가능하고 return 안에 조건식 넣기
            // let 번호 = state.findIndex((a)=>{return a.id === action.payload})
            // state[번호].count++
            state[action.payload].count++
        }
    }
})

export let {addCount} = people.actions

let user = createSlice({
    name: 'user',
    initialState: {name: 'Kim', point: 10},
    reducers: {
        // array, object의 경우 직접 수정해도 state가 변경 됩니다.
        changeName(state) {
            state.name = 'Gu'
        },
        increase(state, action) {
            // 버튼 누르면 point 가  + num => 보통 action으로 작명을 많이 함
            // return 없이도 이런 식으로 수정 가능 : 그래서 문자 하나도 이런식으로 만듦
            state.point += action.payload; //payload : 화물, 소포로 전송의 뜻
        },
    }
})

//onClick={()=>{dispatch(increase(10))}} 갖다 쓸때는 이렇게 쓰기
export let {changeName, increase} = user.actions

let reviews = createSlice({
    name: 'reviews',
    initialState: '별로 였어요',

    // state 수정하는 법
    // 1. state 변경하는 함수만들고
    // 2. export
    // 3. 사용시 dispatch(changeReview()) 감싸서 사용
    reducers: {
        changeReview() {
            return '인생 최고의 영화였습니다.'
        }
    }
})

export let {changeReview} = reviews.actions

// Booking page 에서 공유할 locations
let locations = createSlice({
    name: 'locations',
    initialState: {
        서울: ['이촌동', '태릉입구', '명동', '강남역'],
        경기: ['남양주', '안산', '용인'],
        강원: ['춘천', '화천', '철안 군부대'],
        부산: ['서면역', '해운대 바다극장', '부산대'],
    }
});

//     영화 제목과 id를 booking 페이지로 전달해 다오..
// 너의 사용 용도 의문.. 다시 생각해보자 이미 data에 있음
let movies = createSlice({
    name: 'bookedMovie',
    initialState: [
        {id : '1', title : "비상선언", age : "15+"},
        {id : '2', title : "명탐정 코난", age :"All"},
        {id : '3', title : "미스트", age :"18+"},
        {id : '4', title : "해리포터와 마법사의 돌", age : "All"},
        {id : '5', title : "미션 임파서블", age :"18+"},
        {id : '6', title : "분노의 질주 : 라이드 오어 다이", age :"18+"},
    ],
    reducers : {
        addItem(state, action) { // push 함수는 array 뒤에 자료 추가해주는 함수
            state.push(action.payload)
        }
    }
})

export let {addItem} = movies.actions

// 이 곳에 등록해줘야 하면 createSlice를 모든 곳에서 사용 가능
export default configureStore({
    reducer: {
        movies : movies.reducer,
        reviews: reviews.reducer,
        locations: locations.reducer,
        user: user.reducer,
        people: people.reducer,

    }
})