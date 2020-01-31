---
layout: post
title:  "[CodeEngn] Advance RCE L08 문제 풀이 Write Up"
date:   2020-01-31
tags: [reversing, writeup]
sitemap :
changfreq : daily
priority : 1.0
categories: [reversing,writeup]
---

![L08 문제](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fd3moCM%2FbtqBE2ajaMw%2FZ4MtGz2ifmKVF8EB4FP860%2Fimg.png)

#Advance RCE L08
---

Key 값이 5D88-53B4-52A87D27-1D0D-5B09 일때 Name은 무엇인가
<b>힌트 : Name은 두자리인데.. 알파벳일수도 있고 숫자일수도 있고..</b>
정답인증은 Name의 MD5 해쉬값(대문자)

PEID로 먼저 열어보기로 했다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fdqhak2%2FbtqBDWBSWv3%2FxyJscieMu9ZCSQFRP41wIk%2Fimg.png)

델파이로 만들어진 프로그램인 것을 볼 수 있었고,

올리디버거로 열어봤다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbepP9l%2FbtqBCn70faF%2FoEdwndM73JIIKqQIaQBTv1%2Fimg.png)

스트링검색부터 해보도록 하겠다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2F6obsP%2FbtqBFNjqBBZ%2FtsZcuadesioZvBbiDivrQK%2Fimg.png)

저번 7번 문제가 상당히 골치아파서 역시 Advance 문제인가 했지만

성공메세지가 너무 쉽게 노출되는 것을 보고, 쉽게 클리어가 가능할 것이라고 에상했지만.. 힘들었다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fbs8Anz%2FbtqBEAE66ak%2FkiIevOmFKmDSLA9EpMTuEK%2Fimg.png)

성공메세지와 실패메세지 위의 PUSH EBP에 BP를 걸고 실행했다.

폼에 키를 적고, 네임은 12으로 하여 체크를 했다.

위의 BP부분에서 걸렸고,

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FCIQ3Z%2FbtqBFv4q0fF%2Fb24MqNbXXnqf93eZl6yCnK%2Fimg.png)

3글자 이상으로 입력하도록 된 것을 볼 수 있다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FXXKhM%2FbtqBCnNIpOw%2Ftq64XobwoUy1FdiseowLC1%2Fimg.png)

이를 2로 수정하고, 파일을 저장하겠다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FmPmsw%2FbtqBE1JigKw%2FRDunHEK8z3gkTWrbXxdGsk%2Fimg.png)

2로 바뀐 것을 볼 수 있고,

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbIYGzf%2FbtqBD2BUhyz%2FAptU5htD6DcKzVRJ08dhq0%2Fimg.png)

F8을 눌러 실행을 하면 해당 부분에서 12에 해당하는 시리얼을 만드는 것을 알 수 있었다.

어떤식으로 시리얼을 만드는지 보도록 하겠다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FeyxTRh%2FbtqBE1oYZ5f%2Fy3MPObNbFhvdu5XH2EIVsK%2Fimg.png)

해당 부분에서 Name에 맞는 첫번째 4자리의 시리얼을 만드는 부분인 것 같다.

분석해보자면

{% highlight ruby %}
MOV EBX,DWORD PTR SS:[EBP-4]  - EBX에 ebp-4의 값(12)을 넣는다.

MOVZX ESI,BYTE PTR DS:[EBX+ECX-1] - ESI에 EBX+ECX-1(12)의 값 중 1바이트(1)를 넣는다.

ADD ESI,EDX - ESI+=EDX

IMUL ESI,ESI,772  - ESI*=772

MOV EDX,ESI - EDX에 ESI의 값을 넣는다.

IMUL EDX,ESI - EDX에 ESI의 값을 곱한다. ( EDX*=ESI )

ADD ESI,EDX - ESI+=EDX

OR ESI,ESI - ESI와 ESI의 OR연산 (2진수로 변환하여 진행)

IMUL ESI,ESI,474 - ESI*=474

ADD ESI,ESI - ESI+=ESI

MOV EDX,ESI - EDX에 ESI값을 넣는다.

INC ECX  - ECX++

DEC EAX - EAX--

JNZ SHORT 08_1.0045B89D 결과가 0이 아니면 0045B89D로 점프
{% endhighlight %}

간단하게 위의 분석으로 파이썬 코드를 짜봤다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FtHGuV%2FbtqBDXgGIZE%2FMgbAG9cFjgTkCbK8Freuh0%2Fimg.png)

검색을 통해 찾고있는 5d88을 검색해봤다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FWLfV1%2FbtqBD2aWB3P%2FrO3lo1o4vp9UF9JouKKm00%2Fimg.png)

위의 글자를 입력했을때 5d88이 나오는 것을 알 수 있었고,

잘 인증이 되는지 확인해봤다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fes8XGB%2FbtqBDcE58LH%2F35eQ6fep2x6KHYW8ppoP31%2Fimg.png)

인증이 되는 것을 볼 수 있었고,

'MD5 해쉬값 대문자'로 인증하면 클리어가 된다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbI5OIr%2FbtqBGe84EGT%2FRRanWLBkVJ8iOeqKiNPJFK%2Fimg.png)

