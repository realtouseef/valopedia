import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const Card = () => {
  // 1. create a card
  // 2. design it
  // 3. a card to should link to each sub-category
  // for instance, Links to '/agents' and to agents page and it shows every agent
  // 4. same for other categories

  const subCategory = [
    {
      id: 1,
      link: "/agents",
      categoryName: "agents",
      description: "sample text here for now",
      placeholderImage: "",
    },
    {
      id: 2,
      link: "/weapons",
      categoryName: "weapons",
      description: "sample text here for now",
      placeholderImage: "",
    },
  ];

  return (
    <>
      <CardContainer>
        <CardWrapper>
          {subCategory.map(
            ({ id, link, categoryName, description, placeholderImage }) => {
              return (
                <Link href={link} key={id}>
                  <CardLink>
                    <CardImageWrapper>
                      <Image src={placeholderImage} alt={categoryName} />
                    </CardImageWrapper>
                    <CardName>{categoryName}</CardName>
                    <CardDescription>{description}</CardDescription>
                    <CardExplore>{`Explore ${categoryName}`}</CardExplore>
                  </CardLink>
                </Link>
              );
            }
          )}
        </CardWrapper>
      </CardContainer>
    </>
  );
};

export default Card;

const CardContainer = styled.main`
  margin-top: 4rem;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr, 2);
  gap: 1rem;
`;

const CardLink = styled.a`
  background-color: rgb(249 250 251);
  width: max-content;
  padding: 2.5rem 1.5rem;
  border-radius: 0.375rem;
  // space-y-4
`;

const CardImageWrapper = styled.div``;

const CardName = styled.p`
  color: rgb(31, 41, 55);
  font-size: 1.125rem;
  line-height: 1.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;
const CardDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(75 85 99);
  letter-spacing: 0.05em;
`;

const CardExplore = styled.p`
  color: rgb(31 41 55);
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;
