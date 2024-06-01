import styled from "@emotion/styled";
import Link from "next/link";
import { GOTHAM } from "../../style/font"; // 폰트 가져오기

const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    cursor: pointer;
    margin-bottom: 16px; /* 각 아이템 사이의 간격 추가 */
    text-align: center; /* 텍스트 중앙 정렬 */
`;

const Image = styled.img`
    width: 100%;
    height: auto; /* 이미지 비율을 유지하며 조정 */
    object-fit: cover;
    transition: transform 0.3s, opacity 0.3s;
    display: block; /* 이미지가 블록 요소로 취급되도록 설정 */

    &:hover {
        transform: scale(0.95); /* 호버 시 살짝 작아지도록 설정 */
    }
`;

const Title = styled.div`
    color: black;
    font-size: 1.2em; /* 폰트 크기 조정 */
    font-family: ${GOTHAM};
    margin-top: 8px; /* 이미지와 제목 사이의 간격 */
`;

const GalleryItemContainer = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 100%; /* 1:1 비율을 유지 */
    overflow: hidden;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 16px; /* 각 아이템 사이의 간격 추가 */
`;

interface GalleryItemProps {
    title: string;
    imageUrl: string;
    link: string;
}

const GalleryItem = ({ title, imageUrl, link }: GalleryItemProps) => {
    return (
        <Link href={link} passHref>
            <ItemContainer>
                <Image src={imageUrl} alt={title}/>
                <Title className="title">{title}</Title>
            </ItemContainer>
        </Link>
    );
};

export default GalleryItem;
