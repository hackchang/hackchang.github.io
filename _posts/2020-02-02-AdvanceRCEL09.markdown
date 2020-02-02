---
layout: post
title:  "[CodeEngn] Advance RCE L09 문제 풀이 Write Up"
date:   2020-02-02
tags: [reversing, writeup]
sitemap :
changfreq : daily
priority : 1.0
categories: [reversing,writeup]
---

![L09 문제](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FeyRyZx%2FbtqBEA6S7mN%2FCww3FaDEvQopcwnJnCssqk%2Fimg.png)

#Advance RCE L09
---

Advance RCE L09

Password는 무엇인가


Password를 찾는 문제이다.

PEID부터 올려보도록 하겠다

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FLOfFa%2FbtqBEBxW9vc%2Fo2JllYvOGgRens9AEPFAT1%2Fimg.png)

아직 잘 모르겠어서 올리디버거에 올려봤다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbJEPoi%2FbtqBGYyvQoB%2FoKCfUXYkHFsbYGrWZ31DE1%2Fimg.png)

F8을 눌러 한줄씩 실행하면서 찾아보도록 하겠다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FDi7U6%2FbtqBFMlhIQQ%2FZDw3fHmx3iCxluAj4yETRk%2Fimg.png)

프로그램에 name과 password는 1234도 통일하고 진행했다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FYf5pI%2FbtqBEBSixze%2FChZXK6B3E8YjxVS15BwbW0%2Fimg.png)

CALL되는 부분을 F7로 들어가서 확인 결과 Username이 DonaldDuck이라는 것을 알게되었다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fb5dvFx%2FbtqBDW3G3wT%2FHgF3DYeltlKiXdGsZWLXJK%2Fimg.png)

다시 name을 DonaldDuck으로 바꾸고 Password에 1234를 넣고 진행해봤다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fcy25z4%2FbtqBHxUZuwn%2FRbm5TBymLT8gVf14t88f61%2Fimg.png)

해당 CALL문에서 걸리기때문에 F7로 들어가보도록 하겠다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbE4mCP%2FbtqBD2ijW3x%2FM0sAhKUVfA0FA92VORqeE1%2Fimg.png)

뭔가 입력값을 비교하는 부분이라고 생각되어 한줄씩 진행해봤다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fn2MV0%2FbtqBGqovm1c%2FUVVZ5r4Ch2n8ROWNJHdZSK%2Fimg.png)

EAX에 값을 넣는것을 볼 수 있었고, 아래 EAX와 ECX를 비교하는 것을 볼 수 있었다. 

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbX0nZu%2FbtqBGYrMUxI%2FgXMYIxu8mkzWD9kxw0PX1K%2Fimg.png)

4D2는 10진수로 Password에 입력한 1234라는 것을 알 수 있었고, ECX의 데이터값이 Password일 것이라고 생각되어 들어가봤다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FnqkhC%2FbtqBD23ELum%2FETffnvBmJysRNSrXL7vUU0%2Fimg.png)

CMP EAX, DWORD PTR DS:[ECX}는 ECX의 데이터값과 비교를 한다. 데이터 값은 리틀엔디언 방식으로 뒤집어서

0088228F가 나오므로, 이를 10진수로 바꿔 인증해봤다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbcLx79%2FbtqBE1DaPiu%2FrtLDGGJvQJZVaaWRM8tkyK%2Fimg.png)

하지만 원하는 결과를 출력할 수 없었고, 코드를 수정하는 문제라고 생각되어

코드를 아래와 같이 수정했다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2F4d9Cv%2FbtqBDYmSyZ9%2FR5SBA4m4BvSrpEyCa4vLZ0%2Fimg.png)

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FsoCoG%2FbtqBG0pzy7P%2FszjkIWN0JNWLZOJEXQ374K%2Fimg.png)

클리어가 된 것을 볼 수 있었고, 사이트에 인증을 했다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbnhHOh%2FbtqBG0pzzRv%2FbCks2DVnafoctF99O708o1%2Fimg.png)