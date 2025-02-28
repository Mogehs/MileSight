import React from "react";

const data = [
  {
    id: 1,
    img: "/mini-dome/accessories-img1.png",
    title: "A01 V3 Pole Mount",
    list: [
      "Weight: 625g",
      "Dimension: 140*136*46mm",
      "Installation Environment: For strapping cameras on poles between 102-127mm(4.1-5 inches) in diameter",
    ],
  },
  {
    id: 2,
    img: "/mini-dome/accessories-img2.png",
    title: "A03 External Corner Bracket",
    list: [
      "Weight: 900g",
      "Dimension: 170*152.5*76mm",
      "Installation Environment: For mounting cameras on an external corner",
    ],
  },
  {
    id: 3,
    img: "/mini-dome/accessories-img3.png",
    title: "A42-L Extension Lever",
    list: [
      "Weight: 330g",
      "Dimension: Φ 55*255mm",
      "Installation Environment: Used as extensions for pendant mount",
    ],
  },
  {
    id: 4,
    img: "/mini-dome/accessories-img4.png",
    title: "A71 Wall Mount",
    list: [
      "Weight: 530g",
      "Dimension: 162*124*78mm",
      "Installation Environment: Used to install cameras on an wall or vertical structure",
    ],
  },
  {
    id: 5,
    img: "/mini-dome/accessories-img5.png",
    title: "A76 V2 Pendant Mount",
    list: [
      "Weight: 620g",
      "Dimension: Φ 145*L (L is default as 290mm, also can be extended with A42-L)",
      "Installation Environment: Used to install cameras on a ceiling or horizontal structure",
    ],
  },
  {
    id: 6,
    img: "/mini-dome/accessories-img6.png",
    title: "A84 Junction Box",
    list: [
      "Weight: 360g",
      "Dimension: Φ137*47.6mm",
      "Installation Environment: For the containing of electrical connections which need to be concealed from sight and delete tampering",
    ],
  },
];

const Accessories = () => {
  return (
    <div id="dome-accessories p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <div
            className="flex flex-col gap-2 border border-[#ecedeb] p-4 items-center"
            key={item.id}
          >
            <img
              className="w-[100%] bg-[#f9f9fb]"
              src={item.img}
              alt="not found"
            />
            <h2>{item.title}</h2>
            {/* Grouped List */}
            <ul className="list-inside text-sm text-gray-700 w-[100%] px-4 py-4">
              {item.list.map((li, index) => (
                <li key={index}>{li}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accessories;
