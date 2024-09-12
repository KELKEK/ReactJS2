import { useNavigate } from "react-router-dom";

const ACCESS_TOKEN = "ACCESS_TOKEN";

export function call(api, method, request) { //1:UTL, 2:요청방식, 3:요청시 보낼 data
  let headers = new Headers({
    "Content-Type": "application/json",
  });

  // 로컬 스토리지에서 ACCESS TOKEN 가져오기
  const accessToken = localStorage.getItem("ACCESS_TOKEN");

  if (accessToken && accessToken !== null) {
    headers.append("Authorization", "Bearer " + accessToken);
  }

  let options = {
    headers: headers,
    url: api,
    method: method,
  };

  //조회는 요청 data가 없음, 입력과 수정 시에는 보내는 data 있음
  if (request) {
    // GET method
    options.body = JSON.stringify(request);
  }

  //비동기 통신 : axios, ajax, fetch, promise
  return fetch(options.url, options)
    .then((response) =>
      response.json().then((json) => {
        console.log(json);
        if (!response.ok) {
          // response.ok가 true이면 정상적인 리스폰스를 받은것, 아니면 에러 리스폰스를 받은것.
          return Promise.reject(json);
        }
        return json;
      })
    )
    .catch((error) => {
      // 추가된 부분
      console.log(error.status);
      if (error.status === undefined || error.status === 403) {
        window.location.href = "/login"; // redirect
      }
      return Promise.reject(error);
    });
}

//userDTO = {mid: "", mpassword: ""}
export function signin(userDTO) {
  return call("http://localhost:9999/auth/login", "POST", userDTO).then(
    (response) => {
      console.log(response);
      if (response.token) {
        // 로컬 스토리지에 토큰 저장
        localStorage.setItem(ACCESS_TOKEN, response.token);
        // token이 존재하는 경우 Todo 화면으로 리디렉트
        window.location.href = "/webboard/list";
      }
    }
  );
}

export function signout() {
  localStorage.setItem(ACCESS_TOKEN, null);
  window.location.href = "/login";
}

export function signup(userDTO) {
  return call("/auth/signup", "POST", userDTO);
}
