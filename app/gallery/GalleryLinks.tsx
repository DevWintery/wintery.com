import styled from "@emotion/styled";
import {IconExternalLink} from "@tabler/icons-react";
import {transparentize} from "polished";
import {ReactNode} from "react";

export const GalleryLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const GalleryLinkRow = styled.a<{
    $color?: string;
}>`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 8px;
  padding: 16px;
  border-radius: 8px;
  border: ${({ theme }) => theme.styles.border()};
  transition: background-color 0.2s ease, border-color 0.2s ease;
  cursor: pointer;
  &:hover {
    border-color: ${({ $color, theme }) =>
    $color || theme.color.text.secondary.main};
    background-color: ${({ $color, theme }) =>
    transparentize(0.9, $color || theme.color.text.secondary.main)};
  }
    
`;


const GalleryLinkIconContainer = styled.span`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.text.secondary.main};
    
`;

const GalleryLinkCaption = styled.span`
  font-weight: 600;
  flex: 1;
    
`;

const GalleryLinkDescription = styled.span`
    text-align: right;
    flex: 1;
    font-size: medium;
    white-space: pre-line;
`;

interface GalleryLinkItemProps {
    color?: string;
    icon: ReactNode;
    caption: ReactNode;
    description?: ReactNode;
    href: string;
}

export const GalleryLinkItem = ({
color,
icon,
caption,
description,
href,
}: GalleryLinkItemProps) => {
    return (
        <GalleryLinkRow
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            $color={color}
        >
            <GalleryLinkIconContainer style={{ color }}>{icon}</GalleryLinkIconContainer>
            <GalleryLinkCaption>{caption}</GalleryLinkCaption>
            <GalleryLinkDescription>{description}</GalleryLinkDescription>
            <GalleryLinkIconContainer>
                <IconExternalLink />
            </GalleryLinkIconContainer>
        </GalleryLinkRow>
    );
};