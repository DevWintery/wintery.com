import styled from "@emotion/styled";
import Link from "next/link";

const ItemContainer = styled.div`
    position: relative;
    overflow: hidden;
    cursor: pointer;
    &:hover .title {
        opacity: 1;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s, opacity 0.3s;
    &:hover {
        transform: scale(1.1);
        opacity: 0.7;
    }
`;

const Title = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: black;
    font-size: 1.5em;
    opacity: 0;
    transition: opacity 0.3s;
    text-align: center;
    pointer-events: none;
    z-index: 1;
`;

const GalleryItemContainer = styled.div`
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%; /* 1:1 비율을 유지하기 위해 패딩을 설정 */
    overflow: hidden;
    cursor: pointer;
`;

interface GalleryItemProps {
    title: string;
    imageUrl: string;
    link: string;
}

const GalleryItem = ({ title, imageUrl, link }: GalleryItemProps) => {
    return (
        <GalleryItemContainer>
            <Link href={link} passHref>
                <ItemContainer>
                    <Image src={imageUrl} alt={title} />
                    <Title className="title">{title}</Title>
                </ItemContainer>
            </Link>
        </GalleryItemContainer>
    );
};

export default GalleryItem;
