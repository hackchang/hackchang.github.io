
var placeOverlay = new kakao.maps.CustomOverlay({ zIndex: 1 }),
    contentNode = document.createElement('div'), // 커스텀 오버레이의 컨텐츠 엘리먼트 입니다 
    markers = [], // 마커를 담을 배열입니다
    currCategory = 'CE7'; // 현재 선택된 카테고리를 가지고 있을 변수입니다

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(36.820024, 127.155561), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
    };

// 지도를 생성합니다    
var map = new kakao.maps.Map(mapContainer, mapOption);
// 장소 검색 객체를 생성합니다
var ps = new kakao.maps.services.Places(map);
ps.categorySearch('CE7', placesSearchCB, { useMapBounds: true, radius: 1000 }); //첫 화면에서 실행
// 지도에 idle 이벤트를 등록합니다
kakao.maps.event.addListener(map, 'idle', idle_event2);

// 커스텀 오버레이의 컨텐츠 노드에 css class를 추가합니다 
contentNode.className = 'placeinfo_wrap';

// 커스텀 오버레이의 컨텐츠 노드에 mousedown, touchstart 이벤트가 발생했을때
// 지도 객체에 이벤트가 전달되지 않도록 이벤트 핸들러로 kakao.maps.event.preventMap 메소드를 등록합니다 
addEventHandle(contentNode, 'mousedown', kakao.maps.event.preventMap);
addEventHandle(contentNode, 'touchstart', kakao.maps.event.preventMap);

// 커스텀 오버레이 컨텐츠를 설정합니다
placeOverlay.setContent(contentNode);
function addEventHandle(target, type, callback) {
    if (target.addEventListener) {
        target.addEventListener(type, callback);
    } else {
        target.attachEvent('on' + type, callback);
    }
}
function idle_event2() {
    $('.idle_event').css('display', 'block');

}
//<!-- 
// 주소창 자동 닫힘 
window.addEventListener("load", function () {
    setTimeout(loaded, 100);

}, false);

function loaded() {
    window.scrollTo(0, 1);
}
//--> 
function idle_event() {
    $('.idle_event').css('display', 'none');
    // placeOverlay.setMap(null);
    removeMarker();
    for (var count = 1; count <= 45; count++) {
        ps.categorySearch('CE7', placesSearchCB, {
            size: 15,
            page: count,
            radius: 1000,
            useMapBounds: true
        });
    }
    setTimeout(() => ps.categorySearch('CE7', placesSearchCB, {
        size: 15,
        page: 1,
        radius: 1000,
        useMapBounds: true
    }));

}
function placesSearchCB(data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {
        // 정상적으로 검색이 완료됐으면 지도에 마커를 표출합니다
        displayPlaces(data);
        displayPagination(pagination);
    }
}

///
function displayPlaces(places) {
    var listEl = document.getElementById('placesList'),
        menuEl = document.getElementById('menu_wrap'),
        list = document.getElementById('pagination'),
        fragment = document.createDocumentFragment(),
        bounds = new kakao.maps.LatLngBounds(),
        listStr = '';
    removeAllChildNods(listEl);
    for (var i = 0; i < places.length; i++) {
        // 마커를 생성하고 지도에 표시합니다
        var marker = addMarker(new kakao.maps.LatLng(places[i].y, places[i].x)),
            itemEl = getListItem(i, places[i]);
        // 마커와 검색결과 항목을 클릭 했을 때
        // 장소정보를 표출하도록 클릭 이벤트를 등록합니다
        (function (marker, place) {
            kakao.maps.event.addListener(marker, 'click', function () {
                displayPlaceInfo(place);
                // map.setCenter(new kakao.maps.LatLng(place.y, place.x));
            });
            itemEl.onclick = function () {
                displayPlaceInfo(place);
                map.setCenter(new kakao.maps.LatLng(place.y, place.x));
            };
        })(marker, places[i]);
        fragment.appendChild(itemEl);
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다

    }
    // 검색결과 항목들을 검색결과 목록 Elemnet에 추가합니다
    listEl.appendChild(fragment);
    menuEl.scrollTop = 0;

    // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
    // map.setBounds(bounds);
}
function addMarker(position) {
    var imageSrc = 'coffeeshop.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
        imageSize = new kakao.maps.Size(45, 45),  // 마커 이미지의 크기
        markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize),
        marker = new kakao.maps.Marker({
            position: position, // 마커의 위치
            image: markerImage
        });

    marker.setMap(map); // 지도 위에 마커를 표출합니다
    markers.push(marker);  // 배열에 생성된 마커를 추가합니다

    return marker;
}

