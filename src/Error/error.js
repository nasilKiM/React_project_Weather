function getError(err) {
  if (err.response.status === 404) {
    return "입력하신 도시를 찾을 수 없습니다😥";
  }
  if (err.response.status === 401) {
    return "인증코드가 잘못되었습니다";
  }
}

export default getError;
