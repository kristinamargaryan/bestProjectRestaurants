import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useWindowDimensions from './WindowResize';


const itemData = [
    {
      img: 'https://wildarmenia.com/wp-content/uploads/2019/12/Armenian-Food-1.jpg',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://yerevancard.com/system/for_turist_category_items/imgs/000/000/020/original/Armenian_traditional_dishes.jpg?1525176974',
      title: 'Burger',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToyUzbvFAKaYpFwSvabMKtvo2ASfCnS_k7-hJpnst5-ZppbOB4DThU3rQXIAIQECQmcPA&usqp=CAU',
      title: 'Camera',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzZIkM2EPtVlel2aI6r6pGH7S-13f3DGFFCw&usqp=CAU',
      title: 'Coffee',
      cols: 2,
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGTPheGW13QPfBUVOnCNsIaHSn4cS6hPJ13g&usqp=CAU',
      title: 'Hats',
      cols: 2,
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA4l93wf8WCV7m1N38gA-VjD5tR_Q256CtGg&usqp=CAU',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiOfNa1Q1SJHVRH5KL5QYRibHeHeBf558qRQ&usqp=CAU',
      title: 'Basketball',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAB7eg_59KD1OfngYiOVaYlR5rpmwBcE1fQ&usqp=CAU',
      title: 'Fern',
    },
    {
      img: 'https://www.lragir.am/wp-content/uploads/2020/04/get.jpg',
      title: 'Mushrooms',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvyoE4RkT5AgNtsHpEKxQqKptCCN83CxTFDw&usqp=CAU',
      title: 'Tomato basil',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKki6dSHtLheEUhGIZODLdohvRfaPzzQLPog&usqp=CAU',
      title: 'Sea star',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi_3YYuYic1p8MJQ9QBKhBABCx9n44WwjAAg&usqp=CAU',
      title: 'Bike',
      cols: 2,
    },
  ];

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export  function QuiltedImageList() {
    const {width} = useWindowDimensions()
  return (
    <ImageList
      sx={{ width: width <= 970 ? width - 20 : 500 , height: 800 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}