function removeMarker() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}

///
// 지도에 마커를 표시하는 함수입니다
function displayPlaceInfo(place) {

    var newname = '';// 체인점 제거
    for (i = 0; i < place.place_name.length; i++) {
        if (place.place_name[i] != ' ') {
            newname += place.place_name[i]
        }
        else { break; }

    }
    var content = '<div class="placeinfo">' +
        '        <div class="title">' +
        place.place_name +
        '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
        '            </div>' +
        '        <div class="body">' +
        '            <span class="img">' +
        '              <a href="https://place.map.kakao.com/m/'+place.id+'#menuInfo"><img class="img" src="menu.png"></a>' +
        '           </span>' +
        '            <div class="desc">' +
        '                <div class="address" title="' + place.road_address_name + '">' + place.road_address_name + '</div>' +
        '                <div class="jibun" title="' + place.address_name + '">' + place.address_name + ')</div>' +
        '                <div class="tel">' + place.phone + '</div>' +
        '               </div>'+
        '               </div>';
    // if (mo_chk() === 'pc' || 'ios') {
    //     var content = '<div class="placeinfo">' +
    //     '        <div class="title">' + 
    //     place.road_address_name+
    //     '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
    //     '        </div>' + 
    //     '       <div class="body">'
    //         // '   <a class="title" href="https://www.instagram.com/explore/tags/' + newname + '" target="_blank" title="' + place.place_name + '">' + place.place_name + '</a>' + '    <span title="' + place.road_address_name + '">' + place.road_address_name + '</span>' +
    //         // ' <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
    //         '  <span class="jibun" title="' + place.address_name + '">(지번 : ' + place.address_name + ')</span>' + '    <span class="tel">' + place.phone + '</span>' +
    //         '</div>' +
    //         '<div class="after"></div>';
    // }
    // else {
    //     var content = '<div class="placeinfo">' +
    //         '   <a class="title" href="intent://instagram.com/explore/tags/' + newname + '#Intent;package=com.instagram.android;scheme=https;end" target="_blank" title="' + place.place_name + '">' + place.place_name + '</a>' + '    <span title="' + place.road_address_name + '">' + place.road_address_name + '</span>' +
    //         ' <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
    //         '  <span class="jibun" title="' + place.address_name + '">(지번 : ' + place.address_name + ')</span>' + '    <span class="tel">' + place.phone + '</span>' +
    //         '</div>' +
    //         '<div class="after"></div>';
    // }

    contentNode.innerHTML = content;
    placeOverlay.setPosition(new kakao.maps.LatLng(place.y, place.x));
    placeOverlay.setMap(map);
}
function menu_popup(place){
    var url = 'https://place.map.kakao.com/m/'+place.id+'#menuInfo';
    var name = "menu";
    var option = "width = 500, height = 500 location = no"
    window.open(url,name,option);
}
function closeOverlay() {
    placeOverlay.setMap(null);
}
// search_place();
///주소 정보 좌표값 요청
function search_place() {
    map.setLevel(4);
    var input = document.getElementById("search_input").value;
    ps.keywordSearch(input, placesSearchCB, {
        category_group_code: "CE7",
        radius: 1000
    });
    function placesSearchCB(data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가합니다
            var bounds = new kakao.maps.LatLngBounds();

            for (var i = 0; i < data.length; i++) {
                bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
            }
            map.setBounds(bounds);
            //위 주석은 Bounds로 넓게 중간위치
            // var placePosition = new kakao.maps.LatLng(data[0].y, data[0].x);
            // map.setCenter(placePosition);
            idle_event();
        }
        else if (status === kakao.maps.services.Status.ZERO_RESULT) {
            // 검색결과가 없는경우 해야할 처리가 있다면 이곳에 작성해 주세요
            alert('검색 결과가 존재하지 않습니다.');
            return;

        } else if (status === kakao.maps.services.Status.ERROR) {
            // 에러로 인해 검색결과가 나오지 않은 경우 해야할 처리가 있다면 이곳에 작성해 주세요
            alert('검색 결과 중 오류가 발생했습니다.');
            return;
        }
    }
}
var now_layer_id = '';

