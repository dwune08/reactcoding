import { createContext } from "react";

// 일기 State를 하위 컴포넌트에 제공하기 위한 Context를 생성한다.
// 다른 파일에서도 사용할 수 있도록 export한다.
export const DiaryStateContext = createContext();

// 일기 State를 변경하는 함수인 onCreate, onUpdate, onDelete를
// 하위 컴포넌트에 제공하기 위한 Context를 생성한다.
export const DiaryDispatchContext = createContext();