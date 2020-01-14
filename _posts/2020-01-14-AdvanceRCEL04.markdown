---
layout: post
title:  "[CodeEngn] Advance RCE L04 문제 풀이 Write Up"
date:   2020-01-14
tags: [reversing, writeup]
sitemap :
changfreq : daily
priority : 1.0
categories: [reversing,writeup]
---

![L04 문제](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FUaiZn%2FbtqBc6dhcXb%2FkEh0K0e9w5IjRTKbWPmPN0%2Fimg.png)

#Advance RCE L04
---
Name이 CodeEngn 일때 Serial은 무엇인가

L03과 같이 시리얼을 찾는 문제이다.

L03과 똑같이 접근해보도록 하겠다.

우선 PEID에 L04파일을 올려봤다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FdXnP5B%2FbtqBc6dhlFd%2FrzXzIKrfDjKAJEfUVk3kiK%2Fimg.png)

처음보는 파일 형식에 당황했지만 올리디버거에 올려 자세히 보도록 하겠다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fbe2w3D%2FbtqBcM7b2AG%2Fbp9isSErAu8dQ5cH7Cj9D1%2Fimg.png)

올리디버거로 열어봤지만 처음보는 구조에 2번째 당황을 했고, F8을 눌러 4011ae로 이동해봤다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FYFVdI%2FbtqBdUX1Sz1%2FctOJWh1TOdc6EePFyFrZLK%2Fimg.png)

이부분의 반복문을 진행하고, 401006으로 다시 점프하는 것을 볼 수 있다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FIkZnY%2FbtqA9BejUOu%2FhXDtOsJqhgayxDDPP6jDzK%2Fimg.png)

반복문의 진행 과정에서 401006으로 이동해봤다.

프로그램 실행 초기와 다른 것을 볼 수 있었고, 위의 반복문을 통해 어셈이 복호화되는 것을 볼 수 있었다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbpJscc%2FbtqBc5ZLYJQ%2F301mO4zrEWa7y11fFtKDy0%2Fimg.png)

401006으로 점프하는 반복문의 끝에 BP를 걸고 F9를 눌러 실행 후 401006으로 이동했다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbzqoXa%2FbtqBc5S2z3K%2Ffvb00nFT7VuvLKGtPpPye0%2Fimg.png)

복호화가 되었지만, 완벽하지 않은 것을 확인했고, Ctrl+A를 눌러 코드를 다시 로드시킨다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2F4t0jR%2FbtqBeJV2t2S%2FU7cwvf52r2JXhbRZAhbOVk%2Fimg.png)

완벽하게 복호화가 되었고, 스트링을 검색해봤다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fb52vKZ%2FbtqBeSd9aUd%2FXqsyU8EvsN5WXMFfpSe51k%2Fimg.png)

LOD-의 스트링이 시리얼이라고 생각되어 들어가봤다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2F1IIIc%2FbtqBezlRtVe%2F75gUFKaLjO6tB77dCv079K%2Fimg.png)

문자열을 비교하는 부분에 BP를 걸고, 실행시켜봤다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FdiDE2p%2FbtqBeTqAL7Q%2F9l9L2JSUdt26CuVUm6k60k%2Fimg.png)
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FtHBDZ%2FbtqBeLsOj28%2FbRYoBZdtApJdUkj74PJUt0%2Fimg.png)

Name에 CodeEngn, Serial에 무작위로 12345를 넣고, Test를 눌렀다.

BP를 건 부분 위의 문자열 비교부분에 또 시리얼로 추정되는 문자를 볼 수 있었다.

해당 문자로 인증해봤다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FBkH8m%2FbtqBc40SV22%2FibJighnkm9ZrU6K5NVN0n0%2Fimg.png)

인증되는 것을 볼 수 있었고, 홈페이지에 인증하여 클리어를 했다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FzcYIq%2FbtqA8jSxDfO%2FtCtxXyD8UKRpBAz34k8vI1%2Fimg.png)
