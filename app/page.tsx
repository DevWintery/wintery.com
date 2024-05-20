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
      <Logo src="/wintery.com/img/wintery-logo.png" alt="wintery" />
      <BiggerSectionCaption>
        <IntroBold>안녕하세요, 게임 개발자 김경민입니다. </IntroBold>{" "}
          게임을 통해 사람들에게 즐거움을 주는 것이 저의 가장 큰 목표입니다.
          다양한 게임 프로젝트에 참여하며, 항상 더 나은 게임을 만들기 위해 노력하고 있습니다.
          게임을 사랑하는 마음으로, 더 나은 플레이 경험을 제공하기 위해 끊임없이 공부하고 개발하고 있습니다.
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
            <a href={`mailto:${"dev.wintery@gmail.com"}`}>
               dev.wintery@gmail.com
            </a>
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
          src="/wintery.com/img/gallery.png"
          alt="내가 참여한 프로젝트들 사진"
        />
        <MainImageCaption>참여한 프로젝트 일부(~2024.05)</MainImageCaption>
      </figure>
      <SectionCaption>
          다양한 게임 개발 경험으로 꾸준히 성장하고 있습니다.
      </SectionCaption>
      <LinksRow>
          <ExternalLink href="https://github.com/DevWintery">Github</ExternalLink>
          <ExternalLink href="/wintery.com/cv">이력</ExternalLink>
      </LinksRow>
      <Space h={16} />
      <Content>
          게임 개발에 대한 열정으로 다양한 프로젝트에 참여하며 꾸준히 역량을 강화하고 발전시키고 있습니다.

      </Content>
      <Content>
          앞으로도 끊임없이 배우고 도전하며, 게임 개발 분야에서 최고의 전문가로 성장해 나가고자 합니다.
      </Content>
      <Space h={72} />
      <figure>
        <FullwidthImage
          src="/wintery.com/img/seminar.png"
          alt="세미나를 진행하는 사진들"
        />
        <MainImageCaption>세미나(2019, 2023)</MainImageCaption>
      </figure>
      <SectionCaption>
          지식을 공유하며 성장합니다.
      </SectionCaption>
      <LinksRow>
        <InternalLink href="/cv">이력</InternalLink>
      </LinksRow>
      <Space h={16} />
      <Content>
          지식을 공유하는 것을 좋아하는 이유는 가르침을 주고받는 동안 시야가 넓어지고, 새로운 관점과 아이디어를 얻을 수 있기 때문입니다. 이러한 경험들은 저를 더욱 성장하게 만들며, 함께 배우고 발전하는 과정을 즐깁니다.
      </Content>
      <Content>
          고등학교부터 배운지식을 신입생에게 알려주는{" "}
          <ExternalLinkInline href = "https://ashwinter.notion.site/61929127292e467086b8d6851058b27e?pvs=4">
              C++세미나
          </ExternalLinkInline>
          와 {" "}
          <ExternalLinkInline href = "https://ashwinter.notion.site/Unity-ef5f5c6d247e4c1092e867c802874469?pvs=4">
              Unity세미나
          </ExternalLinkInline>
          를 진행하고, 2년간 회사를 다니며 얻게된 실무경험을 공유하고 중요하다고 생각하는 개념을 알려주는 {" "}
          <ExternalLinkInline href = "https://ashwinter.notion.site/Cypics-2023-0b9262b6f8494eb88dd20aaffd4a435f?pvs=4">
              세미나
          </ExternalLinkInline>
          를 진행했습니다.
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
