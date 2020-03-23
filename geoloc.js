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
    var lng = position.coords.longitude,
        locPosition = new kakao.maps.LatLng(lat, lng), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
        MarkPosition = new kakao.maps.Marker({
            position: locPosition,
            image: new kakao.maps.MarkerImage("marker.png", new kakao.maps.Size(40, 33))
        });
    //전에 위치 남아있는거 고쳐야됨
    map.setCenter(locPosition); //현재위치이동
    MarkPosition.setMap(map); //현재위치마크
}

////여기부터 지도움직이면 자동으로 찾기
function new2(){ 
var newPosition = new kakao.maps.LatLng(36.804767, 127.106046);
var MarkPosition = new kakao.maps.Marker({
    position: newPosition
});
map.setCenter(newPosition);
MarkPosition.setMap(map);
ps.categorySearch('CE7', placesSearchCB, {
    location: newPosition,
    radius: 1000,
    size: 15,
    page: 1,
    useMapBounds:true
});
}
// function click_button(){
//     for ( var count = 1; count <= 45; count++) {
//     ps.categorySearch('CE7', placesSearchCB, {
//         location : new kakao.maps.LatLng(successCallback.lat,successCallback.lng),
//         radius : 1000,
//         size : 15,
//         page : count
//     }); 
// }
// }
// function markMake() {
//     // 마커를 생성하고 지도에 표시합니다
//     var marker = new kakao.maps.Marker({
//         map: map,
//         position: new kakao.maps.LatLng(successCallback.lat,successCallback.lng),
//         image: new kakao.maps.MarkerImage("coffeeshop.png",new kakao.maps.Size(22,22))

//     });

//     // 마커에 클릭이벤트를 등록합니다
//     kakao.maps.event.addListener(marker, 'click', function() {
//         var newname='';// 체인점 제거
//         for (i=0;i<place_name.length;i++){
//             if(place_name[i]!=' '){
//                 newname+=place_name[i]
//             }
//             else{break;}
//         }
//         // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
//         infowindow.setContent('<div class="placeinfo">' +
//                     '   <a class="title" href="https://www.instagram.com/explore/tags/' + newname + '" target="_blank" title="' + place.place_name + '">' + place.place_name + '</a>'+'    <span title="' + place.road_address_name + '">' + place.road_address_name + '</span>' +
//                     '  <span class="jibun" title="' + place.address_name + '">(지번 : ' + place.address_name + ')</span>'+ '    <span class="tel">' + place.phone + '</span>' + 
//                 '</div>' + 
//                 '<div class="after"></div>');
//         infowindow.open(map, marker);
//     });
// }
// function play(){
//  navigator.geolocation.getCurrentPosition(function (position) {
//     var lat = position.coords.latitude, // 위도
//         lon = position.coords.longitude, // 경도


//     locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
//     MarkPosition = new kakao.maps.Marker({
//         position: locPosition
//     });
//     map.setCenter(locPosition);
//     MarkPosition.setMap(map);
// });
// }