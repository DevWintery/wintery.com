"use client";

import styled from "@emotion/styled";
import { Space, Typo } from "@solved-ac/ui-react";
import { IconAt, IconBriefcase, IconSchool } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import ExternalLink from "../components/ExternalLink";
import ExternalLinkInline from "../components/ExternalLinkInline";
import FullwidthImage from "../components/FullwidthImage";
import InternalLink from "../components/InternalLink";
import LinksRow from "../components/LinksRow";
import MainContainer from "../components/MainContainer";
import SectionCaption from "../components/SectionCaption";

const Logo = styled.img`
  width: 64px;
  height: 64px;
`;

const IntroBold = styled.span`
  font-weight: 800;
  color: black;
`;

const BiggerSectionCaption = styled(SectionCaption)`
  font-weight: 400;
  font-size: 1.8em;
  margin-left: -0.1ch;
  color: ${({ theme }) => theme.color.text.secondary.main};
`;

const Content = styled.p`
  color: #393e45;
  text-align: justify;
  margin: 1em 0;
`;

const HistoryEntries = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const HistoryEntry = styled.div`
  display: flex;
  gap: 32px;
`;

const HistoryIcon = styled.div`
  width: 24px;
  height: 24px;
  flex: 0 0 24px;
  min-width: 0;
  color: ${({ theme }) => theme.color.text.secondary.main};
`;

const HistoryContent = styled.div`
  flex: 1 0 0;
  min-width: 0;
`;

const MainImageCaption = styled.figcaption`
  text-align: right;
`;

const Email = styled.img`
  height: 1em;
  vertical-align: middle;
`;

