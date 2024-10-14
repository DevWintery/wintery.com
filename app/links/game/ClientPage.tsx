"use client";

import { Divider, Space, Typo } from "@solved-ac/ui-react";
import { IconBrandSteam, IconCopy } from "@tabler/icons-react";
import { GameDynamicProfile } from "../../../dynamicProfile/loadGames";
import { CopyLinkItem, GameIcon, LinkItem } from "../LinkItem";
import { Links } from "../Links";
import LinkItemJyantama from "./(external)/LinkItemJyantama";

const Page = ({ profile }: { profile: GameDynamicProfile }) => {
  return (
    <>
      <Typo h2>주력 게임</Typo>
      <Space h="1em" />
      <Links>
        <LinkItem
          icon={<GameIcon src="/img/games/nikke.png" />}
          caption={
            <>
              니케
            </>
          }
          description={
            <>
              아이네 <Typo description>(한국)</Typo>
              <br />
              <Typo readable small>
                  친구코드 : 09178374
              </Typo>
            </>
          }
          href=""
          color="#ff9d00"
        />
          <LinkItem
              icon={<GameIcon src="/img/games/lostark48.png" />}
              caption={
                  <>
                      로스트아크
                  </>
              }
              description={
                  <>
                      윤겨을 <Typo description>(바드)</Typo>
                      <br />
                      <Typo readable small>
                          카단
                      </Typo>
                  </>
              }
              href="https://loawa.com/char/%EC%9C%A4%EA%B2%A8%EC%9D%84"
              color="#ff9d00"
          />
      </Links>
      <Divider />
{/*      <Typo h2>아이디가 있는 게임</Typo>
      <Typo description>생각나는 대로 업데이트 예정입니다.</Typo>*/}
    </>
  );
};

export default Page;
