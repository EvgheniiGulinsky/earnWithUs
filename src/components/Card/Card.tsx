import React from "react";
import Image from "next/image";
import clsx from "clsx";
import styles from "./Card.module.scss";

interface Props {
  description: string;
  image: {
    link: string;
    alt: string;
    width: number;
    height: number;
  };
  number: number;
  color: string;
}

const Card = ({ description, image, number, color }: Props) => {
  const { link, alt, height, width } = image;
  return (
    <div className={styles.card}>
      <div className={clsx(styles.border, styles[color])}>
        <div className={clsx(styles.content, styles[color])}>
          <div className={styles.heading}>
            <div className={clsx(styles.numberBorder, styles[color])}>
              <div className={clsx(styles.number, styles[color])}>{number}</div>
            </div>
            <p className={styles.description}>{description}</p>
          </div>
          <Image
            src={link}
            alt={alt}
            width={width}
            height={height}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
