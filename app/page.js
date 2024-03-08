import Link from "next/link";
import Image from "next/image";

const getAllItems = async () => {
  const response = await fetch("http://localhost:3002/api/item/readall", {
    cache: "no-cache",
  });
  const jsonData = await response.json();
  const allItems = jsonData.allItems;
  return allItems;
};

const ReadAllItems = async () => {
  const allItems = await getAllItems();
  return (
    <div>
      {allItems.map((item) => (
        <Link href={`/item/readsingle/${item._id}`} key={item._id}>
          <Image
            src={item.image}
            width={750}
            height={500}
            alt="item-image"
            priority
          />
          <div key={item._id}>
            <h2>{item.price}</h2>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ReadAllItems;
