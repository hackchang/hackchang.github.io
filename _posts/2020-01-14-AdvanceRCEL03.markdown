---
layout: post
title:  "[CodeEngn] Advance RCE L03 문제 풀이 Write Up"
date:   2020-01-14
tags: [reversing, writeup]
sitemap :
changfreq : daily
priority : 1.0
categories: [reversing,writeup]
---

![L03 문제](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbenSPV%2FbtqBcMFfpAD%2FVwAel3rXTqQ1if349VEBd0%2Fimg.png)

#Advance RCE L03
---
Name이 CodeEngn 일때 Serial은 무엇인가

프로그램을 PEID에 올려봤다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2F5jN9T%2FbtqA6oTFrow%2FfzGGMawZ6mUcGNAarRaRtK%2Fimg.png)

따로 패킹은 안되어 있고, 어셈으로 제작된 프로그램인 것을 알 수 있었다.

프로그램이 어떤식으로 작동되는지 실행시켜보았다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FuKnNc%2FbtqA7q4vopo%2FA55r3gRQUmB93eKKpUb8y1%2Fimg.png)

위와같은 화면이 출력되고, 이름과 시리얼을 입력하고 체크를 눌러 인증하는 프로그램으로 추측된다.

문제는 Name이 CodeEngn일 때의 Serial을 구하는 것으로 올리디버거로 열어봤다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FWMN2s%2FbtqBcwvSEXK%2FZCSKpCKMN0yNkbwXDTnIEK%2Fimg.png)

윈도우 10 환경에서는 되지 않는 것으로 보여 가상환경의 윈도우 7에서 올리디버거에 올려봤다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FEmWgC%2FbtqBcxoUHxq%2FNj8P6GU4JzcCEIiKpFRmAK%2Fimg.png)

정상적으로 올리디버거에 올려지는 것을 볼 수 있었다.

스트링 검색부터 해보도록 하자.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbSuPmp%2FbtqBcxoUMg3%2FAfrK0CZ4H53n3j0n5klyQ0%2Fimg.png)

성공메세지와 실패메세지를 볼 수 있었고, 성공메세지 부분으로 들어가봤다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FvyAsd%2FbtqBdTELPKx%2F67JPq8YItX8mRCPfSakIgk%2Fimg.png)

입력값을 비교 후에 이곳으로 점프하는 것으로 예상된다. 입력하는 부분으로 들어가보도록 하겠다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FcnZtpP%2FbtqA9BL6vTr%2FZv5bkRPG6KFLBvzGKuzayK%2Fimg.png)

위의 GetDigItemTextA 함수는 네임과 관련된 함수이고, 메세지박스는 틀렸을 경우 출력하는 메세지이고,

아래 GetDigItemTextA는 시리얼과 관련된 함수이다. 그 후에 IstrcmpA를 통해 네임과 시리얼을 비교하는 것이다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FdNbXl1%2FbtqA9CRKTvj%2F8EvPXm5p7wjsP2mABc8m7K%2Fimg.png)

비교하는 부분에 BP를 걸고, F9로 실행하여 네임에 CodeEngn을 적고,n 시리얼에 123456을 입력했다.

시리얼이 <b>3265754874</b>로 예상되어 프로그램에 인증해봤다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fbxmw4A%2FbtqBeKHpjOh%2FDvsNcMFMvgo1si0hDXSzbk%2Fimg.png)

해당 시리얼이 맞는 것을 알 수 있었고, 이를 인증해서 클리어를 했다.
아직까지는 레벨이 낮아서 큰 어려움 없이 풀 수 있었다.
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2F4FD6z%2FbtqBeLsLLZi%2FLFXjFfGmLgZNt2f3B8VOKk%2Fimg.png)






