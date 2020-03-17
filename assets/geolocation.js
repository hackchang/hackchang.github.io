function loadPost() {
    if (!!navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }
    else {
        alert("이 브라우저는 Geolocation를 지원하지 않습니다");
    }
}
function errorCallback(error) {
    alert(error.message);
}
function successCallback(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    locPosition = new kakao.maps.LatLng(lat, lng), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
        MarkPosition = new kakao.maps.Marker({
            position: locPosition
        });
    map.setCenter(locPosition) //현재위치이동
    MarkPosition.setMap(map); //현재위치마크
}
// function play(){
//  navigator.geolocation.getCurrentPosition(function (position) {
//     var lat = position.coords.latitude, // 위도
//         lon = position.coords.longitude; // 경도


//     locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
//     MarkPosition = new kakao.maps.Marker({
//         position: locPosition
//     });
//     map.setCenter(locPosition);
//     MarkPosition.setMap(map);
// });
// }