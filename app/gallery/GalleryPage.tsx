import styled from "@emotion/styled";
import {Typo} from "@solved-ac/ui-react";
import {IconBrandNotion, IconAt, IconBrandDiscord, IconBrandGithub} from "@tabler/icons-react";
import {GalleryLinkItem, GalleryLinks} from "./GalleryLinks";

const GalleryPage = () => {
    return (
        <>
            <Typo h2>출시한 게임</Typo>
                <GalleryLinks>
                    <GalleryLinkItem
                        icon={<IconBrandNotion />}
                        caption="강철 기사단 키우기 : 방치형 RPG"
                        description={`게임의 주요 컨텐츠를 구현
                        Python을 활용해 데이터 테이블 자동화 시스템을 제작
                        데이터 바인딩을 통해 UI의 동기화를 자동화
                        FSM을 활용하여 Scene의 상태를 부여해 각 상태에 대한 로직을 정의
                        라이브 서비스에는 신속한 업데이트를 위해 유지보수가 중요하다는걸 배움`}
                        href = "https://www.notion.so/ashwinter/RPG-110bf3b7b1b4808981a0e6ebf3527ff1?pvs=4"
                        color="#000000"
                    />
                    <GalleryLinkItem
                        icon={<IconBrandNotion />}
                        caption="가디언 소드 원정대 키우기 : 방치형 클리커"
                        description={`게임의 모든 컨텐츠를 구현`}
                        href = "https://www.notion.so/ashwinter/111bf3b7b1b48072a062d57eeefdd5fa?pvs=4"
                        color="#000000"
                    />
                </GalleryLinks>
            <Typo h2>2019년</Typo>
            <GalleryLinkItem
                icon={<IconBrandNotion />}
                caption="Life"
                description={`2019GGC 한국게임개발자협회상 수상작
                모든 컨텐츠를 구현`}
                href = "https://www.notion.so/ashwinter/Life-111bf3b7b1b48064b15be931bf30bb6c?pvs=4"
                color="#000000"
            />
            <Typo h2>2018년</Typo>
            <GalleryLinkItem
                icon={<IconBrandNotion />}
                caption="Ruin Dungeon"
                description={`한국게임과학고등학교 2학년 겨울합숙 작품
                모든 컨텐츠를 구현`}
                href = "https://www.notion.so/ashwinter/Ruin-Dungeon-111bf3b7b1b480fe90a7f0c7a1dd4379?pvs=4"
                color="#000000"
            />
            <GalleryLinkItem
                icon={<IconBrandNotion />}
                caption="TimeFall"
                description={`한국게임과학고등학교 2학년 여름합숙 작품
                모든 컨텐츠를 구현`}
                href = "https://www.notion.so/ashwinter/TimeFall-111bf3b7b1b48012bc15e8b2bfd88543?pvs=4"
                color="#000000"
            />
            <Typo h2>2017년</Typo>
            <GalleryLinkItem
                icon={<IconBrandNotion />}
                caption="TimeHero"
                description={`한국게임과학고등학교 1학년 여름합숙 작품
                cocos2d-x를 이용하여 제작
                모든 컨텐츠를 구현`}
                href = "https://www.notion.so/ashwinter/TimeHero-115bf3b7b1b480c7b12ddfc814b20df5?pvs=4"
                color="#000000"
            />
        </>
    );
};

export default GalleryPage;
