import { useState } from "react";
import Contents from "./components/Contents";
import Title from "./components/Title";

function App() {

  const [count, setCount] = useState(1); // 첫글자는 소문자 카멜케이스 실무자들 사이에 국룰
  const [isModal, setIsModal] = useState(false); // boolen 일때 !를 쓰면 toggle로 쓸 수 있다. !는 반대의 의미 조건문에서 붙을땐 무조건 거짓
  const [txt, setTxt] = useState("");

  // useState() 는 함수라서 뒤에 () 가 붙는다. 읽기전용과 쓰기전용 2개가 있다. 쓰기전용은 set
  // return 함수를 남긴다
  // '0은 false' '1은 true'
  // forwards : 애니메이션이 키프레임의 100%에 도달했을 때 마지막 키프레임을 유지합니다.

  return (
    <>
      <ul>
        <li className="cursor-pointer" onClick={()=>{setTxt("개인정보 처리방침 개정안내"); setIsModal(true)}}>개인정보 처리방침 개정안내</li>
        <li className="cursor-pointer" onClick={()=>{setTxt("선불충전금 관리 현황 공시 (2023년 3분기)"); setIsModal(true)}}>선불충전금 관리 현황 공시 (2023년 3분기)</li>
        <li className="cursor-pointer" onClick={()=>{setTxt("카카오 운영정책 변경 안내"); setIsModal(true)}}>카카오 운영정책 변경 안내</li>
        <li className="cursor-pointer" onClick={()=>{setTxt("카카오 유료서비스 이용약관 변경 사전 안내"); setIsModal(true)}}>카카오 유료서비스 이용약관 변경 사전 안내</li>
      </ul>
      {count}
      <button onClick={()=>{setCount(count + 1); setIsModal(true)}}>🤞</button>
      {/* <Title 작명='뉴스 서브="뉴스타이틀"'/>
      <Contents />
      <Title 부제목='인기순위 부제목'/> */}
      {/* <TestCode 작명='테스트props' />
      <TestCode />
      <TestCode /> */}
      {isModal && <Modal isModal={isModal} setIsModal={setIsModal} count={count} setCount={setCount} txt={txt} />}
      {/* </> self closing tag  */}
    </>
  );
}

function TestCode(props){
  return(
    <div>
      <h3>{props.작명}</h3>
    </div>
  )
}

function Modal({setIsModal,isModal,txt}){
  return(
    <>
    <div className="fixed w-full h-full bg-black/20 left-0 top-0">
      <div className="modal text-center rounded-md bg-white fixed w-2/4 h-2/4 left-2/4 -translate-x-2/4 top-2/4 -translate-y-2/4">
        <h3 className="text-3xl mb-5 mt-2 overflow-hidden">제목</h3>
        <p className="mb-5">내용</p>
        <p className="text-blue-500">{txt}</p>
        <button className="mt-20 text-xs" onClick={()=>{setIsModal(!isModal)}}>닫기</button>
      </div>
    </div>
    </>
  )
}

export default App;