//토글 검색
function toggle_search() {
    if ($(".search_form").css("display") == "none") {
        $(".search_form").show();
    } else {
        $(".search_form").hide();
        $("#search_input").val('');
    }
}

//모바일 체크
function mo_chk() {
    var os;
    var mobile = (/iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase()));

    if (mobile) {
        var userAgent = navigator.userAgent.toLowerCase();
        if (userAgent.search("android") > -1) {
            return os = "android";
        } else if ((userAgent.search("iphone") > -1) || (userAgent.search("ipod") > -1) || (userAgent.search("ipad") > -1)) {
            return os = "ios";
        } else {
            return os = "other";
        }

    } else {
        return os = "pc";
    }
}
//검색 엔터가능
function enter() {
    if (window.event.keyCode == 13) {
        search_place();
    }
}


function getListItem(index, places) {
    var newname = '';// 체인점 제거
    for (i = 0; i < places.place_name.length; i++) {
        if (places.place_name[i] != ' ') {
            newname += places.place_name[i]
        }
        else { break; }
    }

    var el = document.createElement('li'),
        itemStr = '<span class="markerbg marker_' + (index + 1) + '"></span>' +
            '<div class="info">' +
            '   <span class="title">' + places.place_name + '</span>'

    if (places.road_address_name) {
        itemStr += '    <span>' + places.road_address_name + '</span>' +
            '   <span class="jibun gray">' + places.address_name + '</span>';
    } else {
        itemStr += '    <span>' + places.address_name + '</span>';
    }
    if (places.phone) {
        itemStr += ' <img class="insta_search" src="instagram.png" title="인스타검색" onclick="' + mo_chk_insta() + newname + '\';\"></img>' +
            ' <img class="finding_path" src="find.png" title="길찾기" onclick="location.href=\'https://map.kakao.com/link/to/' + places.id + '\'\";></img>' +
            '  <span class="tel">' + places.phone + '</span></div';
    }
    else {//                     현위치                      갈위치
        //daummaps://route?sp=37.537229,127.005515&ep=37.4979502,127.0276368&by=FOOT
        itemStr += ' <img class="insta_search2" src="instagram.png" title="인스타검색" onclick="' + mo_chk_insta() + newname + '\';\"></img>' +
            ' <img class="finding_path2" src="find.png" title="길찾기" onclick="location.href=\'https://map.kakao.com/link/to/' + places.id + '\'\";></img>';
    }
    el.innerHTML = itemStr;
    el.className = 'item';
    return el;
}
function mo_chk_insta() {
    if (mo_chk() === 'pc' || 'ios') {
        var content = 'location.href=\'https://www.instagram.com/explore/tags/';
    }
    else {
        var content = 'intent://instagram.com/explore/tags/';
    }
    return content;
}
function displayPagination(pagination) {
    var paginationEl = document.getElementById('pagination'),
        fragment = document.createDocumentFragment(),
        i;
    // 기존에 추가된 페이지번호를 삭제합니다
    while (paginationEl.hasChildNodes()) {
        paginationEl.removeChild(paginationEl.lastChild);
    }
    pagination.gotoPage(i);
    for (i = 1; i <= pagination.last; i++) {
        var el = document.createElement('a');
        el.href = "#";
        el.innerHTML = i;

        if (i === pagination.current) {
            el.className = 'on';
        } else {
            el.onclick = (function (i) {
                return function () {
                    pagination.gotoPage(i);
                }
            })(i);
        }

        fragment.appendChild(el);
    }

    paginationEl.appendChild(fragment);
}

function removeAllChildNods(el) {
    while (el.hasChildNodes()) {
        el.removeChild(el.lastChild);
    }
}
