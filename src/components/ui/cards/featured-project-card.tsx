import React from "react";
import styled from "styled-components";
import Button from "../button";

const StyledH3 = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: var(--slate-300);
`;

const StyledProjectCard = styled.a<{ $featured: boolean }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$featured ? "1fr 2fr" : "1fr 1fr"};
  transition: 0.2s;

  &:hover {
    transform: translateY(-0.3rem);

    ${StyledH3} {
      color: var(--accent);
    }
  }
`;

const StyledThumbnail = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledContentContainer = styled.div`
  padding: 2rem;
  background-color: var(--slate-800);
`;

const StyledP = styled.p`
  color: var(--slate-400);
`;

const StyledTagsContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  gap: 0.3rem;
`;

const StyledCtaContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 2rem;
`;

type ProjectCardProps = {
  featured?: boolean;
  thumbnail: string;
  title: string;
  description: string;
  tags: string[];
  liveLink: string;
  sourceLink?: string;
};

const FeaturedProjectCard = ({
  description,
  featured = false,
  liveLink,
  sourceLink,
  tags,
  title,
  thumbnail,
}: ProjectCardProps) => {
  return (
    <StyledProjectCard
      $featured={featured}
      href={liveLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <StyledContentContainer>
        <StyledTagsContainer>
          {tags.map((tag) => (
            <Button key={tag} type="pill">
              {tag}
            </Button>
          ))}
        </StyledTagsContainer>
        <StyledH3>{title}</StyledH3>
        <StyledP>{description}</StyledP>
        <StyledCtaContainer>
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <Button type="secondary" bgColor="var(--slate-600)" size="small">
              Live Site
            </Button>
          </a>
          {sourceLink && (
            <a href={sourceLink} target="_blank" rel="noopener noreferrer">
              <Button type="tertiary" size="small">
                Github
              </Button>
            </a>
          )}
        </StyledCtaContainer>
      </StyledContentContainer>
      <StyledThumbnail src={thumbnail} alt={title} />
    </StyledProjectCard>
  );
};

export default FeaturedProjectCard;