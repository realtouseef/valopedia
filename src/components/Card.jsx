import Link from "next/link";
import Image from "next/image";

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
      <main className="card">
        <div className="card_wrapper">
          {subCategory.map(
            ({ id, link, categoryName, description, placeholderImage }) => {
              return (
                <Link href={link} key={id}>
                  <a className="card_a">
                    <div className="card_image_wrapper">
                      <Image src={placeholderImage} alt={categoryName} />
                    </div>
                    <p className="card_name">{categoryName}</p>
                    <p className="card_desription">{description}</p>
                    <p className="card_explore">{`Explore ${categoryName}`}</p>
                  </a>
                </Link>
              );
            }
          )}
        </div>
      </main>
    </>
  );
};

export default Card;
