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
    { title: "Image 1", imageUrl: "/wintery.com/img/wintery-logo.png", link: "/wintery.com/gallery/image1" },
    { title: "Image 2", imageUrl: "/wintery.com/img/wintery-logo.png", link: "/wintery.com/gallery/image2" },
    { title: "Image 2", imageUrl: "/wintery.com/img/wintery-logo.png", link: "/wintery.com/gallery/image2" },
    { title: "Image 2", imageUrl: "/wintery.com/img/wintery-logo.png", link: "/wintery.com/gallery/image2" },
    { title: "Image 2", imageUrl: "/wintery.com/img/wintery-logo.png", link: "/wintery.com/gallery/image2" },
    { title: "Image 2", imageUrl: "/wintery.com/img/wintery-logo.png", link: "/wintery.com/gallery/image2" },
    { title: "Image 2", imageUrl: "/wintery.com/img/wintery-logo.png", link: "/wintery.com/gallery/image2" },
    { title: "Image 2", imageUrl: "/wintery.com/img/wintery-logo.png", link: "/wintery.com/gallery/image2" },
    { title: "Image 1", imageUrl: "/wintery.com/img/wintery-logo.png", link: "/wintery.com/gallery/image1" },
    { title: "Image 2", imageUrl: "/wintery.com/img/wintery-logo.png", link: "/wintery.com/gallery/image2" },
    { title: "Image 2", imageUrl: "/wintery.com/img/wintery-logo.png", link: "/wintery.com/gallery/image2" },
    { title: "Image 2", imageUrl: "/wintery.com/img/wintery-logo.png", link: "/wintery.com/gallery/image2" },
    { title: "Image 2", imageUrl: "/wintery.com/img/wintery-logo.png", link: "/wintery.com/gallery/image2" },
    { title: "Image 2", imageUrl: "/wintery.com/img/wintery-logo.png", link: "/wintery.com/gallery/image2" },
    { title: "Image 2", imageUrl: "/wintery.com/img/wintery-logo.png", link: "/wintery.com/gallery/image2" },
    { title: "Image 2", imageUrl: "/wintery.com/img/wintery-logo.png", link: "/wintery.com/gallery/image2" },
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
