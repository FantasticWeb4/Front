import { useState, useEffect } from 'react';

// 명세를 보고 써보세요!
const API_URL = '';

function App() {
  // 'any' 타입이지만, 일단 'users' 데이터가 담길 공간입니다.
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // ----------------------------------------------------
    // [ 👨‍🎓 MISSION ]
    // 'fetch'를 사용해 API_URL에서 사용자 목록을 가져오세요.
    // (힌트: .then()을 쓰거나, async/await 함수를 만드세요)
    //
    // 1. 응답(response)을 .json()으로 변환합니다.
    // 2. 변환된 데이터(data)를 'setUsers(data)'로 state에 저장합니다.
    //
    // (지금은 로딩이나 에러 처리를 별도로 안해도 됩니다. 학습하면서 해볼만하면 진행!)
    // ----------------------------------------------------
    
    // 예시:
    // async function fetchData() {
    //   const response = await ...
    //   const data = await ...
    //   setUsers(...)
    // }
    // fetchData();

  }, []); // 빈 배열: 컴포넌트 마운트 시 1회 실행

  return (
    <div>
      <h1>사용자 목록</h1>
      <ul>
        {/* 데이터가 들어오면 'user.name'이 화면에 보일 것입니다.
          (key 에러나 user.id 등은 일단 무시합니다)
        */}
        {users.map((user: any) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;