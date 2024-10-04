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
            <Typo h1>작업 포트폴리오</Typo>
            <Typo description>
                클릭하시면 해당 프로젝트에대한 자세한 설명이 있는 사이트로 이동됩니다.
            </Typo>
            <Space h={32} />
            {children}
            <Space h={64} />
            <Space h={160} />
        </MainContainer>
    );
};

export default Layout;