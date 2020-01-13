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

#Advance RCE L02
---
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

나와 같은 문제는 볼 수 없었다.

가상환경으로 윈도우7이 깔려있어 윈도우7에서 실행을 했더니 잘 되는 것을 볼 수 있었다.

윈도우10에서는 안되는 것 같다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fbgr7kv%2FbtqA9AMoodr%2FpDcK6cLEmAE5KqNrdFBOhK%2Fimg.png)

위와 같은 화면이 출력되는 것을 볼 수 있고, 패스워드를 입력 후 엔터를 입력하면 프로그램이 꺼지게 된다.

올리디버거를 통해 자세히 보도록 하겠다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FZAlYl%2FbtqBc5q4oZX%2F6Er2hDkstntryKHpGm32dk%2Fimg.png)

스트링 검색을 진행했고, 출력 부분에 BP를 걸었다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FpiwXh%2FbtqA7qwHLqS%2FiOkIpkPg83MpAHQxA9hUJk%2Fimg.png)

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FcuNEtw%2FbtqA9B5yOiQ%2FxlQik0wbqVjtkzOc3oCft1%2Fimg.png)

입력값에 123123을 넣고, F8을 눌러 한 줄씩 실행시켜봤다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FOIePB%2FbtqBcwimexn%2FeEctAA1D2yS3g31VP2Go50%2Fimg.png)

아래의 이 부분에서 아래의 명령을 64번 반복시키는 것을 볼 수 있었고, 이 명령으로 인해 따로 특별한 일은 생기지 않았다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FmEFbW%2FbtqBcL7raO8%2FCxsWXfEBx5EPoTMazgvQdK%2Fimg.png)

이 부분에서 계속 반복문을 진행하므로, 점프문을 바꿔 반복문을 탈출하고, 다시 한 줄씩 진행해봤다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FYdfAh%2FbtqBcw3JPp6%2FbLKuoYJDqMlnI4rtnnewr0%2Fimg.png)

해당 BP부분에서 실행시키면 프로그램이 종료되는 것을 볼 수 있었고, 해당 부분에서 F7을 눌러 함수안으로 들어가봤다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FuVQR6%2FbtqBcxawyRG%2FGAAp9Ivxzy2cbWBWrqZIyK%2Fimg.png)
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fk8Vx1%2FbtqBcxVUw5S%2FEzDpMXWgZucxBs2lYRl1Ek%2Fimg.png)

이렇게 한글자씩 비교를 하는 것을 볼 수 있었고, 이후에 이 문자와 같으면 12f839으로 점프하는 것을 볼 수 있었다.

<b>0012f839</b>로 이동해봤다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FSMYax%2FbtqA7pLhKlL%2FujB5NruaTIeCL5kz62YXE0%2Fimg.png)

숫자들이 아스키코드로 보여 바꾸어 봤다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbfcmmX%2FbtqBcM6lTjB%2FttETRwDeJTy4gvjfzAEcRK%2Fimg.png)

57 = W , 45 = E , 4C = L , 20 = 공백 , 44 = D , 4F = O , 4E = N , 45 = E , 21 = !

WELL DONE!이라는 문자로 봐서 성공 메세지가 출력되는 것을 알 수 있다.

위의 한글자씩 부분하는 부분이 정답 문자열인 것을 알 수 있었고, 위의 글자를 한글자씩 변환해봤다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FuVQR6%2FbtqBcxawyRG%2FGAAp9Ivxzy2cbWBWrqZIyK%2Fimg.png)

43 =  C , 52 = R , 41 = A , 4B = K , 45 = E , 44 = D , 21 = !

CRAAACKED! 가 정답인 것을 알 수 있었고, 프로그램에 넣어봤다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FcJDHQL%2FbtqA9BqYcAv%2FlL7sXFMc5f4ryPMQkaVC9k%2Fimg.png)

제대로 입력했다고 생각했지만, 중지가 되는 것을 볼 수 있다..

하지만!! 사이트에서 인증을하면 인증되는 것을 볼 수 있다!!

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbsyIzo%2FbtqBc6jevMO%2FafKFNiKZEUvkGLISyLuWC1%2Fimg.png)
