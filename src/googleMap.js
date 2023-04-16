import { useEffect, useRef, useState } from "react";

function GoogleMap() {
  /*
    구글 api 유료... 테스트를 아껴서하자
    useEffect 훅을 사용해서 google.maps 객체를 가져오기(구글맵 API 로드) 
    google.maps.Map 클래스 (지도생성) 
    ref ---> 지도를 표시할 HTML 요소참조
    useRef ---> 마커표시용 google.maps.Marker 객체생성
    setMap 메서드로 마커표시포함된 지도설정하기  
    */
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [city, setCity] = useState("");

  useEffect(() => {
    const googleMapsScript = document.createElement("script");
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}`;
    window.document.body.appendChild(googleMapsScript);
    googleMapsScript.addEventListener("load", () => {
      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 12,
        center: { lat: 37.5326, lng: 127.024612 }, // 지도 초기 위치 (서울 시청)
      });
      markerRef.current = new window.google.maps.Marker({
        position: { lat: 37.5326, lng: 127.024612 }, // 마커 초기 위치 (서울 시청)
      });
      markerRef.current.setMap(map);
    });
  }, []);

  const handleSearch = () => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: city }, (results, status) => {
      if (status === "OK") {
        const location = results[0].geometry.location;
        mapRef.current.panTo(location);
        markerRef.current.setPosition(location);
      } else {
        alert(`${status}`);
      }
    });
  };

  return (
    <div>
      <div>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div ref={mapRef} style={{ width: "100%", height: "400px" }} />
    </div>
  );
}

export default GoogleMap;
