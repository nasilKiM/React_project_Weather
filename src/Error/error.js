function getError(err) {
  if (err.response.status === 404) {
    return "없는 도시입니다";
  }
  if (err.response.status === 401) {
    return "인증코드가 잘못되었습니다";
  }
}

export default getError;
