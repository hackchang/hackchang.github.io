---
layout: post
title:  "[CodeEngn] Advance RCE L07 문제 풀이 Write Up"
date:   2020-01-31
tags: [reversing, writeup]
sitemap :
changfreq : daily
priority : 1.0
categories: [reversing,writeup]
---

![L07 문제](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FdO5GfY%2FbtqBE1Wz3Gu%2FaPLNCANZrwVXeGQY56lqTK%2Fimg.png)

#Advance RCE L07
---
Name이 CodeEngn일때 Serial은 28BF522F-A5BE61D1-XXXXXXXX 이다.

XXXXXXXX 를 구하시오

이 문제도 네임이 CodeEngn일 때 시리얼 값을 구하는 문제이다.

PEID로 열어보도록 하겠다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FdjJDuS%2FbtqBDcreej2%2Fpq2I4de4QQl5tWfiH34iy0%2Fimg.png)

C#으로 만들어진 프로그램인 것을 알 수 있었고,

올리디버거로 열리지 않는다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbSIOou%2FbtqBCU5m4Cm%2FPEGlOxiMgmJL9ZUktegiDK%2Fimg.png)

C#으로 만든 프로그램이기 떄문에 Reflector로 열어봤다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FrgW3o%2FbtqBEBcKV3t%2FKjl3pXkFNOhReSaSpJ3X90%2Fimg.png)

Form부분에 성공메세지나 실패메세지가 있을 것이라고 생각되어 찾아보았다.

button_click 함수를 찾았고, 해당 부분에서 인증하는 것을 알 수 있었다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FkZ1Pg%2FbtqBBVwYP2m%2FsL3ZIfr48actHsuM35NPa1%2Fimg.png)

디스어셈블러를 자세히 보도록 하겠다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FqaaO6%2FbtqBE0ci2mu%2FaxFjInEzd6eKX5I15XgUPk%2Fimg.png)

조건문을 자세히보면 첫번째 텍스트박스(name)의 길이는 <b>5<=name<=1b인 것을 알 수 있고,</b>

두번째 <b>텍스트박스(Serial)의 길이는 1a</b>이며,

9번째자리와 18번째자리의 글자가 '-' 일때 아래의 반복문을 수행하는 것을 알 수 있다.

문제에서 마지막 8자리의 시리얼만 구하면 되기 때문에 str3이 우리가 구해야할 값 인 것을 알 수 있다.

해당 소스를 export하여 str3의 값을 00000000~FFFFFFFF까지 반복문을 통해 돌려봤다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbM0SIE%2FbtqBD13YK66%2F1GOiz2Lf0eqkhyh3XBqQJ1%2Fimg.png)

하지만 인증이 되지않아서 문제를 포기할 뻔 했지만, 검색을 통해 GetHashCode()라는 함수에 대해 알게되었다.

운영체제의 비트 수에 따라 각각 다른 HashCode를 리턴하기 때문에 인증되지 않았던 것이다.

32비트를 기준으로 하여 다시 인증했다.

다음 번에는 vxzzz함수를 완벽하게 분석하여 다시 문제를 풀어보고싶다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FcfjOp1%2FbtqBE0Khxnn%2FqknoASJVMr0OMp4KKxKfA1%2Fimg.png)

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FnpjpU%2FbtqBCVcmAE6%2FBag9DdEp8a1b0w7OYGr6hK%2Fimg.png)

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FcWjVsE%2FbtqBE1vDO0A%2FNbLqY5dYXDph1j56rxDmJk%2Fimg.png)