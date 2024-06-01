import styled from "@emotion/styled";
import GalleryItem from "./GalleryItem";

const GalleryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
    gap: 16px;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
`;

const images = [
    { title: "호서대학교 졸업작품", imageUrl: "/wintery.com/img/gallery/shadow_ops.png", link: "https://ashwinter.notion.site/Project-S1-b3adf6e933c8435faf8a332e5c71b0c9?pvs=4" },
    { title: "Medical Metaverse(외주)", imageUrl: "/wintery.com/img/gallery/unity.jpg", link: "https://ashwinter.notion.site/Medical-Metaverse-218888941586459d9c9137c8916e3cfe?pvs=4" },
    { title: "외주", imageUrl: "/wintery.com/img/gallery/real_world.png", link: "https://ashwinter.notion.site/2240d41590d74c11acc44c2003420caa?pvs=4" },
    // 더 많은 이미지 추가
];

const GalleryPage = () => {
    return (
        <GalleryContainer>
            {images.map((img, index) => (
                <GalleryItem
                    key={index}
                    title={img.title}
                    imageUrl={img.imageUrl}
                    link={img.link}
                />
            ))}
        </GalleryContainer>
    );
};

export default GalleryPage;
