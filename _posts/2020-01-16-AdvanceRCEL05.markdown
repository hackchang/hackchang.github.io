---
layout: post
title:  "[CodeEngn] Advance RCE L05 문제 풀이 Write Up"
date:   2020-01-16
tags: [reversing, writeup]
sitemap :
changfreq : daily
priority : 1.0
categories: [reversing,writeup]
---

![L05 문제](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FEfNqD%2FbtqBh2Bgrxi%2F2tdibCxeNKccomSjiihhv0%2Fimg.png)

#Advance RCE L05
---
Serial 을 구하시오

항상 해왔던 것처럼 PEID에 올려봤다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FchyY07%2FbtqBgdw1Eyg%2FeJ79bADAnqtMEbMTmPckAk%2Fimg.png)

비주얼 베이직으로 만든 프로그램인 것을 볼 수 있었고, 실행을 시켜봤다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FdZnd29%2FbtqBfrJiXpN%2FcOar0iLhkxUXxfw1mVhT8K%2Fimg.png)

실행시키면 위와 같은 프로그램이 나오게 된다.

자세히 보기위해 올리디버거로 열어보도록 하겠다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FNBPy9%2FbtqBgeCE65d%2FUamFiXmaQcivhwmZU8c5Q0%2Fimg.png)

우선 함수부터 찾아보기로 했다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FmIfwe%2FbtqBfrWOa4U%2FVGalxocxGJZJ0IwgEDGV2k%2Fimg.png)

많은 함수들을 찾았지만, 여기서 익숙한 함수를 보게되었다.

비주얼 베이직 프로그램의 문자열 비교 함수인 <b>__vbaStrCmp를 찾았고, 해당 부분에 BP를 걸고 실행시켜봤다.</b>

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2F6br5E%2FbtqBhEglSht%2FzjSZwgDMCj0m2KftYK5qnk%2Fimg.png)

프로그램에 12345를 입력하고 ok를 눌렀다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fbk5gmD%2FbtqBfrvI54E%2F7xirbCQKvjiMOwVjft8ka1%2Fimg.png)

BP를 걸어둔 부분에서 걸리는 것을 볼 수 있고, 12345는 입력값이고, ECX의 값이 시리얼값이라고 추측된다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FVRCLq%2FbtqBeSG6cCA%2FsT2fzPkUmvpwgTke6L72yK%2Fimg.png)

이렇게 프로그램을 재실행 후 시리얼값으로 추측되는 값을 넣으면 해당 메세지박스가 출력된다.

성공메세지로 보여 사이트에 인증을 했더니 클리어가 됐다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fcm09k6%2FbtqBikV0KpW%2FQfocXAu6i9PxMaugS87ZkK%2Fimg.png)