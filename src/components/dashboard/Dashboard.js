import React from "react";
import MediaCard from "./Card";

function Dashboard() {
  const input_list = [
    {
      name: "Janek",
      surname: "Kowalski",
      content: "jakisopis Janka ",
      image:
        "https://geoforum.pl/upload3/news_pl/picture/328_geodeta_artykul6.jpg",
    },
    {
      name: "Ola",
      surname: "Jaciubek",
      content: "jakisopis Oli ",
      image:
        "https://geoforum.pl/upload3/news_pl/picture/328_geodeta_artykul6.jpg",
    },
    {
      name: "Mateusz",
      surname: "Świetlicki",
      content: "jakisopis Mateusza ",
      image:
        "https://geoforum.pl/upload3/news_pl/picture/328_geodeta_artykul6.jpg",
    },
    {
      name: "Agata",
      surname: "Drzygało",
      content: "jakisopis Agaty ",
      image:
        "https://geoforum.pl/upload3/news_pl/picture/328_geodeta_artykul6.jpg",
    },
  ];
  return (
    <div>
      {input_list.map((item) => {
        return (
          <MediaCard
            name={item.name}
            surname={item.surname}
            content={item.content}
            image={item.image}
          />
        );
      })}
      <MediaCard />
    </div>
  );
}

export default Dashboard;
