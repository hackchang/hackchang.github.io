---
layout: post
title:  "[CodeEngn] Advance RCE L06 문제 풀이 Write Up"
date:   2020-01-16
tags: [reversing, writeup]
sitemap :
changfreq : daily
priority : 1.0
categories: [reversing,writeup]
---

![L06 문제](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FWLbIV%2FbtqBh1WGQFP%2FkL8qzHjASoAKRggwVEhp81%2Fimg.png)

#Advance RCE L06
---
남은 군생활은 몇일 인가

정답인증은 MD5 해쉬값(대문자) 변환 후 인증하시오


정말 문제부터 별로였다..

PEID에 올려보기 부터 시작하겠다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2F9tm9B%2FbtqBf2ib6Dl%2FFwLN8rgy2k4IjtwLdIMgMK%2Fimg.png)

UPX로 패킹이 되어있는 것을 볼 수 있다.

툴을 이용하여 간단하게 언패킹을 진행했다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbmFmG8%2FbtqBg8B2e68%2FNSKT8QkqtKqJ4Pzwe7IVxk%2Fimg.png)

언패킹 후, 올리디버거로 열어봤다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbcjU4k%2FbtqBhDV3Jgc%2F3pkqTsl4uFpSIHbh00e3C0%2Fimg.png)

안티디버깅이 적용된 것을 확인할 수 있었고, 간단하게 우회했다.

우회방법은 이전 글에서 소개되어있으니 참고하면 될 것 같다.


실행했을 때 메세지박스가 나오기 때문에, 올리디버거에서 messagebox와 관련된 함수를 검색해봤다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fb4GuGq%2FbtqBeTsxYGm%2FDZ9MrYkqnn753HNbj844m0%2Fimg.png)

역시나 존재하는 것을 알 수 있었고, 해당 함수에 BP를 걸고 실행해봤다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FzyvWA%2FbtqBh0Q2Y2o%2FbvQq02aMknru1WRfBmXLR1%2Fimg.png)

 아래의 스택에 보면 프로그램 실행시 나오는 메세지박스와 동일하다는 것을 알 수 있었고,

F7로 한 줄 씩 노가다를 통해 비교하는 부분을 찾게되었다!!!

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FclrHJc%2FbtqBfrP8ECq%2FGY3rExMbM5KdRXBfHo0Bh0%2Fimg.png)
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FcoONXO%2FbtqBgEVxVVz%2FGqG9ImZ7gnl7cWXEZLFK0K%2Fimg.png)

ebp가 316까지 카운트를 하는 것을 알 수 있었고, 316을 10진수로 바꿔 인증하면 클리어가 된다.

추가로 치트엔진을 통해 해당 값이 맞는지 확인해보도록 하겠다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fcbb0aX%2FbtqBikofFfq%2FYh0ANvloJgCbKfe6gCJGrk%2Fimg.png)

스캔을 통해 4까지 진행하여 4개의 값을 추출했고, 벨류를 모두 789으로 변경 후 확인을 눌러보도록 하겠다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbOBb0I%2FbtqBh2g3VZI%2F8E6KJf0N9x3uHbQjYNt3d1%2Fimg.png)

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FdkAEE4%2FbtqBgeW8RiQ%2FzDO1KSmDxfYkkzVEndEKwk%2Fimg.png)

789의 다음 숫자인 790이 나왔고, 확인을 누르면 프로그램이 종료되는 것으로 봐서 790일 남은 것이다.

또한 Exe2Aut을 통해 간단하게 디컴파일이 가능하여 쉽게 풀 수도 있다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fdm2Yd0%2FbtqBhC3ZsUi%2F8K0KS0LFd2vpXNI4dUETKK%2Fimg.png)

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbzKrtm%2FbtqBgd4Xay0%2Fi8A5g3imTF2wYtoXWYIkB1%2Fimg.png)

