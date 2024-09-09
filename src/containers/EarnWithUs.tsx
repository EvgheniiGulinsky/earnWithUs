import React from "react";
import Card from "../components/Card/Card";
import styles from "./EarnWithUs.module.scss";
import Button from "../components/Button/Button";

const cards = [
  {
    description: "Получите партнерскую ссылку",
    image: {
      link: "/images/partnerLink.svg",
      alt: "Получите партнерскую ссылку",
      width: 407,
      height: 320,
    },
    color: "bgBlue",
  },
  {
    description: "Расскажите о iiii.COM",
    image: {
      link: "/images/share.svg",
      alt: "Расскажите о iiii.COM",
      width: 407,
      height: 320,
    },
    color: "bgPurple",
  },
  {
    description: "Получайте хороший процент от покупок по вашей ссылке!",
    image: {
      link: "/images/earnWithUs.svg",
      alt: "Получайте хороший процент от покупок",
      width: 407,
      height: 320,
    },
    color: "bgGreen",
  },
];

const EarnWithUs = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Зарабатывайте вместе с нами!</h2>
      <div className={styles.cards}>
        {cards.map(({ description, image, color }, index) => (
          <Card
            description={description}
            image={image}
            color={color}
            number={index + 1}
            key={index}
          />
        ))}
      </div>
      <Button
        text="Стать партнером"
        icon="/images/Icon.svg"
        className={styles.button}
      />
    </section>
  );
};

export default EarnWithUs;