const Page = () => {
  const [clientInitialized, setClientInitialized] = useState(false);

  useEffect(() => {
    setClientInitialized(true);
  }, []);

  return (
    <MainContainer>
      <Space h={160} />
      <Logo src="/img/wintery-logo.png" alt="wintery" />
      <BiggerSectionCaption>
        <IntroBold>안녕하세요, 게임 프로그래머 김경민입니다. </IntroBold>{" "}
        홈페이지 만드는거 넘모 어렵습니다 살려주세요
        여기에 무슨 글을 채워 넣을까요
        고민하고있어요
      </BiggerSectionCaption>
      <Space h={32} />
      <Typo h3 no-margin>
        김경민 Kyeongmin Kim
      </Typo>
      <Space h={16} />
      <HistoryEntries>
        <HistoryEntry>
          <HistoryIcon>
            <IconAt />
          </HistoryIcon>
          <HistoryContent>
            <a href={`mailto:${clientInitialized ? "dev.wintery@gmail.com" : ""}`}>
              <Email
                src="/img/email.svg"
                alt={clientInitialized ? "dev.wintery@gmail.com" : ""}
              />
            </a>
          </HistoryContent>
        </HistoryEntry>
        <HistoryEntry>
          <HistoryIcon>
            <IconBriefcase />
          </HistoryIcon>
          <HistoryContent>
            <ExternalLinkInline>
              무직
            </ExternalLinkInline>{" "}
          </HistoryContent>
        </HistoryEntry>
        <HistoryEntry>
          <HistoryIcon>
            <IconSchool />
          </HistoryIcon>
          <HistoryContent>
            <ExternalLinkInline href="http://www.hoseo.ac.kr/Home/Main.mbz">
              호서대학교
            </ExternalLinkInline>{" "}
            게임소프트웨어학과 4학년
          </HistoryContent>
        </HistoryEntry>
        <HistoryEntry>
          <HistoryIcon>
            <IconBriefcase />
          </HistoryIcon>
          <HistoryContent>
            前{" "}
            <ExternalLinkInline>
              주식회사 Nol
            </ExternalLinkInline>{" "}
            클라이언트 프로그래머
          </HistoryContent>
        </HistoryEntry>
      </HistoryEntries>
      <Space h={16} />
      <LinksRow>
        <InternalLink href="/links">모든 연락처/링크</InternalLink>
        <InternalLink href="/cv">자세한 이력</InternalLink>
      </LinksRow>
      <Space h={72} />
      <figure>
        <FullwidthImage
          src="/img/intro-solvedac.jpg"
          alt="뭔 사진을 넣으면 좋겠네요"
        />
        <MainImageCaption>저의 프로젝트에요!(20nn)</MainImageCaption>
      </figure>
      <SectionCaption>
        대충 설명좀 넣고
      </SectionCaption>
      <LinksRow>
        <ExternalLink href="">깃허브</ExternalLink>
      </LinksRow>
      <Space h={16} />
      <Content>
        블라 블라 블라 블라
      </Content>
      <Content>
          블라 블라 블라 블라
      </Content>
      <Space h={72} />
      <figure>
        <FullwidthImage
          src="/img/intro-icpc.jpg"
          alt="뭐 하나 더 넣을까"
        />
        <MainImageCaption>두번째 프로젝트겟죠?(20nn)</MainImageCaption>
      </figure>
      <SectionCaption>
        흠 두번째 제목
      </SectionCaption>
      <LinksRow>
        <InternalLink href="/cv">이력</InternalLink>
      </LinksRow>
      <Space h={16} />
      <Content>
        블라블라
      </Content>
      <Content>
          대충 이런 삶을 살았습니다.
      </Content>
      <Space h={72} />
      {/*<figure>
        <FullwidthImage
          src="/img/intro-hb.jpg"
          alt="한별이가 그려진 아크릴 스탠드를 한 손으로 들고 이륙 준비 중인 비행기에서 찍은 사진."
        />
        <MainImageCaption>박한별</MainImageCaption>
      </figure>
      <SectionCaption>
        크리에이티브로 새로운 세상을 창조해가고 있습니다.
      </SectionCaption>
      <LinksRow>
        <InternalLink href="/gallery">작업</InternalLink>
        <InternalLink href="/downloads">자료</InternalLink>
      </LinksRow>
      <Content>
        생각하는 어떤 것이든 실제로 만들어 보려 하는 선천적 기질은 프로그래밍을
        시작하기 전에 시각디자인에 입문하는 계기가 되었으며, 현재까지도 이어지고
        있습니다. 지금 보시는 웹 사이트를 포함해, 포스터, 브랜딩, 인쇄물, UI/UX
        등, 폼 팩터를 넘나드는 다양한 디자인을 시도하고 있습니다. 카카오
        이모티콘{" "}
        <ExternalLinkInline href="https://e.kakao.com/t/cool-for-nothing">
          〈쓸데없이 멋진 답장〉
        </ExternalLinkInline>
        과{" "}
        <ExternalLinkInline href="https://koi.or.kr">
          한국정보올림피아드
        </ExternalLinkInline>{" "}
        응시자 시스템은 제 작업들 중 가장 잘 알려져 있는 것들입니다.
      </Content>
      <Content>
        2014년에 디자인한 저의 인터넷 페르소나 캐릭터 박한별(한별이)은 havana723
        작가님의 도움으로 솔브드의 몇몇 프로필 배경에 등장하여 프로그래밍을 하는
        사람들에게 친근함을 전달하며 사랑받고 있습니다. 카카오톡에서 havana723
        작가님의{" "}
        <ExternalLinkInline href="https://e.kakao.com/t/coding-with-hanbyeol">
          〈코딩하는 한별이〉
        </ExternalLinkInline>{" "}
        이모티콘과 수조 작가님의{" "}
        <ExternalLinkInline href="https://e.kakao.com/t/hanbyeol-eunha-suisous-ver">
          〈코딩하는 한별이와 은하 (수조 ver.)〉
        </ExternalLinkInline>
        를 만나보실 수 있습니다.
      </Content>*/}
      <Space h={160} />
    </MainContainer>
  );
};

export default Page;
