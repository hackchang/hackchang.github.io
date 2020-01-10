---
layout: post
title:  "[CodeEngn] Advance RCE L01 문제 풀이 Write Up"
date:   2020-01-10
tags: [reversing, writeup]
sitemap :
changfreq : daily
priority : 1.0
categories: [reversing,writeup]
---

![L01 문제](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fba8Fca%2FbtqA58B2Dau%2F7BKaM9vGTbH6WNCS22kTI0%2Fimg.png)

Basic을 모두 클리어하고, 다음 난이도인 Advance 문제를 풀이해보도록 하겠다.

#Advance RCE L01
---
이 프로그램은 몇 밀리세컨드 후에 종료 되는가

정답인증은 MD5 해쉬값(대문자) 변환 후 인증하시오



습관처럼 PEID에 파일을 올려보았다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FJw6hU%2FbtqA4Alv8Z8%2FLt84wwVuzPksbyv6xSKuQk%2Fimg.png)

UPX로 패킹된 것을 볼 수 있었고, 언패킹을 진행했다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fz5CHZ%2FbtqA2VDFbQS%2FCK4DtHSUmKNVvZ1k21KASK%2Fimg.png)

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FDafWC%2FbtqA2NTt8pW%2F9p3JjB1uXpWUDPk42CbyKk%2Fimg.png)

PEID에 다시 올려 언패킹이 된 것을 확인할 수 있다.

올리디버거에 올려서 분석해보도록 하겠다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fx9Wfq%2FbtqA2auvX3m%2FunisUlkr3Usfr3uBHc6WYK%2Fimg.png)

Basic의 문제중에 비슷한 문제가 존재했기 때문에 함수를 검색해본다.

아마도 timeGetTime 함수가 있지 않을까 예상된다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fbk0Flf%2FbtqA6pKim2w%2FIhKKlMnGsFffNYGKkxq28k%2Fimg.png)

예상과 같이 timeGetTime 함수가 존재하는 것을 볼 수 있었고,

함수를 눌러 자세히 보도록 하겠다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FspovA%2FbtqA6oSaeby%2FY1YdYQSv5MqH6x8bAO0UB0%2Fimg.png)

해당 함수를 호출하는 모든 부분에 BP를 걸고, F9를 눌러 실행시켜봤다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbUKzLB%2FbtqA6pDzDo3%2F6HI4o3ENAXPArISastkzRk%2Fimg.png)

Basic 문제와 같이 안티디버깅이 적용되어 있었고, 똑같이 우회하였다. 

방법은 Basic에서 소개했기 때문에 따로 소개하지 않겠다.

[안티디버깅 우회방법](https://hackchang.github.io/posts/reversing/writeup/BasicRCEL19.html)
---
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FcEtTRh%2FbtqA56RJ5Qt%2F0schbBAteH4KGshtzLFkSK%2Fimg.png)

실행을 시키면 해당 부분에서 브레이크가 걸리는 것을 볼 수 있다.

F8을 눌러 한줄씩 실행하다보면 JNB점프문에서 점프하게된다.

- JNB  : 왼쪽 인자의 값이 오른쪽 인자의 값보다 크거나 같으면 점프

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FPNzvi%2FbtqA2aaeCRK%2FReU0bcaCXfdsTrp6tbk8vK%2Fimg.png)

점프한 부분에서 CMP EAX,DWORD PTR DS:[EBX+4] 이 부분에서 시간을 비교하는 것을 알 수 있었고,

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FdcpA4E%2FbtqA6DO62ok%2F1fc0j5kikXZlBOtHaXhny0%2Fimg.png)

아래의 덤프창에 ebx+4로 이동하여 비교하는 부분을 알 수 있었다.

7b 33 00 00을 리틀엔디언으로 바꾸게 되면 33 7b이므로,

10진수로 전환하면 13,179가 나온다.

이를 MD5로 해쉬화를 진행했다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbihOJF%2FbtqA2VDFNp2%2FAJHlLVrZUCrRrY4IJKywW1%2Fimg.png)

인증방식처럼 대문자로 바꾸어 인증하면 클리어가 된다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fbe6dHz%2FbtqA58a0lNS%2Ffu6Q2fe3rUQhbgGt5jGe41%2Fimg.png)