import Link from "next/link";
import styled from "styled-components";
import { subCategory } from "./SubCategory";

const Card: React.FunctionComponent = () => {
  return (
    <>
      <CardContainer>
        <CardWrapper>
          {subCategory.map(({ id, link, categoryName, description }) => {
            return (
              <Link href={link as string} key={id}>
                <CardLink>
                  <CardName>{categoryName}</CardName>
                  <CardDescription>{description}</CardDescription>
                  <CardExplore>{`explore ${categoryName}`}</CardExplore>
                </CardLink>
              </Link>
            );
          })}
        </CardWrapper>
      </CardContainer>
    </>
  );
};

export default Card;

const CardContainer = styled.main`
  margin: 4rem 0;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  place-content: center;
  place-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CardLink = styled.a`
  border: 0.5px var(--border-color) solid;
  max-width: 350px;
  padding: 1.5rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    box-shadow: 6px 6px var(--box-shadow-color);
    transform: translateX(-5px) translateY(-5px);
  }

  // space-y-4
`;

const CardName = styled.p`
  color: rgb(31, 41, 55);
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;
const CardDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 6px 0;
  color: rgb(75 85 99);
  letter-spacing: 0.05em;
`;

const CardExplore = styled.p`
  color: rgb(31 41 55);
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;
