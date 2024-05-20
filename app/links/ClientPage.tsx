"use client";

import { Divider, Space, Typo } from "@solved-ac/ui-react";
import {
  IconArrowsUpDown,
  IconArticle,
  IconAt,
  IconBalloon,
  IconBrandBehance,
  IconBrandBluesky,
  IconBrandDiscord,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandNpm,
  IconBrandSteam,
  IconBrandThreads,
  IconBrandTwitter,
  IconBrandYoutube,
  IconCheck,
  IconSquareLetterC,
  IconTrophy,
} from "@tabler/icons-react";
import { DynamicProfile } from "../../dynamicProfile/load";
import LinkItemBaekjoon from "./(external)/LinkItemBaekjoon";
import { EmailLinkItem, LinkItem } from "./LinkItem";
import { Links } from "./Links";
import LinkItemSolvedac from "./(external)/LinkItemSolvedac";

interface Props {
  profile: DynamicProfile;
}

const ClientPage = ({ profile }: Props) => {
  const {
    baekjoon,
    solvedac,
  } = profile;

  return (
    <>
      <Typo h2>대표 연락처/링크</Typo>
      <Links>
        <LinkItem
          icon={<IconAt />}
          caption="이메일 (개인)"
          description="dev.wintery@gmail.com"
          href = ""
          color="#fe0c50"
        />
        <LinkItem
          icon={<IconBrandDiscord />}
          caption="Discord"
          description="dev.wintery"
          href="https://discord.com/users/308922580277002241"
          color="#5865f2"
        />
        <LinkItem
          icon={<IconBrandGithub />}
          caption="GitHub"
          description="DevWintery"
          href="https://github.com/DevWintery"
          color="#333333"
        />
      </Links>
      <Typo h2>다른 모든 연락처/링크</Typo>
      <Typo description>연락을 확인하지 못할 수도 있습니다.</Typo>
      <Space h="1em" />
      <Typo h3>SNS/프로필</Typo>
      <Links>
        <LinkItem
          icon={<IconBrandInstagram />}
          caption="Instagram"
          description="@dev.wintery"
          href="https://instagram.com/dev.wintery"
          color="#c13584"
        />
        <LinkItem
          icon={<IconBrandYoutube />}
          caption="YouTube"
          description="AshelCloud"
          href="https://www.youtube.com/@ashelcloud7591"
          color="#ff0000"
        />
        <LinkItem
          icon={<IconBrandSteam />}
          caption="Steam"
          description="Ashel.Cloud"
          href="https://steamcommunity.com/profiles/76561198281313211/"
          color="#00adee"
        />
      </Links>
      <Typo h3>알고리즘 문제해결</Typo>
      <Links>
        <LinkItemBaekjoon baekjoon={baekjoon} />
        <LinkItemSolvedac solvedac={solvedac} />
      </Links>
    </>
  );
};

export default ClientPage;
