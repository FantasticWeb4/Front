import React, { useState, useEffect } from 'react';
// [ 👨‍🎓 MISSION 7 ] UserList 컴포넌트를 만들고 import 하세요.
// import UserList from './UserList'; 

const API_URL = '명세를 보고 써보세요';

// ----------------------------------------------------
// [ 👨‍🎓 MISSION 1: API 타입 정의 ]
// API 명세서를 보고 'User' 타입을 'interface'로 정의하세요.
// (Address, Company 등 중첩 객체도 포함)
// ----------------------------------------------------
// interface User { ... }


function App() {
  // [ 👨‍🎓 MISSION 2: State 타입 및 추가 ]
  // 1. 'users' state에 'User[]' 타입을 적용하세요.
  // 2. 'loading' (boolean) state를 추가하세요. (초기값 true)
  // 3. 'error' (string | null) state를 추가하세요. (초기값 null)
  const [users, setUsers] = useState([]); // <--- any[]
  // const [loading, ...]
  // const [error, ...]

  useEffect(() => {
    async function fetchUsers() {
      // [ 👨‍🎓 MISSION 3: try...catch...finally ]
      // API 호출 로직 전체를 'try...catch...finally'로 감싸세요.
      try {
        const response = await fetch(API_URL);
        if (!response.ok) { // 2. fetch는 404/500 에러를 잡지 못하므로, 직접 에러를 발생시킵니다.
          throw new Error('데이터 로드 실패: ' + response.status);
        }
        
        // [ 👨‍🎓 MISSION 4: 응답 데이터 타입 적용 ]
        const data = await response.json(); // <--- any
        // 'data' 변수에 'User[]' 타입을 적용하세요.
        
        setUsers(data);
      } catch (err) {
        // [ 👨‍🎓 MISSION 5: 에러 처리 ]
        // 'err'가 Error 객체인지 확인하고, 'err.message'를 'error' state에 저장하세요.
        // (힌트: if (err instanceof Error) { ... })
      } finally {
        // [ 👨‍🎓 MISSION 6: 로딩 종료 ]
        // 'finally' 블록에서 'loading' state를 'false'로 변경하세요.
      }
    }
    fetchUsers();
  }, []);

  // [ 👨‍🎓 MISSION 7: 렌더링 분기 처리 ]
  // 'loading'과 'error' state에 따라 다른 UI를 보여주세요.
  if (loading) {
    return <div>로딩 중...</div>;
  }
  if (error) {
    return <div>에러 발생: {error}</div>;
  }

  return (
    <div>
      <h1>사용자 목록</h1>
      {/* [ 👨‍🎓 MISSION 8: 컴포넌트 분리 및 Props 타입 ]
        이 <ul> 부분을 'UserList' 컴포넌트로 분리하고 'users'를 prop으로 넘기세요.
        'UserList.tsx' 파일에서 'users' prop의 타입을 'User[]'로 지정하세요.
        (li에 'key={user.id}'도 추가해 주세요)
      */}
      <ul>
        {users.map((user: any) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;