"use client";

import { Item, Itemize, Typo } from "@solved-ac/ui-react";
import ExternalLinkInline from "../../components/ExternalLinkInline";
import Year from "./Year";

const Page = () => {
  return (
    <>
      <Typo h3>학력</Typo>
      <Itemize>
        <Item>
          <ExternalLinkInline href="http://www.hoseo.ac.kr/Home/Main.mbz">
            호서대학교
          </ExternalLinkInline>{" "}
          게임소프트웨어학과 (재학, 7학기)
          <Year>2019. 3 &ndash; 2025. 2</Year>
        </Item>
        <Item>
          <ExternalLinkInline href="https://school.jbedu.kr/game/">
            한국게임과학고등학교
          </ExternalLinkInline>{" "}
          게임소프트웨어학과 (재학, 7학기)
          <Year>2016. 3 &ndash; 2019. 2</Year>
        </Item>
      </Itemize>
      <Typo h3>경력</Typo>
      <Itemize>
        <Item>
          <b>
            <ExternalLinkInline href="">
              주식회사 Nol
            </ExternalLinkInline>{" "}
            클라이언트 프로그래머
          </b>
          <Year>2021. 2 &ndash; 2022. 08</Year>
          <Itemize>
            <Item>
              <ExternalLinkInline href = "https://play.google.com/store/apps/details?id=com.seolit.guardiansword">
                가디언 소드 원정대 키우기 : 방치형 클리커
              </ExternalLinkInline>
              클라이언트 개발
            </Item>
            <Item>
              <ExternalLinkInline href="https://play.google.com/store/apps/details?id=com.nolab.levelup">
                강철 기사단 키우기 : 방치형 RPG
              </ExternalLinkInline>
              클라이언트 및 서버 API 개발
            </Item>
          </Itemize>
        </Item>
      </Itemize>
      <Typo h3>수상 및 출전</Typo>
      <Itemize>
        <Item>
          <ExternalLinkInline href="https://news.unn.net/news/articleView.html?idxno=502556">
            Global Game Challenge(GGC)
          </ExternalLinkInline>{" "}
          2020
          <Year>2020. 12. 18</Year>팀 Their Story(김경민, 이영광, 박다빈), 금상
        </Item>
        <Item>
          <b>
            <ExternalLinkInline href="http://www.asandesk.co.kr/news/articleView.html?idxno=6320">
              Global Game Challenge(GGC)
            </ExternalLinkInline>{" "}
            2019
          </b>
          <Year>2019. 11. 15</Year>팀 Life(김경민, 박명준, 박상민), 한국게임개발자협회상
        </Item>
        <Item>
          <b>
          <ExternalLinkInline href="https://meister.hrdkorea.or.kr/sub/3/6/7/skillMatchTournament/prizeWinnerList.do">
            전국기능경기대회
          </ExternalLinkInline>{" "}
          2018 게임개발 부문
          </b>
          <Year>2018. 10</Year> 팀(김경민, 김도경) 장려상
        </Item>
        <Item>
          <b>
            <ExternalLinkInline href="https://meister.hrdkorea.or.kr/sub/3/6/7/skillMatchTournament/prizeWinnerList.do">
              지방기능경기대회
            </ExternalLinkInline>{" "}
            2018 게임개발 부문
          </b>
          <Year>2018. 4</Year> 팀(김경민, 김도경) 1위
        </Item>
      </Itemize>
      {/*<Typo h3>프로젝트</Typo>
      <Itemize>
        <Item>
          <b>
            <ExternalLinkInline href="https://solved.ac">
              solved.ac
            </ExternalLinkInline>{" "}
            알고리즘 문제해결 학습의 이정표
          </b>{" "}
          (
          <ExternalLinkInline href="https://github.com/solved-ac">
            GitHub
          </ExternalLinkInline>
          )<Year>2019. 6 &ndash; 현재</Year>
          <Itemize>
            <Item>개인 프로젝트(기획, 운영, 개발 및 디자인) &rarr; 창업</Item>
            <Item>
              프론트엔드 &ndash; React, Next.js, Emotion, Framer Motion,
              Typescript
            </Item>
            <Item>
              백엔드 &ndash; Node.js, Express, Prisma, Typescript / AWS ECS,
              Lambda, SQS, RDS(MariaDB), ElastiCache(Redis)
            </Item>
            <Item>
              yarn workspace + lerna의 모노레포 구조, GitHub Actions 및 Docker로
              배포 자동화
            </Item>
            <Item>
              <ExternalLinkInline href="https://blog.shift.moe/2022/05/09/making-react-component-library-in-2022/">
                컴포넌트 라이브러리 제작
              </ExternalLinkInline>
              ,{" "}
              <ExternalLinkInline href="https://blog.shift.moe/2023/10/24/how-solved-ac-merch-is-born/">
                굿즈 생성 자동화
              </ExternalLinkInline>{" "}
              등 기술적으로 챌린징한 다양한 문제 해결
            </Item>
          </Itemize>
        </Item>
        <Item>
          <b>
            <ExternalLinkInline href="https://biko.kr">
              모두의 코딩 학교 BIKO
            </ExternalLinkInline>{" "}
            프론트엔드
          </b>
          <Year>2022. 2 &ndash; 현재</Year>
          <Itemize>
            <Item>프론트엔드 설계, 개발 및 디자인</Item>
            <Item>
              초중고등학교 공교육 현장에서 활용을 목적으로 한 학습 관리
              시스템(LMS) 설계 및 개발
            </Item>
            <Item>
              다양한 유형(객관식, 주관식, 인터랙티브, 빈 칸 채우기, 코드 작성)의
              문제를 해결할 수 있는 페이지 및 이를 활용할 수 있는 수업 시스템
              설계 및 구현 &ndash; Next.js, Typescript
            </Item>
            <Item>
              한국정보올림피아드 응시자 시스템을 기반으로 대회를 개최할 수 있는
              시스템 구현
            </Item>
          </Itemize>
        </Item>
        <Item>
          <b>
            <ExternalLinkInline href="https://koi.or.kr">
              한국정보올림피아드
            </ExternalLinkInline>{" "}
            응시자 시스템 프론트엔드
          </b>
          <Year>2021. 5 &ndash; 2023. 7</Year>
          <Itemize>
            <Item>프론트엔드 설계, 개발 및 디자인</Item>
            <Item>
              코로나19의 영향으로 온라인 개최된 2021년 대회에서 처음 사용하여
              지속적인 유지보수로 2023년 대회까지 사용, 이후 대회는 BIKO 시스템
              기반으로 진행
            </Item>
            <Item>
              WebSocket을 활용한 실시간 채점 결과 확인, 부정행위 방지를 위한
              화면 녹화 등 여러 챌린징한 기능 구현 &ndash; React, Typescript
            </Item>
          </Itemize>
        </Item>
        <Item>
          ask.shiftp.sh: 트위터 한정 익명 질문 플랫폼
          <Year>2018. 4 &ndash; 2023. 4</Year>
          <Itemize>
            <Item>
              개인 프로젝트(개발 및 디자인) &ndash; PHP, Twitter API(v1),
              Vanilla JavaScript
            </Item>
          </Itemize>
        </Item>
        <Item>
          Jubeatbook: 아케이드 게임 기록 관리 어플리케이션
          <Year>2015. 1 &ndash; 2017. 12</Year>
          <Itemize>
            <Item>
              총괄 기획, 개발 및 디자인 &ndash; Android(Kotlin), Firebase, PHP
            </Item>
          </Itemize>
        </Item>
      </Itemize>*/}
      <Typo h3>기타 활동</Typo>
      <Itemize>
        <Item>
          <b>
            호서대학교 게임개발 'CYPICS' 팀장 & 부팀장
          </b>
          <Year>2019. 3 &ndash; 소속중</Year>
        </Item>
        <Item>
          <b>
            호서대학교 학술동아리 'MAROSOFT' 프로그래밍 팀장
          </b>
          <Year>2020. 6 &ndash; 2021. 2</Year>
        </Item>
        <Item>
          <b>
            호서대학교 게임과 소속 연구실 Game Media Lab. 연구원 소속
          </b>
          <Year>2019. 6 &ndash; 2021. 2</Year>
        </Item>
        <Item>
          <b>
            호서대학교 학술동아리 'BUGSOFT 프로그래밍 팀장
          </b>
          <Year>2019. 3 &ndash; 2019. 7</Year>
        </Item>
      </Itemize>
    </>
  );
};

export default Page;
