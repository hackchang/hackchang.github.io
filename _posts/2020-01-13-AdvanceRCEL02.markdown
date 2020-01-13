---
layout: post
title:  "[CodeEngn] Advance RCE L02 문제 풀이 Write Up"
date:   2020-01-13
tags: [reversing, writeup]
sitemap :
changfreq : daily
priority : 1.0
categories: [reversing,writeup]
---

![L02 문제](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FcOVtQp%2FbtqBaArJHI7%2FophOwCLLkquxqlEHsv5ykk%2Fimg.png)

Advance RCE L02

정답은 무엇인가

습관처럼 이번 문제 또한 PEID에 올려봤다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbmAEiC%2FbtqA8j44UI4%2FeomWjL9s66pYs2YuxkbBHK%2Fimg.png)

따로 패킹이 되어있지 않은 것을 볼 수 있고, C++로 만든 프로그램인 것을 알 수 있었다.

프로그램이 어떤식으로 동작되는지 켜보았다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fvc2KC%2FbtqA7pYNuDq%2FCRTaYK5fWqSKwS1kULGvgK%2Fimg.png)

아무 것도 나오지 않고, 키를 누르거나 클릭을 하면 프로그램이 꺼지게 된다.

올리디버거로 올려 자세히 보도록 하겠다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fbdzrcu%2FbtqBaBKXAaT%2Flc4v872PRcKygXGDzPZqk1%2Fimg.png)

스트링 검색을 통해보면 위와 같은 메세지를 볼 수 있다.

프로그램을 키면 위와같은 메세지가 떠야하는데 안뜨는 것을 보고 구글에 다른 사람들의 플이를 봤지만

나와 같은 증상이 없었기 때문에 이 문제는 스킵하고 다음 문제를 풀도록 하겠다.

이후에 해결방법을 알게되면 다시 풀이를 올리도록 하겠다.

