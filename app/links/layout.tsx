"use client";

import { Space, Tab, Tabs, Typo } from "@solved-ac/ui-react";
import MainContainer from "../../components/MainContainer";
import { PropsWithChildren } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Layout = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();

  return (
    <MainContainer>
      <Space h={160} />
      <Typo h1>링크</Typo>
      <Tabs fullWidth>
        <Link href="/wintery.com/links" passHref legacyBehavior>
          <Tab as="a" current={pathname === "/links/"}>
            프로필
          </Tab>
        </Link>
        <Link href="/wintery.com/links/game" passHref legacyBehavior>
          <Tab as="a" current={pathname === "/links/game/"}>
            게임
          </Tab>
        </Link>
      </Tabs>
      <Space h={32} />
      {children}
      <Space h={64} />
      <Typo description>
          해당 프로필에 존재하지않는곳에 있는 같은 닉네임은 제가 아닙니다.
      </Typo>
      <Space h={160} />
    </MainContainer>
  );
};

export default Layout;
